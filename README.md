# # Projeto Pacer (Back-end)

Projeto para o 6° Semestre de Banco de Dados da FATEC - São José dos Campos.  
O projeto consiste em criar um sistema de avaliações alunos durante um processo de Scrum. Será criado um modelo de avaliação no estilo Pacer. Onde os alunos poderao avaliar o desempenho, colaboração, participação dos seus colegas de turma.

## 🤓 Integrantes do Grupo

- Marcos Vinicio Pereira **(PO and Developer)**
- Guilherme Anderson **(Scrum Master and Developer)**
- Lucas Magno de Andrade Bastos **(Developer)**
- Jonathas Henrique de Moraes **(FullStack Developer)**
- Raian Silva Damaceno **(Developer)**
- João Pedro Filipini **(Developer)**
- Paulo Cesar Ferreira da Silva **(Developer)**

##  🛠️ Ferramentas Utilizadas:

- **Node.js** 
- framework **Nest.js**
- **Typeorm**
- Banco de dados: **Mysql** / **MariaDB**

## ✨ MVP
##### 1° Sprint

- Cadastro de Critério de Avaliação
- Cadastro de critério para um Projeto
- Cadastro de nota por integrante

##### 2ª Sprint

- Cadastrar projetos
- Cadastrar equipes
- Cadastrar sprints
- Cadastrar Usuários
- Exibir pendências por parte do avaliador
- Modificar nota antes do fim da Sprint

##### 3ª Sprint

- Gerar relatórios (graficos)
- Sistema de Login

##### 4ª Sprint

- Alteração de dados cadastrais
- Método de recuperação de senha
- Página de Apresentação do sistema


##  ⚙️Primeiros Passos:
#####  1. Clonar repositório
```
git clone https://github.com/JoshuaSene/pacer-backend.git
```
##### 2. Instalar dependências do Projeto
```
$  yarn install
```
##### 3. Navegar até o arquivo **ormconfig.json** e **app.module.ts** e verificar se as informações de conexão com o banco de dados estão de acordo com o seu ambiente
##### 4. Fazer Download das Migrations
```
$ yarn typeorm migration:run
```
##### 5. Iniciar Projeto
```
$ yarn start:dev
```

