/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-284.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is generic own data property of 'O', test TypeError is thrown when updating the [[Configurable]] attribute value of 'name' which is defined as non-configurable (15.4.5.1 step 5)
 */


function testcase() {

        var arrObj = [];

        Object.defineProperty(arrObj, "property", {
            value: 12
        });
        try {
            Object.defineProperty(arrObj, "property", {
                configurable: true
            });
            return false;
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(arrObj, "property", 12, false, false, false);
        }
    }
runTestCase(testcase);
