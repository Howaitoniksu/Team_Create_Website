<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;

class ChangePasswordRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'password' => [
                'required',
                'string',
                'min:8'
            ],
            'new_password' => [
                'required',
                'string',
                'min:8',
                'different:password',
//                Password::min(8)
//                    ->letters()
//                    ->numbers()
//                    ->symbols()
//                    ->mixedCase(),
                'confirmed'
            ],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }

    public function failedValidation(Validator $validator)
    {
        throw new ValidationException($validator, response()->json(['errors' => $validator->errors()], 422));
    }
}
