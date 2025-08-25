<?php

declare(strict_types=1);

// Error handling for Vercel
error_reporting(E_ALL);
ini_set('display_errors', '0');
ini_set('log_errors', '1');
ini_set('error_log', 'php://stderr');

// Set error handler
set_error_handler(function ($severity, $message, $file, $line) {
    if (!(error_reporting() & $severity)) {
        return;
    }
    
    $error = [
        'type' => 'PHP Error',
        'message' => $message,
        'file' => $file,
        'line' => $line,
        'severity' => $severity
    ];
    
    error_log(json_encode($error));
});

// Set exception handler
set_exception_handler(function ($exception) {
    $error = [
        'type' => get_class($exception),
        'message' => $exception->getMessage(),
        'file' => $exception->getFile(),
        'line' => $exception->getLine(),
        'trace' => $exception->getTraceAsString()
    ];
    
    error_log(json_encode($error));
    
    if (env('APP_DEBUG', false)) {
        http_response_code(500);
        echo json_encode($error);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Internal Server Error']);
    }
});

// Set shutdown function
register_shutdown_function(function () {
    $error = error_get_last();
    if ($error !== null && in_array($error['type'], [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR])) {
        $fatalError = [
            'type' => 'Fatal Error',
            'message' => $error['message'],
            'file' => $error['file'],
            'line' => $error['line']
        ];
        
        error_log(json_encode($fatalError));
        
        if (env('APP_DEBUG', false)) {
            echo json_encode($fatalError);
        } else {
            echo json_encode(['error' => 'Internal Server Error']);
        }
    }
});