# Node.JS template engines benchmark

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [doT](https://github.com/olado/doT) v1.0.1 ([website](http://olado.github.com/doT/))
- [Dust](https://github.com/linkedin/dustjs) v1.2.1 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v0.4.7 ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) v0.8.3
- [Fest](https://github.com/mailru/fest) v0.5.4
- [Handlebars.js](https://github.com/wycats/handlebars.js/) v1.0.9 ([website](http://handlebarsjs.com/))
- [Hogan.js](https://github.com/twitter/hogan.js) v2.0.0 ([website](http://twitter.github.com/hogan.js/))
- [Jade](https://github.com/visionmedia/jade) v0.28.1 ([website](http://jade-lang.com/))
- [Swig](https://github.com/paularmstrong/swig) v0.13.5
- [Underscore](https://github.com/documentcloud/underscore) v1.4.4 ([website](http://underscorejs.org/))
- [Gaikan](https://github.com/Deathspike/gaikan) v2.0.0
- [React](https://github.com/facebook/react) v0.12.2
- React & JSX 

## Results

### Windows Server 2008 R2 Standard 64bit, NodeJS v0.10.36 (1000x)

    Gaikan               (   18ms) - fastest
    doT                  (   20ms) - 11% slower
    ECT                  (   25ms) - 39% slower
    Fest                 (   25ms) - 39% slower
    Vash                 (   27ms) - 50% slower
    Underscore           (   31ms) - 72% slower
    Hogan.js             (   34ms) - 89% slower
    Swig                 (   39ms) - 117% slower
    Dust                 (   44ms) - 144% slower
    EJS without `with`   (   51ms) - 183% slower
    EJS                  (   53ms) - 194% slower
    Handlebars.js        (   70ms) - 289% slower
    CoffeeKup            (   71ms) - 294% slower
    Jade without `with`  (   73ms) - 306% slower
    Eco                  (   75ms) - 317% slower
    Jade                 (  131ms) - 628% slower
    React & JSX          ( 2363ms) - 13028% slower
    React                ( 2437ms) - 13439% slower

### Mac OS X Yosemite, MacBook Pro (Retina, Mid 2012), 2.7GGz Core i7, 16GB ram, NodeJs v.12.0 (1000x) 


	Gaikan               (   18ms) - fastest
	Fest                 (   21ms) - 17% slower
	doT                  (   23ms) - 28% slower
	ECT                  (   24ms) - 33% slower
	EJS without `with`   (   31ms) - 72% slower
	Hogan.js             (   31ms) - 72% slower
	Vash                 (   32ms) - 78% slower
	Dust                 (   33ms) - 83% slower
	Underscore           (   46ms) - 156% slower
	Swig                 (   47ms) - 161% slower
	EJS                  (   62ms) - 244% slower
	Eco                  (   63ms) - 250% slower
	Handlebars.js        (   67ms) - 272% slower
	CoffeeKup            (  115ms) - 539% slower
	Jade without `with`  (  125ms) - 594% slower
	Jade                 (  274ms) - 1422% slower
	React                (  744ms) - 4033% slower
	React & JSX          (  789ms) - 4283% slower

	
## Usage

    git clone git://github.com/YoussefTaghlabi/template-benchmark.git
    cd template-benchmark
    npm install
    node ./benchmark.js
