# Etapa de construcción
FROM node:18-alpine AS builder

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Genera el cliente de Prisma
RUN npx prisma generate

# Compila el código TypeScript a JavaScript
RUN npm run build

# Etapa de producción
FROM node:18-alpine AS production

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia las dependencias de node_modules desde la etapa de construcción
COPY --from=builder /app/node_modules ./node_modules

# Copia los archivos compilados desde la etapa de construcción
COPY --from=builder /app/dist ./dist

# Copia el prisma schema
COPY --from=builder /app/prisma ./prisma

# Exponer el puerto en el que la aplicación va a correr
EXPOSE 3000

# Comando para correr la aplicación
CMD ["node", "dist/main"]

# Nota: Asegúrate de que los scripts de migración y generación de Prisma se ejecuten antes de iniciar la aplicación