import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.status(200).send({
        message: 'Welcome to my APP'
    });

})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server Up and Running');
});