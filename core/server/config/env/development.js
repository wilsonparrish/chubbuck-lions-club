// ENVIRONMENT VARIABLES
module.exports = {
    // you want to get your own mongolab database and credentials from within Heroku
    // if you leave it like this you will be hitting my database :)
    db: 'mongodb://wpmk2:madcatmk3@ds035563.mongolab.com:35563/chubbucklionsclub',
    sessionSecret: 'developmentSessionSecret'
};

//  'mongodb://wpmk2:madcatmk3@ds035563.mongolab.com:35563/chubbucklionsclub'

//  This was used to import the json data
//  C:\Users\Wilson\Dropbox> mongoimport -h ds035563.mongolab.com:35563 -d chubbucklionsclub -c teamData -u wpmk2 -p madcatmk3 --file teamData.json --jsonArray