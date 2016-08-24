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
                var identifier = callee && callee.property ? callee.property.name : '';

                // check that it's angular:
                if (callee.type === 'MemberExpression' && identifier && ['controller', 'directive', 'filter', 'service', 'factory', 'provider'].indexOf(identifier) !== -1) {

                    // check for functions at the end of that section
                    var angularModuleParams = callee.arguments;
                    if (angularModuleParams.length > 1) {
                        var moduleName = angularModuleParams[0];
                        var moduleBody = angularModuleParams[1].type === 'ArrayExpression' ? angularModuleParams[1][angularModuleParams[1].length - 1] : angularModuleParams[1];

                        if (moduleBody.type === 'FunctionExpression') {
                            var moduleContent = moduleBody.body.body;
                            var alreadySawFunction = false;
                            var allFunctionDeclerations = [];
                            for (var i = 0; i < moduleContent.length ; i++) {
                                if (moduleContent[i].type === 'FunctionDeclaration') {
                                    alreadySawFunction = true;
                                    allFunctionDeclerations.push(moduleContent[i]);
                                } else if (alreadySawFunction) {
                                    context.report(node, "All Function declarations should be at the end of moduleName");
                                }
                            }
                        }
                    }   
                }
            }

            // give me methods

        };
    }
};
