<?php

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
$path_string = str_replace([str_replace(['https://', 'http://'], '', env('APP_URL')), str_replace(['https://', 'http://'], '', env('FRONT_URL'))], '', str_replace(['https://', 'http://'], '', URL::current()));

if(in_array(explode('/', $path_string)[0], ['index', 'index.html', 'index.php'])){
    Route::get($path_string, function () {
        return redirect(env('FRONT_URL').'/home');
    });
} else {
    if(explode('/', $path_string)[0] != 'api'){
        Route::get($path_string, 'FontendController@controlPage');    
    }
}


Route::get('/', function () {
    return redirect(env('FRONT_URL').'/home');
    if (!is_null(config('app.front_url'))) {
        return redirect(config('app.front_url'));
    }
    return response()->json('Success');
})->name('index');


// Application cache cleared.
Route::get('/cache-clear', function() {
    Artisan::call('cache:clear');
    return "Application cache cleared!";
});

// Configuration cached.
Route::get('/config-cache', function() {
    Artisan::call('config:cache');
    return "Configuration cache cleared!<br>Configuration cached successfully!";
});

// Configuration cached.
Route::get('/queue-work', function() {
    $r = Artisan::call('queue:work');
    pr($r);
    return "Done!";
});