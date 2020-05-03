console.log(__filename);
var url = "http://google.com";

function log(message)
{
  // send http request
  console.log(message + " JS is VERY FIN MAN ");
}

module.exports = log;
module.exports.endPoint = url;
