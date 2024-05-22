<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUserByToken(Request $request): JsonResponse
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
}
