<?php

// Generate Laravel APP_KEY
$key = 'base64:' . base64_encode(random_bytes(32));
echo "APP_KEY=" . $key . "\n";
echo "\nCopy the above line to your Vercel environment variables.\n";