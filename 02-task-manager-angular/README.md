# 📋 Task Manager Angular

Aplicação de gerenciamento de tarefas com Angular 21 e Tailwind CSS.

## 🎯 O que é?

App simples para gerenciar tarefas de estudo com:

- ✅ CRUD completo (Criar, Editar, Deletar)
- ✅ 3 colunas (Para fazer, Em andamento, Concluídas)
- ✅ Drag & Drop entre colunas
- ✅ Priorização (Alta, Média, Baixa)
- ✅ Indicador de prazo com cores

## 🚀 Como Rodar

### 1. Instalar

npm install

### 2. Rodar Local

ng serve --open

Acessa automático em: http://localhost:4200

### 3. Build Produção

ng build

## 📦 Funcionalidades

- Criar nova tarefa com +
- Editar tarefa (botão Editar)
- Deletar tarefa (botão Excluir)
- Mover tarefa entre colunas (arrastar)
- Prazo com cores:
  - 🔴 Vermelho: vence hoje/amanhã
  - 🟠 Laranja: até 3 dias
  - 🟡 Amarelo: até 7 dias
  - 🟢 Verde: prazo ok
