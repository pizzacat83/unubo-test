const express = require('express');
const app = express();

app.get('/', (req, res) =>  {
    res.send('hello');
});

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
});