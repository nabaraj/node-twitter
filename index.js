const express = require('express');
const app = express();

app.get("/", function (req, res) {
    console.log('test');

    res.send('ho ho ho')
});
app.listen(8080, () => {
    console.log('app is running on port 8080');

})

