var express = require('express');

app = express();


app.get('/', (req, res) => {
    try {
        res.send("Home page");
    }
    catch (error) {
        console.log("failed!", error);
    }
});
app.get('/about', (req, res) => {
    try {
        res.send("About page");
    }
    catch (error) {
        console.log("failed!", error);
    }
});
app.delete('/products', (req, res) => {
    try {
        res.send("Products page");
    }
    catch (error) {
        console.log("failed!", error);
    }
});
app.put('/contact', (req, res) => {
    try {
        res.send("Contact page");
    }
    catch (error) {
        console.log("failed!", error);
    }
});
app.post('/skills', (req, res) => {
    try {
        res.send("Skills page");
    }
    catch (error) {
        console.log("failed!", error);
    }
});


app.listen(8000, () => {
    console.log("server connection successful!");
})