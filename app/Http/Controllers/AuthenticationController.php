<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Http\Requests\SignupUserRequest;
use Illuminate\Http\Request;

class AuthenticationController extends Controller
{
    public function register(SignupUserRequest $request)
    {
        return redirect('/login');
    }

    public function login(LoginRequest $request)
    {
        return redirect()->to('/dashboard');
    }

    public function resetPassword(ResetPasswordRequest $request)
    {
        //
    }
}
