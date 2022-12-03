const express = require('express');
const app = express();
const PORT = 3000;

var url = "http://localhost:3000";  
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Homework Heroes');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
