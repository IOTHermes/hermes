const chai = require('chai');
const expect = chai.expect;

describe('Booleans', function() {
  it('should work', done => {
    expect(true).to.equal(true);
    expect(false).to.equal(false);
    done()
  })
})
