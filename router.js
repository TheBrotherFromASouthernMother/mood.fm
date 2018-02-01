const render = require('./render.js');
const weather = require('./weather.js');
const queryString = require('querystring');
const app = require('./app.js');
const page = require('./page.js');

function homeRoute(request, response) {
  if (request.url === "/") {
    if (request.method === "GET") {
      render.view("index.html", response)
    render.view('index.css', response);
     response.end();
    }
  }
}

let oldquery = "";

function cityRoute(request, response) {
    let cQuery = "";

 //    if (request.method === 'POST' && request.url === "/") {
 //        request.on("data", (postBody) => {
 //          let query = queryString.parse(postBody.toString());
 //          response.writeHead(303, {"Location":  "/" + query.city});
 //          response.end();
 //     });
 // } else if (request.method === "GET" && request.url != '/' && request.url != '/index.css' && request.url != '/favicon.ico') {
 //     cQuery = request.url.toString();
 //     cQuery = cQuery.replace('/', "");
 //
 //
 //     if (cQuery.length > 0 ) {
 //        if (oldquery != cQuery) {
 //            console.log(cQuery);
 //           weather.GetWeather(cQuery);
 //           weather.weatherEmitter.on('end', () => {
 //           page.switchStatement(weather.weatherID, response, render);
 //           oldquery = cQuery;
 //         }) //end Weather.on
 //
 //        } else {
 //            response.writeHead(303, {"Location":  "/" + cQuery})
 //            response.end();
 //        }
 //
 //     } else {
 //       console.log('please input a city');
 //   } //end if else

 //} //end request.moethod get

   let cityQuery = "";

  request.on('data', data => {
   cityQuery += data;
   console.log(cityQuery);

  })
 request.on('end', () => {
      cityQuery = cityQuery.toString();
        if (cityQuery.length > 0 ) {
          weather.GetWeather();
          weather.weatherEmitter.on('end', () => {
          page.switchStatement(weather.weatherID, response, render);
        }) //end Weather.on
        } else {
          console.log('please input a city');
          }
          response.setTimeout(2000, ()=> {
            response.end();
          })
         }) //end request on end

}
//end cityRoute

module.exports.homeRoute = homeRoute;
module.exports.cityRoute = cityRoute;
