function switchStatement (weatherConditions, response, render) {
  switch(true) {
    case (weatherConditions === "/Austin"):
    render.view('Rain.html');
    response.end();
    break;
    case (weatherConditions === "/Houston"):
    render.view('Snow.html');
    response.end();
    break;
    default:
    render.view('Rain.html');
    response.end();
} //end switch


}

module.exports.switchStatement = switchStatement;
