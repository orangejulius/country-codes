var countriesByCode;

function importData(sourceData) {
  countriesByCode = sourceData.data.reduce(function(accumulator, row) {
    accumulator[row.alpha2] = accumulator[row.alpha3] = row;
    return accumulator;
  }, {});

}

function importDefaultData() {
  var sourceData = require('./data/countries.json');
  importData(sourceData);
}

function lookup(value) {
 if (countriesByCode === undefined) {
   importDefaultData();
 }

 if (typeof value.toUpperCase !== 'function') {
   return undefined;
 }

 return countriesByCode[value.toUpperCase()];
}

module.exports = {
  importData: importData,
  lookup: lookup
};
