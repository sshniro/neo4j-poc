const express = require('express');
const app = express();
var cors = require('cors');
var request = require('request');

app.use(express.static(__dirname + "/public"));
app.use(cors());
//
// var text = {
//     "query": "MATCH (a:CarPark) WHERE a.name = 'Main' SET a.occupant= 1 +a.occupant ,  a.description = 'XS 12347' + a.description RETURN a.description, a.name, a.occupant",
//     "params": {}
// };
// request({
//     url: "http://13.59.242.159:7474/db/data/cypher?includeStats=true",
//     method: "POST",
//     json: true,   // <--Very important!!!
//     body: JSON.stringify({ query: text }),
//     headers: {
//         "Authorization": "Basic  bmVvNGo6YXdz"
//     },
// }, function (error, response, body){
//
//
//     console.log(response);
// });

const PORT = process.env.PORT || 8080;
if (module === require.main) {
    // Start the server
    const server = app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
});
}

module.exports = app;
