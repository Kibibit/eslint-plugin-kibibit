/**
 * @fileoverview Prefer lodash is* functions
 * @author Neil Kalman
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Prefer lodash is* functions",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        var angularTypeChecks = [
            'isFunction',
            'isDate',
            'isArray',
            'isNumber',
            'isObject',
            'isString',
            'isUndefined',
            'isDefined',
            'isElement'
        ];

        return {
            CallExpression: function(node) {
                var callee = node.callee;
                if (callee.object.name === 'angular' && angularTypeChecks.indexOf(callee.property.name) !== -1) {
                    context.report(node, "Kibibit prefers lodash\\underscore is* functions instead of angular's");
                }
                /*if (!source.match(/ {$/)) {
                    context.report(node, "Found improperly formatted if-statement");
                }*/
            }

        };
    }
};
