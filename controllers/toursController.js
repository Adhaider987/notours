const fs = require('fs');

let tours=[];
// Read file and parse JSON data
fs.readFile('./dev-data/data/tours.json', 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    tours = JSON.parse(data);
  });
  
exports.getAllTours = (req, res) => {
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours
      }
    });
  };
exports.createTours = (req, res) => {
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
  }