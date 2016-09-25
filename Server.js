/**
 * Created by ruhi on 2016-09-25.
 */

// reference connect package
var connect = require('connect');
var qyeryString = require('queyString');

// installation a new connect object
var app = connect();

//set up the math function to the http request
var math = function(req, res, next) {

    var queryString = query.parse(require('url').parse(req.url).query);
    var method = queryString.method.valueOf();
    var x = queryString.x.valueOf();
    var y = queryString.y.valueOf();

    if (method == 'add') {
        var added = +x + +y;
        res.end('addition: '+ x +'+'+ y +'=' + added.toString());
    }

    else if (method == 'Subtract') {
        var sub = +x - +y;
        res.end('Substraction: '+ x + '-' + y +'=' + sub.toString());
    }

    else if (method == 'Multiply') {
        var mul = +x * +y;
        res.end('Multiply: '+ x + '*'+ y +'=' + mul.toString());
    }

    else if (method == 'Divide') {
        var mul = +x/ +y;
        res.end('Divide: '+ x + '/'+ y +'=' + mul.toString());
    }

    else
    {
        res.end(' The Method value is not Right');
    }

};
// execuate hello when we get a request
app.use(math);

// start the server on port 3000
app.listen(3000);

// display the message thAT our server is running
console.log('connect running on port 3000');