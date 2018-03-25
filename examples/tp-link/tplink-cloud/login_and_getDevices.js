
const tplink = require('tplink-cloud-api')


async function main(){
  let myTPLink = await tplink.login('username', 'password', 'TermID')
  console.log(myTPLink.getToken)
}
main();
