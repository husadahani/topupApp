<?php

declare(strict_types=1);

header('Content-Type: application/json');

$health = [
    'status' => 'healthy',
    'timestamp' => date('c'),
    'environment' => env('APP_ENV', 'production'),
    'version' => '1.0.0'
];

// Check if Laravel can bootstrap
try {
    define('LARAVEL_START', microtime(true));
    require __DIR__.'/../vendor/autoload.php';
    $app = require_once __DIR__.'/../bootstrap/app.php';
    
    $health['laravel'] = 'ok';
    $health['app_name'] = config('app.name');
} catch (Exception $e) {
    $health['status'] = 'unhealthy';
    $health['laravel'] = 'error';
    $health['error'] = $e->getMessage();
}

echo json_encode($health, JSON_PRETTY_PRINT);