// Importar Express
const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta base
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API!');
});

// Puerto del servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
