<?php

namespace App\Services;

class TopUpService
{
    /**
     * Get sample services data for demonstration.
     */
    public function getServicesData(): array
    {
        return [
            'games' => [
                ['id' => 1, 'name' => 'Mobile Legends', 'icon' => '🎮', 'denominations' => [86, 172, 257, 514, 1050]],
                ['id' => 2, 'name' => 'Free Fire', 'icon' => '🔥', 'denominations' => [70, 140, 355, 720, 1450]],
                ['id' => 3, 'name' => 'PUBG Mobile', 'icon' => '🎯', 'denominations' => [60, 325, 660, 1800, 3850]],
                ['id' => 4, 'name' => 'Genshin Impact', 'icon' => '⚡', 'denominations' => [60, 330, 1090, 2200, 5500]],
            ],
            'emoney' => [
                ['id' => 1, 'name' => 'GoPay', 'icon' => '💰', 'denominations' => [10000, 25000, 50000, 100000, 200000]],
                ['id' => 2, 'name' => 'OVO', 'icon' => '💳', 'denominations' => [10000, 25000, 50000, 100000, 250000]],
                ['id' => 3, 'name' => 'DANA', 'icon' => '💸', 'denominations' => [10000, 25000, 50000, 100000, 200000]],
                ['id' => 4, 'name' => 'ShopeePay', 'icon' => '🛍️', 'denominations' => [10000, 25000, 50000, 100000, 200000]],
            ],
            'pulsa' => [
                ['id' => 1, 'provider' => 'Telkomsel', 'icon' => '📱', 'denominations' => [5000, 10000, 20000, 50000, 100000]],
                ['id' => 2, 'provider' => 'Indosat', 'icon' => '📱', 'denominations' => [5000, 10000, 25000, 50000, 100000]],
                ['id' => 3, 'provider' => 'XL', 'icon' => '📱', 'denominations' => [10000, 25000, 50000, 100000, 200000]],
                ['id' => 4, 'provider' => 'Tri', 'icon' => '📱', 'denominations' => [10000, 20000, 50000, 100000, 150000]],
            ],
            'data' => [
                ['id' => 1, 'provider' => 'Telkomsel', 'package' => '1GB 30 Hari', 'price' => 15000],
                ['id' => 2, 'provider' => 'Telkomsel', 'package' => '3GB 30 Hari', 'price' => 35000],
                ['id' => 3, 'provider' => 'Indosat', 'package' => '2GB 30 Hari', 'price' => 25000],
                ['id' => 4, 'provider' => 'XL', 'package' => '5GB 30 Hari', 'price' => 50000],
            ],
            'pln' => [
                ['id' => 1, 'type' => 'Token PLN', 'icon' => '⚡', 'denominations' => [20000, 50000, 100000, 200000, 500000]],
            ],
            'streaming' => [
                ['id' => 1, 'name' => 'Netflix', 'icon' => '🎬', 'plans' => ['Mobile', 'Basic', 'Standard', 'Premium']],
                ['id' => 2, 'name' => 'Spotify', 'icon' => '🎵', 'plans' => ['Premium Individual', 'Premium Family']],
                ['id' => 3, 'name' => 'YouTube Premium', 'icon' => '📺', 'plans' => ['Individual', 'Family']],
                ['id' => 4, 'name' => 'Disney+ Hotstar', 'icon' => '🏰', 'plans' => ['Premium', 'Sports']],
            ],
            'voucher' => [
                ['id' => 1, 'name' => 'Google Play', 'icon' => '🎮', 'denominations' => [10000, 25000, 50000, 100000, 200000]],
                ['id' => 2, 'name' => 'iTunes', 'icon' => '🍎', 'denominations' => [15000, 50000, 100000, 250000, 500000]],
                ['id' => 3, 'name' => 'Steam', 'icon' => '🎯', 'denominations' => [45000, 90000, 250000, 400000, 600000]],
            ],
        ];
    }
}