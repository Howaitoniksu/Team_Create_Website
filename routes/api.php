<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CallbackController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'auth'], function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
});

Route::group(['prefix' => 'callbacks'], function () {
    Route::post('/', [CallbackController::class, 'store']);
});

Route::group(['prefix' => 'user'], function () {

    Route::group(['middleware' => 'auth.token'], function () {
        Route::get('/', [UserController::class, 'getUserByToken']);
        Route::post('/password', [UserController::class, 'changePassword']);
    });

    Route::post('/code', [UserController::class, 'sendCode']);
});
