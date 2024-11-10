const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxNTlkMDFmLTBkZWQtNDhjMS04OWZiLTQ4NWNlODM2ZTc4OS0xNzMxMjc4NDEwODc1IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZDc5MmQ4ZGEtN2I4MS00Y2NhLWEwNjMtY2RmY2MzM2JiNmEzIiwidHlwZSI6InQifQ.GTAk74ju0_17qj4F7_7-8jG5TY-mxVLsR9WM8l2PZOg'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: 'TOKEN',
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
