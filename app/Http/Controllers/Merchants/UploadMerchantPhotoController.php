<?php

namespace App\Http\Controllers\Merchants;

use App\Http\Controllers\Controller;
use App\Models\Merchant;
use App\Models\MerchantPhoto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class UploadMerchantPhotoController extends Controller
{
    public function __invoke (Request $request)
    {
        \Log::info($request);

        $request->validate([
            'file' => 'required|mimes:jpg,png,jpeg,heif,heic',
            'merchantId' => 'required'
        ]);

        $merchant = Merchant::find($request->merchantId);

        if (!$merchant)
        {
            return [
                'success' => false,
                'msg' => 'merchant not found'
            ];
        }

        try
        {
            $uploadedFile = $request->file('file');
            $filename = time() . '.' . $uploadedFile->getClientOriginalExtension();

            if (app()->environment('local')) {
                // In local environment, save to the local disk
                Storage::disk('local')->put($filename, file_get_contents($uploadedFile));
            }
            else
            {
                // In production environment, save to AWS S3
                Storage::disk('s3')->put($filename, file_get_contents($uploadedFile));
            }

            // Create a photo record
            $merchantPhoto = MerchantPhoto::create([
                'uploaded_by' => Auth::user()->id,
                'filepath' => $filename,
                'merchant_id' => $merchant->id
            ]);
        }
        catch (\Exception $exception)
        {
            \Log::info(['UploadMerchantPhotoController', $exception->getMessage()]);

            return [
                'success' => false,
                'msg' => 'problem'
            ];
        }

        return response()->json([
            'success' => true,
            'filename' => $filename,
            'photo' => $merchantPhoto
        ]);
    }
}
