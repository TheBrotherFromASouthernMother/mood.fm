const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')


const views = __dirname + '/views/'

app.use(cookieParser());
app.use('/', express.static(views)
);

app.get('/', (req, res) => {
    res.sendFile( '/index.html', {root: views});
})

app.post('/', (req, res) => {
    res.redirect('/profile/:id');
})


app.get('/profile/:id', (req, res)=> {
    res.send('You request to see a profile with the id of ' + req.params.id)
})


app.get('/photo', (req, res) => {
    res.sendFile('/photo.jpg.jpg', {root: views})
})



app.listen(3000, ()=> {
    console.log('Server Listening at Port 3000');
})
