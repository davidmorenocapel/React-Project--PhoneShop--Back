const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const PORT = 3001; //Añadimos puerto 3001 para evitar conflicto con React (Usa puerto 3000)

// mongoose.connect('')
