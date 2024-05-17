# Usa una imagen base de Node.js más reciente
FROM node:18

# Configura el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Genera el cliente de Prisma
RUN npx prisma generate

# Construye la aplicación NestJS
RUN npm run build

# Expone el puerto en el que la aplicación correrá
EXPOSE 3000

# Define el comando para correr la aplicación
CMD ["npm", "run", "start:prod"]
