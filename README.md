# challenge-boleto-flex

Fullstack assessment

### Pré-requisitos

- Node
- ReactJS
- PostgreSQL

## Como rodar o Backend

```bash
cd server
```

### Instalar dependências

```bash
> yarn
```

### Configurar o banco de dados

Abrir o arquivo `.env.example` e inserir os dados do banco.

Executar a migração dos dados no terminal

```bash
> yarn sequelize db:migrate
```

### Rodar o servidor

```bash
> yarn dev
```

## Como rodar o Frontend

```bash
cd web-client
```

### Instalar dependências

```bash
> yarn
```

### Rodar o Frontend

```bash
> yarn start
```

## Tecnologias utilizadas

### - PostgreSQL

- Armazenamento dos dados

### - Sequelize

- ORM para mapear, salvar e buscar os dados

### - react-webcam

- Captura da imagem do usuário

### - Axios

- Requisições para API
