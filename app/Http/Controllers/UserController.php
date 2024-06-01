<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChangePasswordRequest;
use App\Models\User;
use Auth;
use GuzzleHttp\Client;
use Hash;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUserByToken()
    {
        return response()->json(Auth::user()->makeHidden([
            'password',
            'created_at',
            'updated_at',
            'token'
        ]));
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

    public function changePassword(ChangePasswordRequest $request)
    {
        $user = Auth::user();
        $data = $request->validated();

        if (!Hash::check($data['password'], $user->password)) {
            return response()->json([
                'success' => false,
                'error' => 'Пароль неверный.'
            ], 403);
        }

        $user->update([
            'password' => $data['new_password']
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Пароль успешно изменен.'
        ]);
    }
}
