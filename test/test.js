// require testing modules
const mocha = require('mocha')
const expect = require('chai').expect
// require the module that we are putting to the test
// or in this case, copy the snippet below from slack:
// prove all the things

describe('My comprehension of the JS basics is solid', () => {
    // prove statements that support the "describe"

    it('and this proves my awesomeness with JS', () => {
        var x
        expect('so far so good'.toString()).to.be.a('string');
        expect({}).to.be.an('object');
        expect(null).to.be.a('null');
        expect(x).to.be.an('undefined');
        expect([]).to.be.an('array').that.is.empty;
        expect([1, 3, 5, 7,]).to.be.an('array').that.includes(5);
        expect({}).to.not.be.an('array')
        expect(dishwasher= {
            model: '1234'}).to.have.a.property('model');
        expect(car = {make: 'tesla', model: 'cybertruck'}).to.include({make: 'tesla', model: 'cybertruck'});
    }) 
})

describe('More examples for testing and javascript', () => {

    // prove statements that support the "describe"
    it('and this proves my awesomeness with JS', () => {
        expect('so far so good').to.be.a('string');
        expect({}).to.be.an('object');
        expect(null).to.be.a('null');
        expect(undefined).to.be.an('undefined');
        expect([]).to.be.an('array').that.is.empty;
        expect([5,4,3,2,1]).to.be.an('array').that.includes(5);
        expect('I am a strong string').to.not.be.an('array')
        expect({model: 'Toyota'}).to.have.a.property('model');
        expect({make: 'tesla', model: 'cybertruck'}).to.include({make: 'tesla', model: 'cybertruck'});
    }) 

    it('includes testing skills', () => {
        expect(2).not.to.equal('2')
        expect(Number('2')).not.to.equal('2')
        expect(2).to.equal(2)
        expect(Number('two')).to.be.NaN
        expect(Number('2')).not.to.be.NaN
        expect(2).not.to.be.NaN
        expect(Boolean(1)).to.be.true
        expect(Boolean(0)).to.be.false
        expect(Boolean('')).to.not.be.true
        expect(Boolean(undefined)).to.be.false
        expect({}.foo).to.be.an.undefined
        expect({foo: 'on you'}.foo).not.to.be.an.undefined
    }) 

})
     
