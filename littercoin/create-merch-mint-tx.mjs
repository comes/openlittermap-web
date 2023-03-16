import {
    Address, 
    Assets, 
    bytesToHex, 
    CoinSelection,
    ConstrData, 
    hexToBytes, 
    NetworkParams,
    Program, 
    PubKeyHash,
    Value, 
    TxOutput,
    Tx, 
    UTxO 
} from "@hyperionbt/helios";

import { getLittercoinContractDetails } from "./lc-info.mjs";


/**
 * Main calling function via the command line 
 * Usage: mint.js destAddr cBorChangeAddr [cborUtxo1,cborUtxo2,...]
 * @params {string, string, string[]}
 * @output {string} cborSignature, cborTx
 */
const main = async () => {

    // Set the Helios compiler optimizer flag
    let optimize = (process.env.OPTIMIZE === 'true');
    const minAda = BigInt(process.env.MIN_ADA);  // minimum lovelace needed to send an NFT
    const maxTxFee = BigInt(process.env.MAX_TX_FEE);
    const minChangeAmt = BigInt(process.env.MIN_CHANGE_AMT);
    const minUTXOVal = new Value(minAda + maxTxFee + minChangeAmt);

    try {
        const args = process.argv;
        const destAddr = args[2];
        const hexChangeAddr = args[3];
        const cborUtxos = args[4].split(',');

        // Get the change address from the wallet
        const changeAddr = Address.fromHex(hexChangeAddr);

        // Get UTXOs from wallet
        const walletUtxos = cborUtxos.map(u => UTxO.fromCbor(hexToBytes(u)));
        const utxos = CoinSelection.selectSmallestFirst(walletUtxos, minUTXOVal);

        // Get littercoin smart contract and related script details
        const lcDetails = await getLittercoinContractDetails();
        
        // Start building the transaction
        const tx = new Tx();

        // Add the UTXO as inputs
        tx.addInputs(utxos[0]);

        // Add the script as a witness to the transaction
        const compiledMTMintScript = Program.new(lcDetails.mtMintScript).compile(optimize);
        const merchTokenMPH = compiledMTMintScript.mintingPolicyHash;
        tx.attachScript(compiledMTMintScript);

        // Create an empty Redeemer because we must always send a Redeemer with
        // a plutus script transaction even if we don't actually use it.
        const merchRedeemer = new ConstrData(0, []);
        const merchToken = [[hexToBytes(process.env.MERCH_TOKEN_NAME), BigInt(1)]];
        
        // Add the mint to the tx
        tx.mintTokens(
            merchTokenMPH,
            merchToken,
            merchRedeemer
        )

        // Attach the output with the minted merchant token to the destination address
        tx.addOutput(new TxOutput(
            Address.fromBech32(destAddr),
            new Value(minAda, new Assets([[merchTokenMPH, merchToken]]))
          ));

        // Add owner pkh as a signer which is required to mint littercoin
        tx.addSigner(PubKeyHash.fromHex(process.env.OWNER_PKH));

        // Network Params
        const networkParams = new NetworkParams(JSON.parse(lcDetails.netParams));

        // Send any change back to the buyer
        await tx.finalize(networkParams, changeAddr, utxos[1]);

        console.log("txMinted: ",tx.dump());
        const returnObj = {
            status: 200,
            cborTx: bytesToHex(tx.toCbor())
        }
        process.stdout.write(JSON.stringify(returnObj));

    } catch (err) {
        const returnObj = {
            status: 500
        }
        console.error("create-merchant-tx: ", err);
        process.stdout.write(JSON.stringify(returnObj));
    }
}

main();


  
