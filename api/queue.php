<?php

declare(strict_types=1);

use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Register the Composer autoloader...
require __DIR__.'/../vendor/autoload.php';

// Bootstrap Laravel
$app = require_once __DIR__.'/../bootstrap/app.php';

// Get request method and action
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$action = $_GET['action'] ?? 'work';

$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);

switch ($action) {
    case 'work':
        if ($method === 'POST') {
            $kernel->call('queue:work', ['--once' => true]);
            echo "Queue worker executed!\n";
        } else {
            echo "Use POST method to run queue worker\n";
        }
        break;
        
    case 'failed':
        $kernel->call('queue:failed');
        break;
        
    case 'retry':
        if ($method === 'POST') {
            $kernel->call('queue:retry', ['all' => true]);
            echo "Failed jobs retried!\n";
        } else {
            echo "Use POST method to retry failed jobs\n";
        }
        break;
        
    case 'flush':
        if ($method === 'POST') {
            $kernel->call('queue:flush');
            echo "Failed jobs flushed!\n";
        } else {
            echo "Use POST method to flush failed jobs\n";
        }
        break;
        
    default:
        echo "Available actions: work, failed, retry, flush\n";
        break;
}