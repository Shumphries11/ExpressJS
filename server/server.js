const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const formPath = path.join(__dirname, '../form-submissions.json');


let app = express();

// app.get('/', (req, res) => {
//     res.send('Hello from the the web server side....')
// })
app.use(bodyParser.urlencoded({ extended: false }));

let postArr = [];

app.post('/formsubmissions', (req, res,) => {
    const postObj = {
        name: req.body.name,
        email: req.body.email
    };
    
    postArr.push(postObj);

    fs.writeFileSync(formPath, JSON.stringify(postArr));

    res.send('Thank you for your submission!');

})


// app.use((req, res, next) => {
//     console.log(req.originalUrl);
//     next();
// });



app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000);