<?php

use App\Http\Controllers\Dashboard\WordController;
use App\Http\Controllers\Front\FeedbackController;
use Illuminate\Support\Facades\Route;

//Localization
Route::get('/languages/{loc}', function ($loc) {
    if (in_array($loc, ['en', 'ru', 'uz'])) {
        session()->put('locale', $loc);
    }
    return redirect()->back();
});

//Front
Route::get('/', [\App\Http\Controllers\Front\FrontController::class, 'index'])->name('main');
Route::get('/feedback', [FeedbackController::class, 'store'])->name('front.feedback.store');
//Dashboard
Route::group(['prefix' => 'dashboard'], function (){
    Route::name('dashboard.')->group(function (){

        Route::get('/', [\App\Http\Controllers\Dashboard\DashboardController::class, 'index'])->name('index');
        Route::get('/words', [WordController::class, 'index'])->name('words.index');
        
    });
});


require __DIR__.'/auth.php';
