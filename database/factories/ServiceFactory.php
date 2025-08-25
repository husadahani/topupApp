<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\Illuminate\Database\Eloquent\Model>
 */
class ServiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->words(2, true),
            'type' => $this->faker->randomElement(['game', 'emoney', 'pulsa', 'data']),
            'provider' => $this->faker->company(),
            'denomination' => $this->faker->randomElement([10000, 25000, 50000, 100000]),
            'price' => $this->faker->numberBetween(10000, 200000),
            'is_active' => true,
        ];
    }

    /**
     * Generate game service data.
     */
    public function game(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'game',
            'name' => $this->faker->randomElement([
                'Mobile Legends',
                'Free Fire',
                'PUBG Mobile',
                'Genshin Impact',
                'Honkai Impact',
            ]),
        ]);
    }

    /**
     * Generate e-money service data.
     */
    public function emoney(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'emoney',
            'name' => $this->faker->randomElement([
                'GoPay',
                'OVO',
                'DANA',
                'ShopeePay',
                'LinkAja',
            ]),
        ]);
    }

    /**
     * Generate pulsa service data.
     */
    public function pulsa(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'pulsa',
            'provider' => $this->faker->randomElement([
                'Telkomsel',
                'Indosat',
                'XL',
                'Tri',
                'Smartfren',
            ]),
        ]);
    }
}