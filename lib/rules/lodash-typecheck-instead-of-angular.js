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
        fixable: "code",  // or "code" or "whitespace"
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
            //'isDefined',
            'isElement'
        ];
        
        var angularToLodashMap = {
            'isFunction': '_.isFunction',
            'isDate': '_.isDate',
            'isArray': '_.isArray',
            'isNumber': '_.isNumber',
            'isObject': '_.isObject',
            'isString': '_.isString',
            'isUndefined': '_.isUndefined',
            'isElement': '_.isElement'
        };

        return {
            CallExpression: function(node) {
                var callee = node.callee;
                if (callee.object && callee.object.name === 'angular' && angularTypeChecks.indexOf(callee.property.name) !== -1) {
                    context.report({
                        node: node,
                        message: "Kibibit prefers lodash\\underscore " + angularToLodashMap[callee.property.name] + " instead of angular." + callee.property.name,
                        fix: function(fixer) {
                            return fixer.replaceTextRange([callee.start, callee.end], angularToLodashMap[callee.property.name]);
                        }
                    });
                }
            }

        };
    }
};
