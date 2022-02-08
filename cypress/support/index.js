// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

before(() => {
    console.log('111')
    Cypress.Screenshot.defaults({
        blackout: ['.row._1X4_e', '.row._23Ell'],
        capture: 'fullPage',
        clip: { x: 0, y: 0, width: 1280, height: 720 },
        scale: false,
        disableTimersAndAnimations: false,
        screenshotOnRunFailure: true,
        onBeforeScreenshot () { },
        onAfterScreenshot () { },
      })
})
