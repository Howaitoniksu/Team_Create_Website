<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class AuthControllerTest extends TestCase
{
    public function test_register_user_successful(): void
    {
        $data = [
            'name' => 'test',
            'surname' => 'test',
            'email' => fake()->email(),
            'password' => '12345678',
            'phone_number' => '+7 (999) 999-99-' . rand(10, 99),
        ];

        $response = $this->postJson('/api/auth/register', $data);

        $response
            ->assertStatus(200)
            ->assertJson(['success' => true, 'token' => true]);

        User::query()
            ->where(
                [
                    'phone_number' => $data['phone_number'],
                    'email' => $data['email']
                ])
            ->delete();
    }

    public function test_register_user_failed_with_already_used_phone_number()
    {
        $user = User::query()->create([
            'phone_number' => '+7 (999) 999-99-99',
            'password' => Hash::make('12345678'),
            'email' => 'y2pQe@example.com',
            'name' => 'test',
            'surname' => 'test',
        ]);

        $response = $this->postJson('/api/auth/register', [
            'name' => 'test',
            'surname' => 'test',
            'email' => fake()->email(),
            'password' => '12345678',
            'phone_number' => '+7 (999) 999-99-99',
        ]);

        $response
            ->assertStatus(422)
            ->assertJson(['errors' => true]);

        $user->delete();
    }

    public function test_login_user_successful()
    {
        $user = User::query()
            ->create([
                'phone_number' => '+7 (999) 999-99-99',
                'password' => Hash::make('12345678'),
                'email' => 'y2pQe@example.com',
                'name' => 'test',
                'surname' => 'test',
            ]);

        $response = $this->postJson('/api/auth/login', [
            'email' => 'y2pQe@example.com',
            'password' => '12345678',
        ]);

        $response
            ->assertStatus(200)
            ->assertJson(['success' => true, 'token' => true]);

        $user->delete();
    }

    public function test_login_user_failed()
    {
        $user = User::query()
            ->create([
                'phone_number' => '+7 (999) 999-99-99',
                'password' => Hash::make('12345678'),
                'email' => 'y2pQe@example.com',
                'name' => 'test',
                'surname' => 'test',
            ]);

        $response = $this->postJson('/api/auth/login', [
            'email' => 'y2pQe@example.com',
            'password' => '123456789',
        ]);

        $response
            ->assertStatus(401)
            ->assertJson(['success' => false, 'error' => true]);

        $user->delete();
    }
}
