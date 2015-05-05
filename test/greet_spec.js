greet = require('..')

describe('greet', function () {
  it('should greet a person by name', function () {
    expect(greet('lzk800')).to.eql('hello, lzk800');
    expect(greet()).to.eql('hello, undefined');
  });
  it('should greet a person flirtatiously if drunk', function () {
    expect(greet('lzk800', true))
      .to.eql('hello lzk800, you look sexy today!');
  });
});