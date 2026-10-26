# Sistema de Agendamento com Google Calendar

Aplicação web de agendamento que permite aos usuários conectar suas contas do Google Calendar, configurar sua disponibilidade e gerenciar compromissos de forma prática e automatizada.

## Sobre o projeto

O sistema permite que os usuários configurem seus horários disponíveis para agendamentos e sincronizem seus compromissos diretamente com o Google Calendar.

Após realizar o cadastro e autorizar a integração com a conta Google, o usuário pode definir os dias e horários em que está disponível para receber agendamentos.

Com base nessas configurações, a aplicação apresenta os horários disponíveis para seleção. Após a confirmação de um agendamento, o compromisso é registrado automaticamente no Google Calendar, facilitando a organização da agenda e ajudando a evitar conflitos de horários.

### Funcionalidades

- **Autenticação de usuários:** cadastro, acesso à aplicação e gerenciamento da sessão.
- **Integração com Google Calendar:** conexão com a conta Google para sincronização de compromissos.
- **Configuração de disponibilidade:** definição dos dias e horários disponíveis para agendamento.
- **Seleção de datas e horários:** visualização e escolha de horários disponíveis.
- **Criação de eventos:** registro automático dos compromissos na agenda integrada.
- **Controle de disponibilidade:** atualização dos horários disponíveis após a realização de um agendamento.

## Tecnologias utilizadas

### Front-end

- Next.js
- React
- Design System próprio
- Axios
- Day.js
- React Hook Form
- Zod
- React Query
- Next SEO
- ESLint

### Autenticação e integração

- NextAuth.js
- Google Calendar API

### Back-end e banco de dados

- Prisma ORM
- MySQL
- Nookies

### Ambiente de desenvolvimento

- Docker
- Node.js
- Git

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js e npm
- Git
- Docker

Também é necessário configurar um projeto no Google Cloud Console para habilitar a integração com o Google Calendar API e obter as credenciais de autenticação.

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/wwilliamsantana/calendar-scheduling-ig.git
```

### 2. Acesse a pasta do projeto

```bash
cd calendar-scheduling-ig
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e configure as seguintes variáveis:

```env
DATABASE_URL="mysql://root:docker@localhost:3306/calendar"
GOOGLE_CLIENT_ID="seu_google_client_id"
GOOGLE_CLIENT_SECRET="seu_google_client_secret"
NEXTAUTH_SECRET="sua_chave_secreta"
```

**Importante:** ajuste a variável `DATABASE_URL` de acordo com as configurações do banco de dados utilizado no projeto. Os nomes e valores das variáveis devem corresponder à implementação existente no código.

Nunca compartilhe suas credenciais ou envie o arquivo `.env` para um repositório público.

### 5. Inicie o banco de dados MySQL com Docker

```bash
docker run --name mysql \
  -e MYSQL_ROOT_PASSWORD=docker \
  -e MYSQL_DATABASE=calendar \
  -p 3306:3306 \
  -d mysql:latest
```

Esse comando cria e inicia um contêiner MySQL, define a senha do usuário root e cria o banco de dados `calendar`.

Se o contêiner já existir, não será necessário executar esse comando novamente.

### 6. Execute as migrações do Prisma

```bash
npx prisma migrate dev
```

Esse comando aplica as migrações necessárias para estruturar o banco de dados.

### 7. Inicie a aplicação

```bash
npm run dev
```

Acesse a aplicação pelo navegador:

http://localhost:3000

## Demonstração da aplicação

### 1. Cadastro e autenticação

Telas de cadastro e acesso à aplicação.

![Tela de cadastro](https://github.com/user-attachments/assets/407a4290-3e55-46d3-9575-8b46bcf53457)

![Tela de autenticação](https://github.com/user-attachments/assets/f8f7fd23-a6bf-4a00-acb9-a1b4b4f7e572)

### 2. Integração com o Google Calendar

Fluxo de conexão e autorização da conta Google.

![Integração com Google Calendar](https://github.com/user-attachments/assets/ababbfa8-ed95-4fd8-92c2-d55f3e6c95a9)

![Autorização da conta Google](https://github.com/user-attachments/assets/ce7417f3-e49a-4899-be4e-63cded3f1c6c)

![Configuração da integração](https://github.com/user-attachments/assets/306ba268-0536-40ee-b9e6-63c941d97a7e)

### 3. Gerenciamento da disponibilidade

Após conectar a conta, o usuário pode configurar seus horários disponíveis para agendamento.

![Disponibilidade de horários](https://github.com/user-attachments/assets/9691daf5-e55f-495d-a94a-66346c689388)

![Configuração de horários](https://github.com/user-attachments/assets/8917d3ce-2be7-41d3-8015-986ecd117e43)

### 4. Seleção de datas e horários

O sistema apresenta as opções de agendamento de acordo com a disponibilidade configurada.

![Seleção de data](https://github.com/user-attachments/assets/6cd81948-b9a2-48d8-b13b-7fe37d59d462)

![Seleção de horário](https://github.com/user-attachments/assets/a15ead8d-7851-4868-9284-84039d9d0921)

![Confirmação do agendamento](https://github.com/user-attachments/assets/7d6eae29-247d-4baa-8730-6637c8bcd788)

### 5. Atualização da disponibilidade após o agendamento

Após a confirmação de um compromisso, o horário selecionado deixa de aparecer como disponível, conforme as regras implementadas na aplicação.

![Atualização da disponibilidade](https://github.com/user-attachments/assets/6bf17941-f014-43b3-b855-0cc0bebca48d)

![Visualização dos horários atualizados](https://github.com/user-attachments/assets/196f389f-7810-4ff9-a124-9e14ca8a9f70)

### 6. Configuração da integração com o Google

Visualização das configurações utilizadas na integração com os serviços do Google.

![Configuração da API do Google](https://github.com/user-attachments/assets/605d1457-733b-4634-94de-882e1147661d)

---

Desenvolvido como projeto de aplicação web, com foco em autenticação, integração com APIs, gerenciamento de disponibilidade e sincronização de eventos com o Google Calendar.
