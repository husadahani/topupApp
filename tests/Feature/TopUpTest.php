<?php

namespace Tests\Feature;

use Tests\TestCase;

class TopUpTest extends TestCase
{
    /**
     * Test that the home page displays the welcome page with TopUp Center branding.
     */
    public function test_welcome_page_displays_topup_center_branding(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('welcome')
        );
    }

    /**
     * Test that the top-up application page is accessible without authentication.
     */
    public function test_topup_page_is_accessible_without_auth(): void
    {
        $response = $this->get('/topup');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('top-up')
            ->has('services')
            ->has('services.games')
            ->has('services.emoney')
            ->has('services.pulsa')
            ->has('services.data')
            ->has('services.pln')
            ->has('services.streaming')
            ->has('services.voucher')
        );
    }

    /**
     * Test that services data contains expected game services.
     */
    public function test_services_data_contains_games(): void
    {
        $response = $this->get('/topup');

        $response->assertInertia(fn ($page) => $page
            ->where('services.games.0.name', 'Mobile Legends')
            ->where('services.games.1.name', 'Free Fire')
            ->where('services.games.2.name', 'PUBG Mobile')
            ->where('services.games.3.name', 'Genshin Impact')
        );
    }

    /**
     * Test that services data contains expected e-money services.
     */
    public function test_services_data_contains_emoney(): void
    {
        $response = $this->get('/topup');

        $response->assertInertia(fn ($page) => $page
            ->where('services.emoney.0.name', 'GoPay')
            ->where('services.emoney.1.name', 'OVO')
            ->where('services.emoney.2.name', 'DANA')
            ->where('services.emoney.3.name', 'ShopeePay')
        );
    }

    /**
     * Test that services data contains expected pulsa providers.
     */
    public function test_services_data_contains_pulsa_providers(): void
    {
        $response = $this->get('/topup');

        $response->assertInertia(fn ($page) => $page
            ->where('services.pulsa.0.provider', 'Telkomsel')
            ->where('services.pulsa.1.provider', 'Indosat')
            ->where('services.pulsa.2.provider', 'XL')
            ->where('services.pulsa.3.provider', 'Tri')
        );
    }
}