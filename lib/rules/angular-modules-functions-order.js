/**
 * @fileoverview This will answer that function declarations are sorted alphabetically
 * @author Neil Kalman
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "This will answer that function declarations are sorted alphabetically",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            CallExpression: function(node) {
                var callee = node.callee;
                var identifier = callee && callee.property ? .property.name : '';

                // check that it's angular:
                if (callee.type === 'MemberExpression' && identifier && ['controller', 'directive', 'filter', 'service', 'factory', 'provider'].indexOf(identifier) !== -1) {
                    context.report(node, "Fount a MOTHAFACKA Angular thing!");
                }
            }

            // give me methods

        };
    }
};
