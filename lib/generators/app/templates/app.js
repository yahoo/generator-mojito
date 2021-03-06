'use strict';

var express = require('express'),
    libmojito = require('mojito'),
    os = require('os'),
    app = express();

app.set('port', process.env.PORT || 8666);
libmojito.extend(app);

app.use(libmojito.middleware());
app.mojito.attachRoutes();

app.listen(app.get('port'));
console.log('\nApplication ready. View at http://' + os.hostname() + ':' + app.get('port'));

module.exports = app;