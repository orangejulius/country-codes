var request = require('request');
var csv = require('csv-parser');

//https://raw.githubusercontent.com/whosonfirst/whosonfirst-data/master/meta/wof-country-latest.csv
var baseUrl = 'https://raw.githubusercontent.com/whosonfirst/whosonfirst-data/master/';

var countries = [];

request(baseUrl + 'meta/wof-country-latest.csv').pipe(csv()).on('data', function(row) {

  var JSONStream = require('JSONStream');

  request(baseUrl + 'data/' + row.path).pipe(JSONStream.parse()).on('error', function(err) { console.log(err); }).on('data', function(data) {
    var a3 = data.properties['ne:iso_a3'] || data.properties['qs:adm0_a3'];
    var a2 = data.properties['iso:country'] || data.properties['ne:iso_a2'];

    if (a3 ==='SSD') {
      console.log('south sudan found');
    }

    if (!a3) {
      console.log(data.properties['wof:name'] + '( wof:id ' + data.properties['wof:id'] + ') had no alpha3 code');
    }
    if (!a2) {
      console.log(data.properties['wof:name'] + '( wof:id ' + data.properties['wof:id'] + ') had no alpha2 code');
    }
  });


  // on('data', function(response) {
  //   // countries.push(response)
  //   console.log(response)
  // })

  // console.log('row', data)
}).on('end', function(){console.log(countries);});
