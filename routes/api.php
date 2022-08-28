<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('user', function (Request $request) {
        return $request->user;
    });

    Route::post('logout', [AuthController::class, 'logout']);
});

Route::post('login', [AuthController::class, 'login']);
Route::post('signup', [AuthController::class, 'register']);