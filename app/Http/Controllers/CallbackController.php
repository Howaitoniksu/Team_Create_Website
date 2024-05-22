<?php

namespace App\Http\Controllers;

use App\Http\Requests\Callback\StoreRequest;
use App\Models\Callback;

class CallbackController extends Controller
{
    public function store(StoreRequest $request)
    {
        $data = $request->validated();

        Callback::query()
            ->create($data);

        return response()->json([
            'success' => true,
            'message' => 'Заявка успешно отправлена.'
        ]);
    }
}
