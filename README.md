 Cypress Example

An example project using the automation tool, [Cypress](https://www.cypress.io/). 
 I've included:
- page objects
- various ways of running the tests (via npm scripts)

Cypress is an _agressively_ opinionated framework... some of these opinions are at best, misguided :) YMMV. It also doesn't support all browsers, nor multiple windows (a deal breaker for many).

## Requires
1. [node](https://nodejs.org/en/)

## Setup
1. clone: `git@github.com:Dharendra/cypress-test.git`
1. install: `npm i`

## Run Them Tests
1. all'vum: `npm test`
1. head: `npm run cy run -- -q --headed`
1. just homePage: `npm run cy:home`
1. just searchPage: `npm run cy:search`
1. headless: `npm run cy:headless`