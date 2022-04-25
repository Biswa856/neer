<?php

use App\Http\Controllers\AuthenticationController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['guest'], function () {
    Route::get('/', function () {
        return redirect('/login');
    });

    Route::get('/login', function () {
        return Inertia::render('Authentication', [
            'name' => 'login'
        ]);
    });

    Route::get('/signup', function () {
        return Inertia::render('Authentication', [
            'name' => 'signup'
        ]);
    });

    Route::get('/forgot-password', function () {
        return Inertia::render('Authentication', [
            'name' => 'forgot'
        ]);
    });

    Route::post('/register', [AuthenticationController::class, 'register']);
    Route::post('/login', [AuthenticationController::class, 'login']);
    Route::post('/reset-password', [AuthenticationController::class, 'resetPassword']);
});


Route::group(['auth'],function () {
    Route::get('/dashboard', function () {
        dd(99);
    });
});