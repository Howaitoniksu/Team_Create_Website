<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CallbackController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['prefix' => 'auth'], function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
});

Route::group(['prefix' => 'callback'], function () {
    Route::post('/', [CallbackController::class, 'store']);
});

Route::group(['prefix' => 'user'], function () {
    Route::get('/', [UserController::class, 'getUserByToken']);
    Route::post('/code', [UserController::class, 'sendCode']);
});
