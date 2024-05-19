//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here

// headers, use 'safe' after - to use extra settings just do in order for example {{text | headingH1('xl') | safe }}
addFilter('headingH1', function(word, size='l', margin=''){ //default is h1 with l styling = for a filter you don't use the name of the variable, just the position

var words =   '<h1 class="govuk-heading-' + size + '" margin >' + word  + '</h1>';

  return words;


})

addFilter('headingH2', function(word, size='m', margin=''){ //default is h2 with m styling

var words =   '<h2 class="govuk-heading-' + size + ' margin ">' + word  + '</h2>';

  return words;
})

addFilter('headingH3', function(word, size='m', margin=''){ //default is h3 with m styling

var words =   '<h3 class="govuk-heading-' + size + ' margin ">' + word  + '</h3>';

  return words;
})

addFilter('headingH4', function(word, size='m', margin=''){ //default is h4 with s styling

var words =   '<h4 class="govuk-heading-' + size + ' margin ">' + word  + '</h4>';

  return words;
})

// monthstowords

addFilter('monthToWords', function (month) {
      var monthsList = ["January", "February" , "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var words = monthsList[month - 1]; // arrays start at 0 not 1, assuming valid month for prototype
      return words;
  })
