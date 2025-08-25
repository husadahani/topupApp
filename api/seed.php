<?php

declare(strict_types=1);

use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Register the Composer autoloader...
require __DIR__.'/../vendor/autoload.php';

// Bootstrap Laravel
$app = require_once __DIR__.'/../bootstrap/app.php';

// Run seeders
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->call('db:seed', ['--force' => true]);

echo "Database seeding completed successfully!\n";