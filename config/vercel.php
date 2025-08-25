<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Vercel Configuration
    |--------------------------------------------------------------------------
    |
    | Configuration specific to Vercel deployment
    |
    */

    'cache' => [
        'default' => env('CACHE_DRIVER', 'array'),
        'stores' => [
            'array' => [
                'driver' => 'array',
                'serialize' => false,
            ],
        ],
    ],

    'session' => [
        'driver' => env('SESSION_DRIVER', 'cookie'),
        'lifetime' => env('SESSION_LIFETIME', 120),
        'expire_on_close' => false,
        'encrypt' => false,
        'files' => storage_path('framework/sessions'),
        'connection' => env('SESSION_CONNECTION'),
        'table' => 'sessions',
        'store' => env('SESSION_STORE'),
        'lottery' => [2, 100],
        'cookie' => env(
            'SESSION_COOKIE',
            Str::slug(env('APP_NAME', 'laravel'), '_').'_session'
        ),
        'path' => '/',
        'domain' => env('SESSION_DOMAIN'),
        'secure' => env('SESSION_SECURE_COOKIE'),
        'http_only' => true,
        'same_site' => 'lax',
    ],

    'logging' => [
        'default' => env('LOG_CHANNEL', 'stderr'),
        'channels' => [
            'stderr' => [
                'driver' => 'monolog',
                'level' => env('LOG_LEVEL', 'debug'),
                'handler' => Monolog\Handler\StreamHandler::class,
                'formatter' => env('LOG_STDERR_FORMATTER'),
                'formatter_with' => [
                    'format' => null,
                    'dateFormat' => null,
                    'allowInlineLineBreaks' => true,
                ],
                'handler_with' => [
                    'stream' => 'php://stderr',
                ],
            ],
        ],
    ],
];