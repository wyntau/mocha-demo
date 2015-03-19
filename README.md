## mocha-demo

This is a demo which use mocha to test in different situation.

Firstly, install all dependencies.

    npm install

There are four situation Here.

1. use mocha in Node.js with `chai.js` `sinon.js` `sinon-chai.js`

        npm run mocha

    or if you installed `mocha` globally, run

        mocha

2. use mocha in brower with `chai.js` `sinon.js` `sinon-chai.js`

        open index.html

3. use mocha in `karma` `karma-mocha`, suites are tested in `Chrome`, `Firefox`, `Safari`, `Opera` and `PhantomJS`

        npm run karma

    or if you installed `karma` globally, run

        karma start

4. use mocha in `grunt-karma` with `karma` and `karma-mocha`, suites are tested in `Chrome`, `Firefox`, `Safari`, `Opera` and `PhantomJS`

        grunt karma

    or

        npm test
