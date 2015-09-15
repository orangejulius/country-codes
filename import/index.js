var request = require('request');
var csv = require('csv-parser');

//https://raw.githubusercontent.com/whosonfirst/whosonfirst-data/master/meta/wof-country-latest.csv
var baseUrl = 'https://raw.githubusercontent.com/whosonfirst/whosonfirst-data/master/';

var countries = [];

request(baseUrl + 'meta/wof-country-latest.csv').pipe(csv()).on('data', function(row) {
  console.log(row.name);

  var JSONStream = require('JSONStream');

  request(baseUrl + 'data/' + row.path).pipe(JSONStream.parse()).on('error', function(err) { console.log(err); }).on('data', function(data) {
    console.log(data.properties['ne:iso_a2']);
  });


  // on('data', function(response) {
  //   // countries.push(response)
  //   console.log(response)
  // })

  // console.log('row', data)
}).on('end', function(){console.log(countries);});
