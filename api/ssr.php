<?php

declare(strict_types=1);

use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Register the Composer autoloader...
require __DIR__.'/../vendor/autoload.php';

// Bootstrap Laravel and handle the SSR request...
$app = require_once __DIR__.'/../bootstrap/app.php';

// Handle SSR request
$request = Request::capture();
$response = $app->handleRequest($request);

// For SSR, we need to return the rendered HTML
if ($response->headers->get('Content-Type') === 'text/html') {
    echo $response->getContent();
} else {
    $response->send();
}