const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')

})
app.listen(process.env.PORT || 3000, function () {
    console.log('servidor funcionando en el puerto 3000')
})

