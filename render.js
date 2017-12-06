const fs = require('fs');
const app = require('./app.js');


function view(template, response = app.res) {

  //read from  the template files
  let fileContents = fs.readFileSync(`./${template}`, {encoding: "utf8"});
  //write out to the response
 // let contents = fs.createReadStream(template);


    response.write(fileContents);
    // contents.pipe(response);
    // contents.on('pipe', ()=> {
    //     console.log('they:ve bee piped sir');
    // })

}

module.exports.view = view;
