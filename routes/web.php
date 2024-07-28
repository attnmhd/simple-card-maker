<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\PdfController;
use App\Http\Controllers\CardController;
use Illuminate\Foundation\Application;
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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Role routes
Route::controller(RoleController::class)->group(function(){
    Route::get('/role', 'addAndEdit');
    Route::get('/role/{roles}/edit', 'addAndEdit');
    Route::patch('/role/{roles}/edit', 'update');
    Route::post('/role', 'store');
    Route::delete('/role/{roles}', 'destroy');
});

Route::get('/testdown', [PdfController::class, 'printCard']);

// Card routes
Route::controller(CardController::class)->group(function(){
    Route::get('/','index')->name('card.index');
    Route::get('/card', 'add');
    Route::get('/{id}','showCard')->name('card.showCard');
    Route::patch('/card/{cards}/edit', 'update');
    Route::post('/card', 'store')->name('card.store');
    Route::delete('/card/{cards}', 'destroy');
    Route::get('api/card', 'cardApi');
});




Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
