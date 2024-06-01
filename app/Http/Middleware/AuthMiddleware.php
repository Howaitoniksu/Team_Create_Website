<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Validation\UnauthorizedException;
use Symfony\Component\HttpFoundation\Response;

class AuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $token = explode("Bearer ", $request->header('Authorization'));

        if ($token && count($token) === 1) {
            return \response()->json([
                'error' => 'Unauthorized.'
            ], 401);
        }

        $user = User::query()
            ->where('token', $token[1])
            ->first();

        if (!$user) {
            return \response()->json([
                'error' => 'Unauthorized.'
            ], 401);
        }

        \Auth::loginUsingId($user->id);

        return $next($request);
    }
}
