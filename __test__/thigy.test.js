const thingy = require('../thingy')

test("doThatShit should return version", 
  () => { expect(thingy.doThatShit()).toEqual({version:"1.0"})  })
