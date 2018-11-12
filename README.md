# js-dev-env
Java Script Development Environment Starter Kit

1)Choose an Editor:
	- strong ES2015+ support
	- framework intelligence
	- built-in terminal
	Editors:
		- Atom
		- WebStorm
		- Brackets
		- VSCode

2)Automated Consistency via EditorConfig
	-Editor config helps developers define and maintain consistent coding styles between different editors and IDEs

3)Package management
	- Bower
	- npm
	- JSPM
	- Jam
	- Vo

4)Development Webservers
	- http-server
	- live-server
	- express
	- koa
	- hapi
	- budo
	- webpack (built-in webserver)
	- browsersync

5)Automation
	- Grunt
	- Gulp
	- npm scripts

6)Transpiling
	- Babel
	- TypeScript
	- Elm

7)Bundling
	- Module Formats
		- IIFE
		- Asynchronous Module Definition
		- CommonJS
		- Universal Module Definition
		- ES6 Modules (Use this one)
	- Bundler
		- Require JS
		- Browserify (simple)
		- Webpack (Comprehensive)
		- Rollup (Tree-shaking Performance)
		- JSPM (Runtime loader Package manager)

8)SourceMaps
Maps code back to the original source
Part of our build

9)Linting
	- JSLint
	- JSHint
	- ESLint (standard)

10)Testing and C/I
  - Mocha
  - Jasmine
  - Tape
  - Qunit
  - AVA
  - Jest
  - Assertion Library (Declare what you expect to happend)
    - expect(2+2).equal.to.(4)
  - Helper Library
    - JSDOM (run DOM-related tests without a browser)
    - Cheerio (Query virtual DOM using jQuery selectors)
  - Where to run tests?
    - Browser
      - Karma, Testem
    - Headless Browser
      - PhantomJS
    - In-memory DOM
      - JSDOM
  - Where do test files belong?
    - Centralized
      - Less "noise" in src folder
      - Deployment confusion
      - Inertia
    - Alongside
      - Easy imports
      - Clear visibility
      - Convenient to open
      - No recreating folder structure
      - Easy file moves
  - When should tests run?
    - Unit tests (anytime you hit save)
      - Testing a single small unit of code in isolation
      - Rapid feedback
      - Facilitates TDD
      - Automatic 
      - Increases test visibility
    - Integration tests 
      - Testing the integration of multiple items
      - Ofter involves clicking and waiting
      - Slow
      - Run on demand, or in QA
