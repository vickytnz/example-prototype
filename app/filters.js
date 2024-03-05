//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here

addFilter('monthToWords', function (month) {
      var monthsList = ["January", "February" , "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var words = monthsList[month - 1];
      return words;
  })
