/**
 * @fileoverview This will answer that function declarations are sorted alphabetically
 * @author Neil Kalman
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/angular-modules-functions-order"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("angular-modules-functions-order", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "function hello() { return &#39;hello&#39;;} function abs() { return 2; }",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
