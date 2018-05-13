
const remotes = require('../remotes')

module.exports = (configRemote) => {
  const remoteType = configRemote.type
  const remoteParams = configRemote.params;

  return remotes(remoteType,remoteParams)
}
