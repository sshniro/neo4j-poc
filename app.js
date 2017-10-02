const express = require('express');
const app = express();
var cors = require('cors')

app.use(express.static(__dirname + "/public"));
app.use(cors());

const PORT = process.env.PORT || 8080;
if (module === require.main) {
    // Start the server
    const server = app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
});
}

module.exports = app;
