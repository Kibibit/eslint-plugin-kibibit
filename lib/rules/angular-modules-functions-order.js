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
        
        var sortAlphabetically = function sortAlphabetically(a, b) {
            if(a.id.name < b.id.name) return -1;
            if(a.id.name > b.id.name) return 1;
            return 0;
        };

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            CallExpression: function(node) {
                var callee = node.callee;
                var identifier = callee && callee.property ? callee.property.name : '';

                // check that it's angular:
                if (callee.type === 'MemberExpression' && identifier && ['controller', 'directive', 'filter', 'service', 'factory', 'provider'].indexOf(identifier) !== -1) {

                    // test
                    // context.report(node, 'found a angular module!');

                    // check for functions at the end of that section
                    var angularModuleParams = node.arguments;
                    if (angularModuleParams && angularModuleParams.length > 1) {
                        var moduleName = angularModuleParams[0].value;
                        var moduleBody = angularModuleParams[1].type === 'ArrayExpression' ? angularModuleParams[1].elements.slice(-1)[0] : angularModuleParams[1];

                        if (moduleBody.type === 'FunctionExpression' && moduleBody.body.body) {
                            // context.report(node, 'found the main function. going through body to check for functionDeclarations');
                            var moduleContent = moduleBody.body.body;
                            var alreadySawFunction = false;
                            var allFunctionDeclerations = [];
                            for (var i = 0; i < moduleContent.length ; i++) {
                                if (moduleContent[i].type === 'FunctionDeclaration') {
                                    alreadySawFunction = true;
                                    allFunctionDeclerations.push(moduleContent[i]);
                                } else if (alreadySawFunction) {
                                    context.report(node, "All Function declarations should be at the end of " + moduleName);
                                }
                            }

                            // context.report(node, 'found ' + allFunctionDeclerations.length + ' function declarations');
                            var sortedFunctions = allFunctionDeclerations.slice().sort(sortAlphabetically);
                            for (var i = 0; i < allFunctionDeclerations.length; i++) {
                                if (sortedFunctions[i] !== allFunctionDeclerations[i]) {
                                    context.report(node, 'function declarations must be sorted alphabetically');
                                    break;
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
