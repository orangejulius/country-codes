var tape = require( 'tape' );

// tape( 'input not responding to toUpperCase should return undefined', function ( test ){
//   var country_codes = require('../index.js');
//
//   var result = country_codes.lookup([]);
//
//   test.equals(result, undefined, 'should return undefined');
//   test.end();
// });
//
// tape( 'input not found should return undefined', function ( test ){
//   var country_codes = require('../index.js');
//
//   var result = country_codes.lookup('this isn\'t 2 or 3 characters');
//
//   test.equals(result, undefined, 'should return undefined');
//   test.end();
// });

tape('input found as ISO2 should return object with ISO2, ISO3, and name', function(test) {
  var sourceData = {
    'data': [
      {
        'alpha2': 'AB',
        'alpha3': 'ABC',
        'names': {
          'en': 'FULL NAME 1'
        }
      },
      {
        'alpha2': 'FG',
        'alpha3': 'FGH',
        'names': {
          'en': 'FULL NAME 2'
        }
      }
    ]
  };

  var country_codes = require('../index.js');
  country_codes.importData(sourceData);

  var result = country_codes.lookup('AB');

  var expected = {
    'alpha2': 'AB',
    'alpha3': 'ABC',
    'names': {
      'en': 'FULL NAME 1'
    }
  };

  test.deepEquals(result, expected, 'should return 2- and 3-character codes and names by language');
  test.end();

});

tape('input found as ISO3 should return object with ISO2, ISO3, and name', function(test) {
  var sourceData = {
    'data': [
      {
        'alpha2': 'AB',
        'alpha3': 'ABC',
        'names': {
          'en': 'FULL NAME 1'
        }
      },
      {
        'alpha2': 'FG',
        'alpha3': 'FGH',
        'names': {
          'en': 'FULL NAME 2'
        }
      }
    ]
  };

  var country_codes = require('../index.js');
  country_codes.importData(sourceData);

  var result = country_codes.lookup('FGH');

  var expected = {
    'alpha2': 'FG',
    'alpha3': 'FGH',
    'names': {
      'en': 'FULL NAME 2'
    }
  };

  test.deepEquals(result, expected, 'should return 2- and 3-character codes and names by language');
  test.end();
});

tape('input found as ISO2 case-insensitively should return object with ISO2, ISO3, and name', function(test) {
  var sourceData = {
    'data': [
      {
        'alpha2': 'AB',
        'alpha3': 'ABC',
        'names': {
          'en': 'FULL NAME 1'
        }
      },
      {
        'alpha2': 'FG',
        'alpha3': 'FGH',
        'names': {
          'en': 'FULL NAME 2'
        }
      }
    ]
  };

  var country_codes = require('../index.js');
  country_codes.importData(sourceData);

  var result = country_codes.lookup('ab');

  var expected = {
    'alpha2': 'AB',
    'alpha3': 'ABC',
    'names': {
      'en': 'FULL NAME 1'
    }
  };

  test.deepEquals(result, expected, 'should return 2- and 3-character codes and names by language');
  test.end();

});

tape('input found as ISO3 case-insensitively should return object with ISO2, ISO3, and name', function(test) {
  var sourceData = {
    'data': [
      {
        'alpha2': 'AB',
        'alpha3': 'ABC',
        'names': {
          'en': 'FULL NAME 1'
        }
      },
      {
        'alpha2': 'FG',
        'alpha3': 'FGH',
        'names': {
          'en': 'FULL NAME 2'
        }
      }
    ]
  };

  var country_codes = require('../index.js');
  country_codes.importData(sourceData);

  var result = country_codes.lookup('fgh');

  var expected = {
    'alpha2': 'FG',
    'alpha3': 'FGH',
    'names': {
      'en': 'FULL NAME 2'
    }
  };

  test.deepEquals(result, expected, 'should return 2- and 3-character codes and names by language');
  test.end();
});
