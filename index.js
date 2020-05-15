const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const PORT = 3001; //Añadimos puerto 3001 para evitar conflicto con React (Usa puerto 3000)

mongoose.connect('mongodb://localhost:27017/React-Project--PhoneShop--Back', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch(console.error);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use(express.json());
app.use(morgan('dev'));
// app.use('/users', usersRouter);
// app.use('/products', productsRouter);
app.listen(PORT, () => console.log('server running on port ' + PORT));

