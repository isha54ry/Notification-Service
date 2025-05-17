import dotenv from 'dotenv';
dotenv.config();

import express, { json } from 'express';
import { connect } from 'mongoose';
import routes from './routes/index.js'; 

const app = express();
app.use(json());
app.use('/api', routes);
app.get('/test', (req, res) => res.send('Server is working!'));

console.log('MONGO_URI:', process.env.MONGO_URI);

connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
