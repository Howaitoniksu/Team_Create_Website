<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class GenerateTokenTest extends TestCase
{

    /**
     * A basic test example.
     */
    public function test_that_token_is_generated(): void
    {
        $user = User::query()
            ->create(
                [
                    'phone_number' => '+7 (999) 999-99-99',
                    'password' => Hash::make('12345678'),
                    'email' => 'y2pQe@example.com',
                    'name' => 'test',
                    'surname' => 'test',
                ]
            );

        $user->generateAccessToken();

        $this->assertNotEmpty($user->token);
        $this->assertIsString($user->token);

        $user->delete();
    }
}
