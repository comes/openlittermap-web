import{n as c}from"./app-LvxnoPA3.js";/* empty css            */const l="/build/assets/nami-BuYycVV_.png",d="/build/assets/eternl-CDqNp3Eg.png",u={name:"Littercoin",async created(){this.loading=!0,await axios.get("/get-users-littercoin").then(a=>{this.littercoinEarned=a.data.littercoinEarned,this.littercoinDue=a.data.littercoinDue}).catch(a=>{console.error("littercoin",a)}),await axios.get("/littercoin-info").then(async a=>{const t=await JSON.parse(a.data);if(t.status==200)this.adaAmount=t.payload.list[0].int/1e6,this.lcAmount=t.payload.list[1].int,this.ratio=this.adaAmount/this.lcAmount,this.lcAddr=t.payload.addr,this.lcAddrURL="https://cexplorer.io/address/"+t.payload.addr,this.lcScriptName=t.payload.scriptName,this.lcScriptURL="/contracts/"+t.payload.scriptName;else throw console.error("Could not fetch littercoin contract info")}).catch(a=>{console.error("littercoin-info",a)}),await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd").then(a=>{console.log("ada-price",a),this.adaValues=a.data.cardano}).catch(a=>{console.error("ada-price",a)}),this.loading=!1},data(){return{loading:!0,adaAmount:0,lcAmount:0,ratio:0,adaValues:{},selectedCurrency:"usd",currencySymbols:{usd:"$",eur:"€",btc:"₿"},lcAddr:"",lcAddrURL:"",lcScriptName:"",lcScriptURL:"",littercoinEarned:0,littercoinDue:0,walletChoice:"",walletLoading:!1,adaBalance:0,littercoinBalance:0,merchTokenBalance:0,mintDestAddr:"",merchDestAddr:"",addAdaQty:0,lcQty:0,mintFormSubmitted:!1,burnFormSubmitted:!1,merchFormSubmitted:!1,addAdaFormSubmitted:!1,mintSuccess:!1,burnSuccess:!1,merchSuccess:!1,addAdaSuccess:!1,mintTxId:"",burnTxId:"",merchTxId:"",addAdaTxId:"",mintTxIdURL:"",burnTxIdURL:"",merchTxIdURL:"",addAdaTxIdURL:""}},computed:{user(){return this.$store.state.user.user},isAdmin(){return this.$store.state.user.admin},checkMintDisabled(){return!!this.mintFormSubmitted},checkBurnDisabled(){return!!this.burnFormSubmitted},checkMerchDisabled(){return!!this.merchFormSubmitted},checkAddAdaDisabled(){return!!this.addAdaFormSubmitted},getLittercoinPrice(){const a=this.currencySymbols[this.selectedCurrency],t=this.adaValues[this.selectedCurrency];return this.lcAmount===0?0:a.toString()+(this.ratio*t).toFixed(2).toString()}},methods:{async getWalletInfo(){this.walletLoading=!0;try{var a;this.walletChoice==="nami"?a=await window.cardano.nami.enable():this.walletChoice==="eternl"?a=await window.cardano.eternl.enable():(alert("No wallet selected"),this.mintFormSubmitted=!1);const t=await a.getBalance();console.log({balanceCbor:t});const e=await a.getUtxos();console.log({cborUtxos:e}),await axios.post("/wallet-info",{balanceCborHex:t,utxos:e}).then(async i=>{const s=await JSON.parse(i.data);this.adaBalance=s.payload.adaAmt,this.littercoinBalance=s.payload.lcAmt,this.merchTokenBalance=s.payload.mtAmt,this.walletLoading=!1}).catch(i=>{console.error("Error accessing user wallet",i.response.data.errors),alert("Error accessing user wallet")})}catch(t){console.error(t)}},submitForm:function(a){if(!this.walletChoice){alert("Please select a wallet");return}if(this.adaBalance<5){alert("Not enough Ada in the wallet for a transaction, please make sure there is 5 or more Ada in your wallet");return}if(a==="mint"){if(!this.mintDestAddr.match(/^addr/)){alert("Please enter a valid mint littercoin destination address");return}if(!this.littercoinDue>0){alert("There are no littercoin due for minting");return}this.mintFormSubmitted=!0,this.submitMint()}if(a==="burn"){if(this.lcQty<1){alert("Minimum 1 littercoin required for burn");return}if(this.lcQty>this.littercoinBalance){alert("The amount of littercoin to burn exceeds the amount of littercoin in the wallet");return}if(this.merchTokenBalance<1){alert("No Merchant Tokens founds in the wallet");return}this.burnFormSubmitted=!0,this.submitBurn()}if(a==="merchant"){if(!this.merchDestAddr.match(/^addr/)){alert("Please enter a valid mint merchant token destination address");return}this.merchFormSubmitted=!0,this.merchMint()}if(a==="addAda"){if(!this.addAdaQty>2){alert("Minimum 2 Ada donation amount required");return}this.addAdaFormSubmitted=!0,this.addAda()}},async submitMint(){try{var a;this.walletChoice==="nami"?a=await window.cardano.nami.enable():this.walletChoice==="eternl"?a=await window.cardano.eternl.enable():(alert("No wallet selected"),this.mintFormSubmitted=!1);const t=await a.getUtxos(),e=await a.getChangeAddress();await axios.post("/littercoin-mint-tx",{destAddr:this.mintDestAddr,changeAddr:e,utxos:t}).then(async i=>{const s=await JSON.parse(i.data);if(s.status==200){console.log("Get wallet signature");var o;try{o=await a.signTx(s.cborTx,!0)}catch(r){console.error(r),this.mintFormSubmitted=!1;return}console.log("Submit transaction..."),await axios.post("/littercoin-submit-mint-tx",{cborSig:o,cborTx:s.cborTx}).then(async r=>{const n=await JSON.parse(r.data);n.status==200?(this.mintTxId=n.txId,this.mintTxIdURL="https://cexplorer.io/tx/"+n.txId,this.mintSuccess=!0):(console.error("Littercoin Mint transaction could not be submitted"),alert("Littercoin Mint transaction could not be submitted, please try again"),this.mintFormSubmitted=!1)}).catch(r=>{r.response.status==422?console.error("Invalid Wallet Input",r.response.data.errors):console.error("littercoin-submit-mint-tx: ",r),alert("Littercoin Mint transaction could not be submitted, please try again"),this.mintFormSubmitted=!1})}else console.error("Littercoin Mint transaction could not be submitted"),alert("Littercoin Mint transaction could not be submitted, please try again"),this.mintFormSubmitted=!1}).catch(i=>{i.response.status==422?(console.error("Invalid User Input",i.response.data.errors),alert("Please check that you have entered a valid destination address")):(console.error("littercoin-mint-tx",i),alert("Littercoin Mint transaction could not be submitted, please try again")),this.mintFormSubmitted=!1})}catch(t){console.error(t),this.mintFormSubmitted=!1}},async submitBurn(){try{var a;this.walletChoice==="nami"?a=await window.cardano.nami.enable():this.walletChoice==="eternl"?a=await window.cardano.eternl.enable():(alert("No wallet selected"),this.burnFormSubmitted=!1);const t=await a.getUtxos(),e=await a.getChangeAddress();await axios.post("/littercoin-burn-tx",{lcQty:this.lcQty,changeAddr:e,utxos:t}).then(async i=>{const s=await JSON.parse(i.data);if(s.status==200){console.log("Get wallet signature");var o;try{o=await a.signTx(s.cborTx,!0)}catch(r){console.error(r),this.burnFormSubmitted=!1;return}console.log("Submit transaction..."),await axios.post("/littercoin-submit-burn-tx",{cborSig:o,cborTx:s.cborTx}).then(async r=>{const n=await JSON.parse(r.data);n.status==200?(this.burnTxId=n.txId,this.burnTxIdURL="https://cexplorer.io/tx/"+n.txId,this.burnSuccess=!0):(console.error("Littercoin Burn transaction was not successful"),alert("Littercoin Burn transaction could not be submitted, please try again"),this.burnFormSubmitted=!1)}).catch(r=>{r.response.status==422?console.error("Invalid Wallet Input",r.response.data.errors):console.error("littercoin-submit-burn-tx: ",r),alert("Littercoin Burn transaction could not be submitted, please try again"),this.burnFormSubmitted=!1})}else s.status==401?(console.error("Insufficient Littercoin In Wallet For Burn"),alert("Insufficient Littercoin In Wallet For Burn"),this.burnFormSubmitted=!1):s.status==402?(console.error("Merchant Token Not Found"),alert("Merchant Token Not Found"),this.burnFormSubmitted=!1):s.status==403?(console.error("Ada Withdraw amount is less than the minimum 2 Ada"),alert("Ada Withdraw amount is less than the minimum 2 Ada"),this.burnFormSubmitted=!1):s.status==404?(console.error("Insufficient funds in Littercoin contract"),alert("Insufficient funds in Littercoin contract"),this.burnFormSubmitted=!1):s.status==405?(console.error("No valid merchant token found in the wallet"),alert("No valid merchant token found in the wallet"),this.burnFormSubmitted=!1):(console.error("Littercoin Burn transaction was not successful"),alert("Littercoin Burn transaction could not be submitted, please try again"),this.burnFormSubmitted=!1)}).catch(i=>{i.response.status==422?(console.error("Invalid User Input",i.response.data.errors),alert("Please check that you have entered a valid destination address")):(console.error("littercoin-burn-tx",i),alert("Littercoin Burn transaction could not be submitted, please try again")),this.burnFormSubmitted=!1})}catch(t){console.error(t),this.burnFormSubmitted=!1}},async merchMint(){try{var a;this.walletChoice==="nami"?a=await window.cardano.nami.enable():this.walletChoice==="eternl"?a=await window.cardano.eternl.enable():(alert("No wallet selected"),this.merchFormSubmitted=!1);const t=await a.getUtxos(),e=await a.getChangeAddress();await axios.post("/merchant-mint-tx",{destAddr:this.merchDestAddr,changeAddr:e,utxos:t}).then(async i=>{const s=await JSON.parse(i.data);if(s.status==200){console.log("Get wallet signature");var o;try{o=await a.signTx(s.cborTx,!0)}catch(r){console.error(r),this.merchFormSubmitted=!1;return}console.log("Submit transaction..."),await axios.post("/merchant-submit-mint-tx",{cborSig:o,cborTx:s.cborTx}).then(async r=>{const n=await JSON.parse(r.data);n.status==200?(this.merchTxId=n.txId,this.merchTxIdURL="https://cexplorer.io/tx/"+n.txId,this.merchSuccess=!0):(console.error("Merchant Token Mint transaction could not be submitted"),alert("Merchant Token Mint transaction could not be submitted, please try again"),this.merchFormSubmitted=!1)}).catch(r=>{r.response.status==422?console.error("Invalid Wallet Input",r.response.data.errors):console.error("merchant-submit-mint-tx: ",r),alert("Merchant Token Mint transaction could not be submitted, please try again"),this.merchFormSubmitted=!1})}else s.status==407?(console.error("Must be an admin user to mint a merchant token"),alert("Must be an admin user to mint a merchant token"),this.merchFormSubmitted=!1):(console.error("Merchant Token Mint transaction could not be submitted"),alert("Merchant Token Mint transaction could not be submitted, please try again"),this.merchFormSubmitted=!1)}).catch(i=>{i.response.status==422?(console.error("Invalid User Input",i.response.data.errors),alert("Please check that you have entered a valid destination address")):(console.error("merchant-submit-mint-tx: ",i),alert("Merchant Token Mint transaction could not be submitted, please try again")),this.merchFormSubmitted=!1})}catch(t){console.error(t),this.merchFormSubmitted=!1}},async addAda(){try{var a;this.walletChoice==="nami"?a=await window.cardano.nami.enable():this.walletChoice==="eternl"?a=await window.cardano.eternl.enable():(alert("No wallet selected"),this.addAdaFormSubmitted=!1);const t=await a.getUtxos(),e=await a.getChangeAddress();await axios.post("/add-ada-tx",{adaQty:this.addAdaQty,changeAddr:e,utxos:t}).then(async i=>{const s=await JSON.parse(i.data);if(s.status==200){console.log("Get wallet signature");var o;try{o=await a.signTx(s.cborTx,!0)}catch(r){console.error(r),this.addAdaFormSubmitted=!1;return}await axios.post("/add-ada-submit-tx",{cborSig:o,cborTx:s.cborTx}).then(async r=>{const n=await JSON.parse(r.data);n.status==200?(this.addAdaTxId=n.txId,this.addAdaTxIdURL="https://cexplorer.io/tx/"+n.txId,this.addAdaSuccess=!0):(console.error("Could not submit transaction"),alert("Add Ada transaction could not be submitted, please try again"),this.addAdaFormSubmitted=!1)}).catch(r=>{r.response.status==422?console.error("Invalid Wallet Input",r.response.data.errors):console.error("add-ada-submit-tx: ",r),alert("Add Ada transaction could not be submitted, please try again"),this.addAdaFormSubmitted=!1})}else s.status==408?(console.error("More Ada in the wallet required for this transaction"),alert('More Ada in the wallet required for this transaction"'),this.addAdaFormSubmitted=!1):(console.error("Add Ada transaction was not successful"),alert("Add Ada transaction could not be submitted, please try again"),this.addAdaFormSubmitted=!1)}).catch(i=>{i.response.status==422?(console.error("Invalid User Input",i.response.data.errors),alert("Please check that you have entered a valid destination address")):(console.error("add-ada-tx",i),alert("Add Ada transaction could not be submitted, please try again")),this.addAdaFormSubmitted=!1})}catch(t){console.error(t),this.addAdaFormSubmitted=!1}}}};var m=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"padding-left":"1em","padding-right":"1em"}},[e("h1",{staticClass:"title is-4"},[t._v(" "+t._s(t.$t("settings.littercoin.littercoin-header")))]),e("hr"),e("br"),e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-two-thirds is-offset-1"},[e("h1",{staticClass:"title is-4"},[t._v("Littercoin Smart Contract ")]),t.loading?e("p",[t._v("Loading...")]):e("div",[e("div",{staticClass:"mb-2"},[e("strong",[t._v("Ada Locked at the Smart Contract")]),e("p",[t._v(t._s(this.adaAmount.toLocaleString())+" ada")])]),e("div",{staticClass:"mb-2"},[e("strong",[t._v("Total Littercoin In Circulation")]),e("p",[t._v(t._s(this.lcAmount.toLocaleString())+" Littercoin")])]),e("div",{staticClass:"mb-2"},[e("strong",[t._v("Ratio:")]),e("p",[t._v(t._s(this.ratio.toLocaleString())+" ada per Littercoin")]),e("p",[t._v("or "+t._s(this.getLittercoinPrice)+" per Littercoin")])]),e("p",[t._v("Source Code: "),e("a",{attrs:{href:this.lcScriptURL,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(this.lcScriptName))])]),e("p",[t._v("Address: "),e("a",{staticStyle:{"font-size":"small"},attrs:{href:this.lcAddrURL,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(this.lcAddr))])])]),e("hr"),e("h1",{staticClass:"title is-4"},[t._v("My Littercoin")]),e("p",[t._v("Total Littercoin Earned: "+t._s(this.littercoinEarned))]),e("p",[t._v("Total Littercoin Received: "+t._s(this.littercoinEarned-this.littercoinDue))]),e("p",[t._v("Littercoin Due: "+t._s(this.littercoinDue))]),e("hr"),e("div",[e("h1",{staticClass:"title is-4"},[t._v("Select Your Wallet")]),e("p",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.walletChoice,expression:"walletChoice"}],attrs:{type:"radio",value:"nami"},domProps:{checked:t._q(t.walletChoice,"nami")},on:{change:[function(i){t.walletChoice="nami"},t.getWalletInfo]}}),t._v("   "),e("img",{staticStyle:{width:"20px",height:"20px"},attrs:{src:l,alt:"Nami Wallet"}}),e("label",[t._v("  Nami")])]),e("br"),e("p",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.walletChoice,expression:"walletChoice"}],attrs:{type:"radio",value:"eternl"},domProps:{checked:t._q(t.walletChoice,"eternl")},on:{change:[function(i){t.walletChoice="eternl"},t.getWalletInfo]}}),t._v("  "),e("img",{staticStyle:{width:"20px",height:"20px"},attrs:{src:d,alt:"Eternl Wallet"}}),e("label",[t._v("  Eternl")])]),e("br"),t.walletChoice?e("div",[t.walletLoading?e("p",[t._v("Loading...")]):e("div",[t._v(" Ada amount: "+t._s(this.adaBalance.toLocaleString())+" "),e("br"),t._v(" Littercoin amount: "+t._s(this.littercoinBalance.toLocaleString())+" "),e("br"),t._v(" Merchant Token amount: "+t._s(this.merchTokenBalance.toLocaleString())+" "),e("br")])]):t._e(),e("hr"),t.walletChoice?e("div",[t.mintSuccess?t._e():e("form",{attrs:{method:"post"},on:{submit:function(i){return i.preventDefault(),t.submitForm("mint")}}},[e("h1",{staticClass:"title is-4"},[t._v("Mint Littercoin")]),t._v(" Enter the wallet where you want your Littercoin to be sent "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mintDestAddr,expression:"mintDestAddr"}],staticClass:"input",attrs:{placeholder:"Enter destination wallet address"},domProps:{value:t.mintDestAddr},on:{input:function(i){i.target.composing||(t.mintDestAddr=i.target.value)}}}),e("div",{staticStyle:{"text-align":"center","padding-bottom":"1em"}},[e("button",{staticClass:"button is-medium is-primary mb1 mt1",class:t.mintFormSubmitted?"is-loading":"",attrs:{disabled:t.checkMintDisabled}},[t._v("Submit Tx")])])]),t.mintSuccess?e("div",[e("p"),e("h1",{staticClass:"title is-4"},[t._v("Mint Littercoin Success!!!")]),e("p"),e("p",[t._v("Please wait approximately 20-60 seconds for the littercoin to show up in your wallet.")]),e("p",[t._v("To track this transaction on the blockchain, select the TxId link below.")]),e("p",[t._v("TxId: "),e("a",{staticStyle:{"font-size":"small"},attrs:{href:this.mintTxIdURL,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(this.mintTxId))])])]):t._e(),e("hr")]):t._e(),t.walletChoice?e("div",[t.burnSuccess?t._e():e("form",{attrs:{method:"post"},on:{submit:function(i){return i.preventDefault(),t.submitForm("burn")}}},[e("h1",{staticClass:"title is-4"},[t._v("Burn Littercoin")]),t._v(" Only those holding a Merchant Token can burn Littercoin to received Ada from the Littercoin Smart Contract "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.lcQty,expression:"lcQty"}],staticClass:"input",attrs:{type:"number",placeholder:"Enter number of littercoins to burn"},domProps:{value:t.lcQty},on:{input:function(i){i.target.composing||(t.lcQty=i.target.value)}}}),e("div",{staticStyle:{"text-align":"center","padding-bottom":"1em"}},[e("button",{staticClass:"button is-medium is-primary mb1 mt1",class:t.burnFormSubmitted?"is-loading":"",attrs:{disabled:t.checkBurnDisabled}},[t._v("Submit Tx")])]),t._v(" Note: There is a 4.2% (or 1 Ada minimum) service fee included in the burn transaction ")]),t.burnSuccess?e("div",[e("p"),e("h1",{staticClass:"title is-4"},[t._v("Burn Littercoin Success!!!")]),e("p"),e("p",[t._v("Please wait approximately 20-60 seconds for the Ada to show up in your wallet.")]),e("p",[t._v("To track this transaction on the blockchain, select the TxId link below.")]),e("p",[t._v("TxId: "),e("a",{staticStyle:{"font-size":"small"},attrs:{href:this.burnTxIdURL,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(this.burnTxId))])])]):t._e(),e("hr")]):t._e(),t.walletChoice?e("div",[!t.merchSuccess&&t.isAdmin?e("form",{attrs:{method:"post"},on:{submit:function(i){return i.preventDefault(),t.submitForm("merchant")}}},[e("p"),e("h1",{staticClass:"title is-4"},[t._v("Mint Merchant Token")]),e("p"),t._v(" Enter the wallet where you want a Merchant Token to be sent "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.merchDestAddr,expression:"merchDestAddr"}],staticClass:"input",attrs:{placeholder:"Enter destination wallet address"},domProps:{value:t.merchDestAddr},on:{input:function(i){i.target.composing||(t.merchDestAddr=i.target.value)}}}),e("div",{staticStyle:{"text-align":"center","padding-bottom":"1em"}},[e("button",{staticClass:"button is-medium is-primary mb1 mt1",class:t.merchFormSubmitted?"is-loading":"",attrs:{disabled:t.checkMerchDisabled}},[t._v("Submit Tx")])])]):t._e(),t.merchSuccess&&t.isAdmin?e("div",[e("p"),e("h1",{staticClass:"title is-4"},[t._v("Mint Merchant Token Success!!!")]),e("p"),e("p",[t._v("Please wait approximately 20-60 seconds for the merchant token to show up in the wallet.")]),e("p",[t._v("To track this transaction on the blockchain, select the TxId link below.")]),e("p",[t._v("TxId: "),e("a",{staticStyle:{"font-size":"small"},attrs:{href:this.merchTxIdURL,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(this.merchTxId))])])]):t._e(),e("hr")]):t._e(),t.walletChoice?e("div",[t.addAdaSuccess?t._e():e("form",{attrs:{method:"post"},on:{submit:function(i){return i.preventDefault(),t.submitForm("addAda")}}},[e("p"),e("h1",{staticClass:"title is-4"},[t._v("Add Ada To Littercoin Smart Contract")]),e("p"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addAdaQty,expression:"addAdaQty"}],staticClass:"input",attrs:{type:"number",placeholder:"Enter amount of Ada to send"},domProps:{value:t.addAdaQty},on:{input:function(i){i.target.composing||(t.addAdaQty=i.target.value)}}}),e("div",{staticStyle:{"text-align":"center","padding-bottom":"1em"}},[e("button",{staticClass:"button is-medium is-primary mb1 mt1",class:t.addAdaFormSubmitted?"is-loading":"",attrs:{disabled:t.checkAddAdaDisabled}},[t._v("Submit Tx")])])]),t.addAdaSuccess?e("div",[e("p"),e("h1",{staticClass:"title is-4"},[t._v("Add Ada Success!!!")]),e("p"),e("p",[t._v("Please wait approximately 20-60 seconds and refresh this page for the Ada to show up in the Littercoin Smart Contract.")]),e("p",[t._v("To track this transaction on the blockchain, select the TxId link below.")]),e("p",[t._v("TxId: "),e("a",{staticStyle:{"font-size":"small"},attrs:{href:this.addAdaTxIdURL,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(this.addAdaTxId))])])]):t._e(),e("hr")]):t._e()])])])])},h=[],b=c(u,m,h,!1,null,null);const v=b.exports;export{v as default};
