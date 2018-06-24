const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  //
  // .get('/getRate', (req, res) => res.render('pages/displayResult'))
    .get('/getRate', function (request, response) {
			calculateRate(request, response);
})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))





function calculateRate(request, response) {
	var weight = request.query["weight"];
	var type = request.query["mailType"];
	var cost = 0;

	switch(type) {
    case "Letters (Stamped)":
    		if (weight >= 3) {
    			weight = 3.5;
    		}
        if (weight == 3.5) {
        	cost = 1.13;
        } else if (Math.ceil(weight) == 1) {
        	cost = 0.50;
        } else if (Math.ceil(weight) == 2) {
        	cost = (((weight - 1) * 0.21) + 0.5);
        } else if (Math.ceil(weight) == 3) {
        	cost = (((weight - 1) * 0.21) + 0.5);
        }
        break;
    case "Letters (Metered)":
      	if (weight >= 3) {
    			weight = 3.5;
    		}
        if (weight == 3.5) {
        	cost = 1.10;
        } else if (Math.ceil(weight) == 1) {
        	cost = 0.47;
        } else if (Math.ceil(weight) == 2) {
        	cost = (((weight - 1) * 0.21) + 0.47);
        } else if (Math.ceil(weight) == 3) {
        	cost = (((weight - 1) * 0.21) + 0.47);
        }
        break;
    case "Large Envelopes (Flats)":
        cost = (((Math.ceil(weight) - 1) * 0.21) + 1);
        break;
    case "First-Class Package Service—Retail":
        if (Math.ceil(weight) <= 4) {
        	cost = 3.50;
        } else if (Math.ceil(weight) <= 8 && Math.ceil(weight) > 4) {
        	cost = 3.75;
        } else if (Math.ceil(weight) == 9) {
        	cost = 4.10;
        } else if (Math.ceil(weight) == 10) {
        	cost = 4.45;
        } else if (Math.ceil(weight) == 11) {
        	cost = 4.80;
        } else if (Math.ceil(weight) == 12) {
        	cost = 5.15;
        } else if (Math.ceil(weight) == 13) {
        	cost = 5.50;
        }
        break;   
	}

	costFixed = cost.toFixed(2); 
	// console.log(cost);
	displayCost(response, costFixed, type);
}

function displayCost(response, cost, type) {
	var params = {cost: cost, type: type};

	response.render('pages/displayResult', params)
}













