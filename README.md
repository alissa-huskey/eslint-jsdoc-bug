eslint-plugin-jsdoc bug demo
============================

This repository is to reproduce a bug I encoutered wth
[eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc).

The command `eslint index.js` produces the following error:

```
TypeError: sourceCode.getScope is not a function
Occurred while linting ./index.js:4
Rule: "jsdoc/no-undefined-types"
    at exports.default.iterateAllJsdocs (./node_modules/eslint-plugin-jsdoc/dist/rules/noUndefinedTypes.cjs:199:209)
    at iterate (./node_modules/eslint-plugin-jsdoc/dist/iterateJsdoc.cjs:1690:3)
    at callIterator (./node_modules/eslint-plugin-jsdoc/dist/iterateJsdoc.cjs:1833:7)
    at *:not(Program) (./node_modules/eslint-plugin-jsdoc/dist/iterateJsdoc.cjs:1891:11)
    at ruleErrorHandler (./node_modules/eslint/lib/linter/linter.js:966:28)
    at ./node_modules/eslint/lib/linter/safe-emitter.js:45:58
    at Array.forEach (<anonymous>)
    at Object.emit (./node_modules/eslint/lib/linter/safe-emitter.js:45:38)
    at NodeEventGenerator.applySelector (./node_modules/eslint/lib/linter/node-event-generator.js:290:26)
    at NodeEventGenerator.applySelectors (./node_modules/eslint/lib/linter/node-event-generator.js:317:22)
```
