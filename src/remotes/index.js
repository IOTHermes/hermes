

const hermesBackendLink = require('hermes-backend-link')('http://localhost:3030')

module.exports = (type,params) => {
  return hermesBackendLink.authenticate(params.authentication.email,params.authentication.password)
  .then(()=>{
    console.log('Authenticated to Hermes Backend!')
    return hermesBackendLink;
  })
}
