const express = require('express');
const bodyParser = require('body-parser');

const toursRoute = require('./router/toursRoute')

const app = express();
// let tours = [];

// // Read file and parse JSON data
// fs.readFile('./dev-data/data/tours.json', 'utf-8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   tours = JSON.parse(data);
// });



const port = 4000;
app.use(bodyParser.json());


// app.get('/api/v1/tours', (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     results: tours.length,
//     data: {
//       tours
//     }
//   });
// });

app.use('/api/v1/tours',toursRoute)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
