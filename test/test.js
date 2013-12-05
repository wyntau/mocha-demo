
describe('one', function(){
    it('should return 1', function(){
        sinon.spy(myObj, 'return1');
        expect(myObj.return1()).to.equal(1);
        myObj.return1.should.have.been.calledOnce; // should usage
        expect(myObj.return1.calledOnce).to.be.ok; // expect usage
    })

    it('should return 2', function(){
        expect(myObj.return2()).to.equal(2)
    })
});