const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;

// Servir archivos estáticos (HTML, CSS, JS) si lo deseas
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal que devuelve una página simple con un botón
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Tarea 2</title>
      </head>
      <body style="font-family: Arial, sans-serif; text-align:center; margin-top:50px;">
        <h1>Tarea 2</h1>
        <button onclick="mostrarDatos()">Mostrar mis datos</button>
        <p id="info"></p>
        
        <script>
          function mostrarDatos() {
            fetch('/mis-datos')
              .then(response => response.json())
              .then(data => {
                document.getElementById('info').textContent = 
                  'Nombre: ' + data.nombre + 
                  ', Carné: ' + data.carne +
                  ', Curso: ' + data.curso;
              })
              .catch(err => console.error(err));
          }
        </script>
      </body>
    </html>
  `);
});

// Ruta para retornar datos en formato JSON
app.get('/mis-datos', (req, res) => {
  res.json({
    nombre: "Sebastian Godoy",
    carne: "202002940",
    curso: "LAB AyD 1"
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
