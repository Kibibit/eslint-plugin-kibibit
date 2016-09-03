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
        
        var objectToLodashMap = {
            'keys': '_.keys'
        };

        return {
            CallExpression: function(node) {
                var callee = node.callee;
                var objectName = callee.object ? callee.object.name : undefined;
                var propertyName = objectName ? callee.property.name : undefined;
                var isAngularObject = objectName === 'angular';
                var isObjectObject = isAngularObject ? false : (objectName === 'Object');
                var functionsMap = isAngularObject ? angularToLodashMap : objectToLodashMap;

                if ((isAngularObject || isObjectObject) && functionsMap[propertyName]) {
                    context.report({
                        node: node,
                        message: "Kibibit prefers lodash\\underscore "
                          + functionsMap[propertyName] + " " + objectName + "." + propertyName,
                        fix: function(fixer) {
                            return fixer.replaceTextRange([callee.start, callee.end], functionsMap[propertyName]);
                        }
                    });
                }
            }
        };

    }
};
