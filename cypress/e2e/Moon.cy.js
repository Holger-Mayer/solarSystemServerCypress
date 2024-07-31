/// <reference types="cypress" />

describe('solar system server - moons', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.request("GET", "http://localhost:8080/api/test/reset").then((response) => {
        expect(response.status).to.eq(200)
      })
      cy.visit('http://localhost:8080/home')
    })
  
    it('SOL-T67 add a moon to a planet without moons', () => {
      cy.get('.btn').first().should('have.text', 'Add planet')
      cy.contains('Venus').click()
      cy.contains('Venus')
      cy.contains('Add moon').click()
      cy.get('#name')
        .type('Aphrodite').should('have.value', 'Aphrodite')
      cy.get('#addmoon').click()
      cy.contains('Aphrodite')
    })

    it('SOL-T68 add a moon to a planet one moon', () => {
        cy.get('.btn').first().should('have.text', 'Add planet')
        cy.contains('Earth').click()
        cy.contains('Earth')
        cy.contains('Add moon').click()
        cy.get('#name')
          .type('Lunatic').should('have.value', 'Lunatic')
        cy.get('#addmoon').click()
        cy.contains('Lunatic')
      })

      it('SOL-T69 add a moon to a planet two moons', () => {
        cy.get('.btn').first().should('have.text', 'Add planet')
        cy.contains('Mars').click()
        cy.contains('Mars')
        cy.contains('Add moon').click()
        cy.get('#name')
          .type('Aramis').should('have.value', 'Aramis')
        cy.get('#addmoon').click()
        cy.contains('Aramis')
      })

      it('SOL-T70 Add moon with full set of parameter', () => {
        cy.get('.btn').first().should('have.text', 'Add planet')
        cy.contains('Mercury').click()
        cy.contains('Mercury')
        cy.contains('Add moon').click()
        cy.get('#name')
          .type('Portos').should('have.value', 'Portos')
          cy.get('#radius')
          .type('1').should('have.value', '1')
          cy.get('#mass')
          .type('2').should('have.value', '2')
          cy.get('#density')
          .type('3').should('have.value', '3')
          cy.get('#magnitude')
          .type('4').should('have.value', '4')
          cy.get('#albedo')
          .type('5').should('have.value', '5')
        cy.get('#addmoon').click()
        cy.contains('Portos')
      })

      it('SOL-T72 Add moon with full set of parameter but blank name', () => {
        cy.get('.btn').first().should('have.text', 'Add planet')
        cy.contains('Mercury').click()
        cy.contains('Mercury')
        cy.contains('Add moon').click()
        cy.get('#name')
          .type(' ').should('have.value', ' ')
          cy.get('#radius')
          .type('1').should('have.value', '1')
          cy.get('#mass')
          .type('2').should('have.value', '2')
          cy.get('#density')
          .type('3').should('have.value', '3')
          cy.get('#magnitude')
          .type('4').should('have.value', '4')
          cy.get('#albedo')
          .type('5').should('have.value', '5')
        cy.get('#addmoon').click()
        cy.contains('Mercury')
        cy.contains('Add moon')
      })


      it('SOL-T73 Delete a moon from planet Mars', () => {
        cy.get('.btn').first().should('have.text', 'Add planet')
        cy.contains('Mars').click()
        cy.contains('Mars')
        cy.contains('Deimos').click()
        cy.get('#deletemoon').click()
        cy.contains('Mars')
        cy.contains('Phobos')
        cy.root().should('not.contain', 'Deimos');
      })
})