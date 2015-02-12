QUnit.module('When I use qunit assert.throws, this.test in assert.throws is undefined');

var isNotNull = function(test) {
    if (test !== undefined && test !== null)
        return true;
    else
        throw 'test null or undefined';
}

QUnit.test("I can't use assert.throws in 1.17.1 but ok with a fix", function () {
    expect(2);

    QUnit.assert.deepEqual(isNotNull('pouet'), true);
    
    QUnit.assert.throws(function () {
        isNotNull(null);
    });
});

QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});
