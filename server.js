const express = require('express');
const app = express();

app.get('/', (req, res) =>  {
    res.send('hello');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT | 3000, () => {
    console.log('listening on port ' + PORT);
});