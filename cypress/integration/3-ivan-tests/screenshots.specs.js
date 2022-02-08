describe("Screenshot", () => {

    beforeEach(() => cy.visit('/'))
    
    it('should take a screenshot', () => {
        // https://on.cypress.io/screenshot
        cy.wait(2000)
        cy.screenshot("Home",{ capture: 'viewport'});
    });
    
    
    it('should take an element(Foto del capi) screenshot after select "El Capi"', () => {
        cy.visit('/api/commands/screenshot')
        cy.viewport(2220, 1020);
        cy.screenshot("HomeFull")
    });

    it.skip('should take a fullPage screen"', () => {
        cy.visit('/team')
        cy.viewport(720, 200);
        cy.screenshot("Full screen",{ capture: 'viewport'});
    });
  });