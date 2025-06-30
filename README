# Sistema de Trilhas de Aprendizagem

Um sistema inteligente para geração de trilhas de aprendizagem personalizadas utilizando a API do Google Gemini. O projeto oferece uma solução completa para criar caminhos de estudo estruturados e progressivos em qualquer área do conhecimento.

## 🎯 Visão Geral

O Sistema de Trilhas de Aprendizagem é uma aplicação web desenvolvida em Laravel que utiliza inteligência artificial para criar trilhas de estudo personalizadas. Através da integração com a API do Google Gemini, o sistema analisa o conteúdo fornecido pelo usuário e gera um plano de estudos estruturado, dividido em módulos progressivos com indicadores de progresso e sugestões de recursos adicionais.

### Principais Funcionalidades

- **Geração Automática de Trilhas**: Criação de trilhas de aprendizagem estruturadas usando IA
- **Módulos Progressivos**: Organização do conteúdo em módulos sequenciais (básico, intermediário, avançado)
- **Indicadores de Progresso**: Sugestões de como praticar e evoluir em cada módulo
- **Recursos Complementares**: Recomendações de livros, cursos e materiais de apoio
- **API RESTful**: Interface de programação para integração com outras aplicações
- **Suporte CORS**: Configuração adequada para aplicações frontend separadas

## 🏗️ Arquitetura do Sistema

### Estrutura do Projeto

```
trilhas/
├── backend/                    # Aplicação Laravel
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/
│   │   │   │   └── TrilhasController.php
│   │   │   └── Middleware/
│   │   │       ├── Cors.php
│   │   │       └── VerifyCsrfToken.php
│   │   └── Enums/
│   │       └── PromptEnum.php
│   ├── routes/
│   │   ├── web.php
│   │   └── console.php
│   ├── config/
│   ├── database/
│   └── vendor/
├── arquiteturaDeSoftware.json  # Exemplo de trilha gerada
└── jogos.json                  # Exemplo de trilha gerada
```

### Componentes Principais

#### TrilhasController
Controlador principal responsável pelo processamento das requisições e integração com a API do Gemini. Implementa validação de entrada, processamento de prompts e formatação de respostas JSON.

#### Middleware CORS
Middleware personalizado para gerenciar políticas de Cross-Origin Resource Sharing, permitindo que aplicações frontend em diferentes domínios consumam a API.

#### PromptEnum
Enumeração que define o template de prompt utilizado para instruir a IA sobre o formato e estrutura desejada para as trilhas de aprendizagem.

## 🚀 Instalação e Configuração

### Pré-requisitos

- PHP 8.2 ou superior
- Composer
- Laravel 12.0
- Chave de API do Google Gemini

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd trilhas/backend
   ```

2. **Instale as dependências**
   ```bash
   composer install
   ```

3. **Configure o ambiente**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **Configure a API do Gemini**
   
   Adicione sua chave da API do Gemini no arquivo `.env`:
   ```env
   GEMINI_API_KEY=sua_chave_aqui
   ```

5. **Execute as migrações** (se necessário)
   ```bash
   php artisan migrate
   ```

6. **Inicie o servidor**
   ```bash
   php artisan serve
   ```

## 📡 API Reference

### Endpoint Principal

#### POST /api/sendContent

Gera uma trilha de aprendizagem baseada no conteúdo fornecido.

**Request Body:**
```json
{
  "content": "Arquitetura de Software"
}
```

**Response:**
```json
{
  "modulos": {
    "modulo 01": "Fundamentos da Arquitetura de Software",
    "modulo 02": "Princípios de Design e Padrões Arquiteturais",
    "modulo 03": "Estilos Arquiteturais Comuns"
  },
  "modulo 01": {
    "título": "Fundamentos da Arquitetura de Software",
    "descrição": "Este módulo cobre os conceitos básicos...",
    "tópicos": [
      "O que é arquitetura de software?",
      "Papéis e responsabilidades do arquiteto"
    ],
    "obras": [
      "Software Architecture in Practice - Len Bass"
    ]
  },
  "prograssao": {
    "praticar": [
      "Explorar novas tecnologias e arquiteturas",
      "Participar de conferências e workshops"
    ]
  },
  "proximo modulo": "Princípios de Design e Padrões Arquiteturais"
}
```

### Códigos de Status

- `200 OK`: Trilha gerada com sucesso
- `422 Unprocessable Entity`: Dados de entrada inválidos
- `500 Internal Server Error`: Erro na comunicação com a API do Gemini

## 🔧 Configuração CORS

O projeto inclui um middleware CORS personalizado para permitir requisições de diferentes origens. Para aplicar corretamente o middleware, siga as instruções no arquivo `cors_fixes.md`.

### Configuração Recomendada

Adicione o middleware no arquivo `bootstrap/app.php`:

```php
->withMiddleware(function (Middleware $middleware): void {
    $middleware->api(append: [
        \App\Http\Middleware\Cors::class,
    ]);
    
    $middleware->validateCsrfTokens(except: [
        '/api/sendContent',
    ]);
})
```

## 🧪 Testes

### Testando a API

Você pode testar a API usando curl:

```bash
curl -X POST http://localhost:8000/api/sendContent \
  -H "Content-Type: application/json" \
  -d '{"content": "Desenvolvimento Web"}'
```

Ou usando um cliente HTTP como Postman ou Insomnia.

### Exemplos de Uso

O projeto inclui dois exemplos de trilhas geradas:

1. **arquiteturaDeSoftware.json**: Trilha completa sobre arquitetura de software
2. **jogos.json**: Trilha sobre design de personagens para jogos

## 🛠️ Tecnologias Utilizadas

- **Laravel 12.0**: Framework PHP para desenvolvimento web
- **Google Gemini API**: Inteligência artificial para geração de conteúdo
- **PHP 8.2+**: Linguagem de programação
- **Composer**: Gerenciador de dependências PHP

### Dependências Principais

- `google-gemini-php/client`: Cliente PHP para API do Gemini
- `google-gemini-php/laravel`: Integração Laravel para Gemini
- `guzzlehttp/guzzle`: Cliente HTTP para requisições

## 📚 Como Usar

1. **Envie uma requisição POST** para `/api/sendContent` com o tópico desejado
2. **Receba a trilha estruturada** em formato JSON
3. **Implemente o frontend** para exibir a trilha de forma amigável ao usuário
4. **Personalize o prompt** no `PromptEnum` conforme suas necessidades

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

Para suporte e dúvidas:

1. Consulte a documentação do Laravel: https://laravel.com/docs
2. Documentação da API Gemini: https://ai.google.dev/docs
3. Abra uma issue no repositório do projeto

## 🔄 Roadmap

### Próximas Funcionalidades

- [ ] Interface web para visualização das trilhas
- [ ] Sistema de usuários e autenticação
- [ ] Salvamento de trilhas no banco de dados
- [ ] Exportação de trilhas em PDF
- [ ] Sistema de avaliação e feedback
- [ ] Integração com plataformas de ensino

### Melhorias Técnicas

- [ ] Implementação de cache para otimização
- [ ] Testes automatizados
- [ ] Documentação da API com Swagger
- [ ] Deploy automatizado
- [ ] Monitoramento e logs estruturados

---

**Desenvolvido com ❤️ usando Laravel e Google Gemini AI**
