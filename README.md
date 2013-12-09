## mocha-demo

This is a demo which use mocha to test in different situation.

Firstly, install all dependencies.

    npm install

There are four situation Here.

1. use mocha in Node.js with `chai.js` `sinon.js` `sinon-chai.js`

        mocha

2. use mocha in brower with `chai.js` `sinon.js` `sinon-chai.js`

        open index.html

3. use mocha in karma, suites are tested in `Chrome`, `Firefox`, `Safari`, `Opera` and `PhantomJS`

        karma start

4. use mocha in grunt-karma, suites are tested in `Chrome`, `Firefox`, `Safari`, `Opera` and `PhantomJS`

        grunt karma