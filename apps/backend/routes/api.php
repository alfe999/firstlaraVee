<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PensionerController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//http://localhost:8000/api/test
Route::get('/test', function () {
    return 'Hello, from Laravel!';
});

//http://localhost:8000/api/Pensioners
Route::get('/Pensioners', [PensionerController::class, 'index']);
Route::post('/Pensioners', [PensionerController::class, 'store']);
//http://localhost:8000/api/Pensioners/2
Route::get('/Pensioners/{id}', [PensionerController::class, 'show']);
Route::put('/Pensioners/{id}', [PensionerController::class, 'update']);
Route::delete('/Pensioners/{id}', [PensionerController::class, 'destroy']);
