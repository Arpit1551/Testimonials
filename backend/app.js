import express, { json } from 'express';
import connectDB from './dbConnection.js';
import cors from 'cors';
import dotenv from 'dotenv';
import user from './schema/userSchema.js';
import createToken from './middleware/generateToken.js';
import cookieParser from 'cookie-parser';

dotenv.config();
connectDB();

const app = express();

app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:5173',
    methods:'GET,POST,PUT,DELETE',
    credentials:true
}));
app.use(json());

app.get('/', (req,res)=>{
    res.send('CHAL NHH LAUDE !!')
})

app.get('/working', (req,res)=>{
    res.send('CHAL NHH Chutiya !!')
})

app.post('/data', async (req, res) => {
    const data = req.body;
    const person = user(data);

    try {
        // Generate the token (assuming createToken is an async function)
        let token = await createToken(person.id, person.email);
        person.accessToken = token;

        // Set the cookie with the token
        res.cookie('accessToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            sameSite: 'strict',  // Helps prevent CSRF attacks
            maxAge: 1000 * 60 * 60 * 24, // Cookie expiration time (1 day in milliseconds)
        });

        console.log('Cookie set successfully:', token);

        // Redirect to /working
        res.redirect('/working');
    } catch (error) {
        console.log('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});



const port = process.env.PORT || 3000;

app.listen(port , ()=>{
    console.log(`Server is running on Port ---> ${port}`)
});