Lista de Tarefas com Next.js 15 e Testes Unitários

Este projeto é uma aplicação simples de lista de tarefas, construída com Next.js 15 (App Router) e TypeScript. Implementa funcionalidades de adição de tarefas, contagem usando hook personalizado, e testes unitários com Jest e Testing Library.

Funcionalidades

Exibição de uma lista inicial de tarefas (simulada localmente).

Adição de novas tarefas via formulário controlado no componente <NovaTarefa />.

Contador dinâmico de tarefas usando hook personalizado useContadorDeTarefas.

Testes unitários cobrindo componentes e hooks principais.

Tecnologias

Next.js 15 (App Router)

React 18 (Client e Server Components)

TypeScript

Jest + React Testing Library

Como rodar o projeto

Clone o repositório:

git clone <URL_DO_REPOSITÓRIO>
cd <NOME_DA_PASTA>


Instale as dependências:

npm install


Rode o servidor de desenvolvimento:

npm run dev


Execute os testes:

npm run test

Estrutura do projeto
/src
  /app
    page.tsx              # Server Component principal
  /components
    NovaTarefa.tsx        # Componente Client para adicionar tarefas
  /hooks
    useContadorDeTarefas.ts # Hook personalizado para contagem de tarefas
  /data
    tarefas.ts            # Dados simulados da lista de tarefas
/tests
  NovaTarefa.test.tsx     # Testes do componente NovaTarefa
  useContadorDeTarefas.test.ts # Testes do hook
  page.test.tsx           # Testes da página principal
