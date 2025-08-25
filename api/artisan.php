<?php

declare(strict_types=1);

use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Register the Composer autoloader...
require __DIR__.'/../vendor/autoload.php';

// Bootstrap Laravel
$app = require_once __DIR__.'/../bootstrap/app.php';

// Get command from query string
$command = $_GET['command'] ?? 'list';

$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);

try {
    $kernel->call($command);
    echo "Command executed successfully!\n";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}