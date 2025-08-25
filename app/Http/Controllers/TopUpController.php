<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Services\TopUpService;
use Inertia\Inertia;

class TopUpController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct(
        protected TopUpService $topUpService
    ) {}

    /**
     * Display the main application page with all services.
     */
    public function index()
    {
        $services = $this->topUpService->getServicesData();
        
        return Inertia::render('top-up', [
            'services' => $services
        ]);
    }
}