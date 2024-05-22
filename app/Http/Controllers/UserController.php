<?php

namespace App\Http\Controllers;

use App\Models\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUserByToken(Request $request)
    {
        if (!$request->hasHeader('Authorization')) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $token = explode("Bearer ", $request->header('Authorization'))[1];

        $user = User::query()
            ->where('token', $token)
            ->first();

        return response()->json($user);
    }

    public function sendCode(Request $request)
    {
        $client = new Client();
        $response = $client->request('POST', 'https://iis.ngknn.ru/NGKNN/МамшеваЮС/MedicMadlab/api/SendCode', [
            'headers' => [
                'User-email' => $request->all()['email']
            ]
        ]);

        if (!$response->getBody()->getContents() === 'Access is available') {
            return response()->json(['error' => 'Incorrect.'], 401);
        };

        return response()->json(['success' => true, 'message' => 'Код отправлен.']);
    }
}
