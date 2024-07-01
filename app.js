const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
let tours = [];

// Read file and parse JSON data
fs.readFile('./dev-data/data/tours.json', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  tours = JSON.parse(data);
});



const port = 4000;
app.use(bodyParser.json());

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours
    }
  });
});
app.post('/api/v1/tours', (req, res) => {
  console.log(req.body);
  const newId = tours.length+1;
  const newTour = Object.assign({id: newId}, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours.json`,
    JSON.stringify(tours),
    err => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour
        }
      });
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
