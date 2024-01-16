const express = require('express');
const app = express();

//el lugar donde se encuentran las rutas
const mainRoutes = require('./routes/mainRoutes');

app.use(express.static('./public'));

//le decimos el motor de plantillas que usaremos
app.set('view engine', 'ejs');

app.use('/', mainRoutes);

app.listen(3000, () => {
  console.log('Servidor levantado en el puerto 3000');
});