const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.json({ message:""});
});

app.listen(3000, () => {
    console.log({ message: 'Express is working! John Randulph B. Gorzon' });
});
