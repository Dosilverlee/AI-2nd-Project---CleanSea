const cors = require("cors");
const express = require("express");
const { swaggerUi, specs } = require('./swagger/swagger');
const {userRouter} = require("./routes/testRouter");
require('./db/index');


const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(userRouter);
app.get('/',(req,res)=>{
    res.send('기본 페이지');
});



export { app }; 