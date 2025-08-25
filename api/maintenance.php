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
$action = $_GET['action'] ?? 'status';

$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);

switch ($action) {
    case 'on':
        if ($method === 'POST') {
            $kernel->call('down', ['--secret' => 'maintenance-secret']);
            echo "Maintenance mode enabled!\n";
        } else {
            echo "Use POST method to enable maintenance mode\n";
        }
        break;
        
    case 'off':
        if ($method === 'POST') {
            $kernel->call('up');
            echo "Maintenance mode disabled!\n";
        } else {
            echo "Use POST method to disable maintenance mode\n";
        }
        break;
        
    case 'status':
    default:
        $maintenanceFile = __DIR__.'/../storage/framework/down';
        if (file_exists($maintenanceFile)) {
            echo "Maintenance mode is ENABLED\n";
            $data = json_decode(file_get_contents($maintenanceFile), true);
            if ($data) {
                echo "Secret: " . ($data['secret'] ?? 'none') . "\n";
                echo "Retry: " . ($data['retry'] ?? 'none') . "\n";
            }
        } else {
            echo "Maintenance mode is DISABLED\n";
        }
        break;
}