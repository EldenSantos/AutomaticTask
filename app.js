const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const consign = require('consign');

const app = express();

app.use(bodyParser.json())

app.use(cors(
    // {
    //   origin: ['']
    // }
  )); 

  consign()
  .include('controllers')
  //.then('services')
  .into(app)
;

const controllers = Object.values(app.controllers);

console.log('start controllers');
controllers.forEach((controller) => {
  try {
    controller.init();
  } catch (err) {
    console.error(err);
  }
});

// console.log('Executando onReady');
// controllers.forEach((controller) => {
//   try {
//     controller.onReady()
//   } catch (err) {
//     console.error(err);
//   }
// });

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server on ready of port: ${PORT}`);
});