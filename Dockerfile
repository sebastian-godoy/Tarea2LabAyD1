# Usar la imagen oficial de Node (versión LTS como ejemplo)
FROM node:16-alpine

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar el código de la app
COPY . .

# Exponer el puerto 80
EXPOSE 80

# Comando para arrancar la aplicación
CMD [ "npm", "start" ]
