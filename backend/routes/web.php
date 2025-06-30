<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TrilhasController;

Route::get('/api', fn() => view('welcome'));

Route::get('/teste', fn() => 'Hello world');

Route::middleware('api')
     ->any('api/sendContent', [TrilhasController::class, 'generateLearningPath']);
