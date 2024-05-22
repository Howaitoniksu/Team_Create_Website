<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $data = $request->validated();

        $user = User::query()
            ->create($data);

        $user->generateAccessToken();

        return response()->json([
            'success' => true,
            'token' => $user->token
        ]);
    }

    public function login(LoginRequest $request)
    {
        $data = $request->validated();

        $user = User::query()
            ->where('email', $data['email'])
            ->first();

        if ($user && Hash::check($data['password'], $user->password)) {
            $user->generateAccessToken();

            return response()->json([
                'success' => true,
                'token' => $user->token
            ]);
        }

        return response()->json([
            'success' => false,
            'error' => 'Invalid credentials.'
        ], 401);
    }
}
