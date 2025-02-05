## Sistema de agendamento com conexão com Google Agenda.


### Sobre

> Este sistema permite que você conecte sua conta do Google Agenda e gerencie sua disponibilidade de forma prática e eficiente. Para começar, basta inserir seu nome e usuário e autorizar a integração com o Google Agenda. Em seguida, você poderá definir os dias e horários em que está disponível para o agendamento. O sistema exibirá automaticamente os horários disponíveis com base na sua configuração, permitindo que você visualize e escolha facilmente seu compromisso com data e hora. Após a confirmação, o evento será adicionado automaticamente à sua agenda do Google, garantindo uma organização mais eficiente e evitando conflitos de horário.


## Tecnologia usadas

- NEXT 
- REACT
- Módulo de componentes personalizados, criado por mim (ignite-ui/react)
- AXIOS
- DAYJS
- NEXT-AUTH
- NEXT-SEO
- REACT-HOOK-FORM
- ZOD
- NOOKIES
- GOOGLEAPI
- REACT-QUERY
- ESLINT

- PRISMA
- MYSQL
- DOCKER

## Execução do projeto

**Requer o NODE (npm) e o GIT instalado!**
~~~javascript
 1. git clone https://github.com/wwilliamsantana/calendar-scheduling-ig.git
 2. cd .\calendar-scheduling-ig\
 3. npm install
~~~~

Precisamo de um arquivo .env contendo algumas variáveis como:
* DATABASE_URL: URL DO BANCO DE DADOS
* GOOGLE_CLIENT_ID: ID DA APLICAÇÃO Do GOOGLE CLOUD
* GOOGLE_CLIENT_SECRET: ID SECRETO DA APLICAÇÃO Do GOOGLE CLOUD
* NEXTAUTH_SECRET : HASH QUE VOCÊ PODERÁ CRIAR PARA SEGURANÇA 

**Iniciando o docker
~~~javascript
 1. docker run --name mysql -e MYSQL_ROOT_PASSWORD=docker -p 3306:3306 mysql:latest
 2. npx prisma migrate dev  
~~~~

~~~javascript
 1. npm run dev
~~~~




### Layout - Sign-In/Sign-Up

<img alt="" src="https://github.com/user-attachments/assets/407a4290-3e55-46d3-9575-8b46bcf53457" style="width: 75%;"/>
<img alt="" src="https://github.com/user-attachments/assets/f8f7fd23-a6bf-4a00-acb9-a1b4b4f7e572" style="width: 75%;"/>

### Layout conexão com o google.


<img alt="" src="https://github.com/user-attachments/assets/ababbfa8-ed95-4fd8-92c2-d55f3e6c95a9" style="width: 75%;"/>

<img alt="" src="https://github.com/user-attachments/assets/ce7417f3-e49a-4899-be4e-63cded3f1c6c" style="width: 75%;"/>

<img alt="" src="https://github.com/user-attachments/assets/306ba268-0536-40ee-b9e6-63c941d97a7e" style="width: 75%;"/>


### Após conexão com o google.


<img alt="" src="https://github.com/user-attachments/assets/9691daf5-e55f-495d-a94a-66346c689388" style="width: 75%;"/>
<img alt="" src="https://github.com/user-attachments/assets/8917d3ce-2be7-41d3-8015-986ecd117e43" style="width: 75%;"/>

### Escolhendo o dia disponível de acordo com sua exigência.

<img alt="" src="https://github.com/user-attachments/assets/6cd81948-b9a2-48d8-b13b-7fe37d59d462" style="width: 75%;"/>
<img alt="" src="https://github.com/user-attachments/assets/a15ead8d-7851-4868-9284-84039d9d0921" style="width: 75%;"/>



<img alt="" src="https://github.com/user-attachments/assets/7d6eae29-247d-4baa-8730-6637c8bcd788" style="width: 75%;"/>


### Apôs escolher uma data e horário, fomos liberados.  Vemos que na nossa data e hrorário não está mais disponivel.

<img alt="" src="https://github.com/user-attachments/assets/6bf17941-f014-43b3-b855-0cc0bebca48d" style="width: 75%;"/>
<img alt="" src="https://github.com/user-attachments/assets/196f389f-7810-4ff9-a124-9e14ca8a9f70" style="width: 75%;"/>


### Dentro do Google API Console
<img alt="" src="https://github.com/user-attachments/assets/605d1457-733b-4634-94de-882e1147661d" style="width: 75%;"/>


