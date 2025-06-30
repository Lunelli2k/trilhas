<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use Gemini\Laravel\Facades\Gemini;
use Exception;
use App\Enums\PromptEnum;

class TrilhasController extends Controller
{
    /**
     * Envia um conteúdo para a API do Gemini e retorna a resposta.
     */
    public function generateLearningPath(Request $request): JsonResponse
    {
        // Validação apenas do conteúdo enviado
        $validator = Validator::make($request->all(), [
            'content' => 'required|string|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        
        try {
            $trailContent   = $request->input('content');

            // Prompt fixo a partir do Enum
            $promptTemplate = PromptEnum::PROMPT->value;

            // Prompt final
            $fullPrompt = $trailContent . "\n\n" . $promptTemplate;

            // Modelo default do Gemini
            $modelName = config('gemini.default_model', 'gemini-2.0-flash');

            // Chamada à API do Gemini
            $response = Gemini::generativeModel($modelName)
                ->generateContent($fullPrompt);

            // Limpa e extrai o JSON de dentro do bloco ```json ... ```
            $raw = $response->text();
            $cleaned = preg_replace('/^```json|```$/m', '', trim($raw));

            // Decodifica e reencoda formatado
            $decoded = json_decode($cleaned, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                return response()->json([
                    'error'   => 'Erro ao decodificar a resposta JSON.',
                    'details' => json_last_error_msg(),
                    'raw'     => $raw
                ], 500);
            }
            return response()->json(json_decode(json_encode($decoded, JSON_PRETTY_PRINT), true));

        } catch (Exception $e) {
            return response()->json([
                'error'   => 'Erro ao comunicar com a API do Gemini.',
                'details' => $e->getMessage(),
            ], 500);
        }
    }
}
