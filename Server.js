const webpagedir = `${__dirname}/src`;
const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static(webpagedir, {index:"RegistrationLogin.html"}));
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000/");
});