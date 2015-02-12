QUnit.module('When I use qunit assert.throws, this.test in assert.throws is undefined');

var isNotNull = function(test) {
    if (test !== undefined && test !== null)
        return true;
    else
        throw 'test null or undefined';
}

QUnit.test("If I use localAssert, it works", function (localAssert) {
    expect(2);

    localAssert.deepEqual(isNotNull('pouet'), true);
    
    localAssert.throws(function () {
        isNotNull(null);
    });
});


QUnit.test("If I use direct assert, it crashes in official but work in updated qunit", function () {
    expect(2);

    QUnit.assert.deepEqual(isNotNull('pouet'), true);
    
    QUnit.assert.throws(function () {
        isNotNull(null);
    });
});

QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});
