var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/projectsAPI', { useNewUrlParser: true });

var Project = require('./models/projectModel');

var app = express();

var port = process.env.PORT || 3000;

var portfolioRouter = express.Router();

portfolioRouter.route('/projects')
    .get(function (req, res) {
        Project.find(function (err, projects) {
            if(err)
                console.log(err);
            else
                res.json(projects);
        });
    });

app.use('/api', portfolioRouter);



app.get('/', function(req, res) {
   res.send('welcome to my API!');
});

app.listen(port, function(){
    console.log('Gulp is running on my app on PORT : ' + port)
});