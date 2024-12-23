import express from 'express';
import dotenv from 'dotenv';

import routes from './routes/index.ts';
import connectDB from './config/db.ts';

dotenv.config();

const PORT = process.env.PORT || 3000;
connectDB();

const app = express();
app.use(express.json());
app.use(`/api`, routes);

app.get('/', (_req, _res)=> {
    console.log(`Aplicación de prueba`);
});

app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);
})