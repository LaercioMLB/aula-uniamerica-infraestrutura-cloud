# Etapa 1: Construção da aplicação
FROM node:18-alpine

# Definindo o diretório de trabalho dentro do container
WORKDIR /app

# Copiando o package.json e o package-lock.json para instalar as dependências
COPY package*.json ./

# Instalando as dependências do projeto
RUN npm install

# Copiando o restante do conteúdo do projeto para o container
COPY . .

# Expondo a porta que o backend vai usar (5000)
EXPOSE 5000

# Comando para rodar a aplicação
CMD ["node", "index.js"]
