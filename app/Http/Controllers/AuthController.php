<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Auth;
use Hash;

class AuthController extends Controller
{

    public function register(Request $request) {
        $validatedData = $request->validate([
            'email' => 'required|string|email',
            'username' => 'required|string',
            'password' => 'required|string'
        ]);
        $validatedData['password'] = Hash::make($validatedData['password']);
        $user = User::create($validatedData);
        Auth::login($user);
        return response()->json($user);
    }


    public function login(Request $request) {
        $validatedData = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);
        if(!Auth::attempt($validatedData)){
            return response()->json('Login Failed');
        }
        return response()->json(auth()->user(), 200);
    }
    
    public function logout() {
        Auth::guard('web')->logout();
        return response()->json('Successfully logged out');
    }
}
