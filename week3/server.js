// const express = require('express');
// const app = express();
// const path = require('path');

// // Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Serve your main HTML file
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// // Added route for handling addition of two numbers
// app.get('/add', (req, res) => {
//   let num1 = parseFloat(req.query.num1);
//   let num2 = parseFloat(req.query.num2);

//   if (isNaN(num1) || isNaN(num2)) {
//     return res.status(400).json({ result: 'Invalid input, please enter numbers.' });
//   }

//   let result = num1 + num2;
//   res.json({ result: result });
// });

// const port = 3001;
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
var express = require("express")
var app = express()

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

var port = process.env.port || 3000;
app.listen(port,()=>{
console.log("App listening to: "+port)
})
