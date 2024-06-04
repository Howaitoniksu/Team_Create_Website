<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class UserControllerTest extends TestCase
{

    /**
     * A basic feature test example.
     */
    public function test_user_can_be_obtained_with_a_token(): void
    {
        $user = User::query()
            ->create([
                'phone_number' => '+7 (999) 999-99-99',
                'password' => Hash::make('12345678'),
                'email' => 'y2pQe@example.com',
                'name' => 'test',
                'surname' => 'test',
            ]);

        $user->generateAccessToken();

        $response = $this->get('/api/user', [
            'Authorization' => 'Bearer ' . $user->token
        ]);

        $response->assertStatus(200);
        $response
            ->assertJson([
                'id' => $user->id,
                'name' => $user->name,
                'surname' => $user->surname,
                'phone_number' => $user->phone_number,
                'email' => $user->email
            ]);

        $user->delete();
        \DB::table('users')->truncate();
    }

    public function testName()
    {

    }
}
