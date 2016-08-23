/**
 * @fileoverview prefer lodash typechecks instead of angular
 * @author Neil Kalman
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/lodash-typecheck-instead-of-angular"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("lodash-typecheck-instead-of-angular", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "if (angular.isString(&#39;hello&#39;) {}",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
