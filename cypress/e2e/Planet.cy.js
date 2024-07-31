/// <reference types="cypress" />

describe('example to-do app', () => {
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

  it('SOL-T61 List all planets', () => {
    cy.get('.btn').first().should('have.text', 'Add planet')
    cy.contains('Earth')
  })

  it('SOL-T62  add planet with valid minimal data', () => {
    cy.get('.btn').first().should('have.text', 'Add planet').click()
    cy.get('#id')
    .type('10').should('have.value', '10')
    cy.get('#name')
    .type('Planet X').should('have.value', 'Planet X')
    cy.get('#addplanet').click()
    cy.contains('Planet X')

  })

  it('SOL-T63   add a planet without name', () => {
    cy.get('.btn').first().should('have.text', 'Add planet').click()
    cy.get('#id')
    .type('10').should('have.value', '10')
    cy.get('#name')
    .type('  ').should('have.value', '  ')
    cy.get('#addplanet').click()
    cy.contains('Add new planet')

  })

  it('SOL-T64   add a planet without id', () => {
    cy.get('.btn').first().should('have.text', 'Add planet').click()
    cy.get('#id')
    .type(' ').should('have.value', ' ')
    cy.get('#name')
    .type('Planet X').should('have.value', 'Planet X')
    cy.get('#addplanet').click()
    cy.contains('Add new planet')

  })

  it('SOL-T65   add a planet with full set of parameter', () => {
    cy.get('.btn').first().should('have.text', 'Add planet').click()
    cy.get('#id')
    .type('11').should('have.value', '11')
    cy.get('#name')
    .type('Planet XI').should('have.value', 'Planet XI')
    cy.get('#diameter')
    .type('1.0').should('have.value', '1.0')
    cy.get('#mass')
    .type('2.0').should('have.value', '2.0')
    cy.get('#inclination')
    .type('3.0').should('have.value', '3.0')
    cy.get('#eccentricity')
    .type('4.0').should('have.value', '4.0')
    cy.get('#semimajoraxis')
    .type('5.0').should('have.value', '5.0')
    cy.get('#surfacegravity')
    .type('6.0').should('have.value', '6.0')
    cy.get('#orbitalperiod')
    .type('7.0').should('have.value', '7.0')
    cy.get('#siderealrotation')
    .type('8.0').should('have.value', '8.0')


    cy.get('#addplanet').click()
    cy.contains('Planet XI')

  })

  it('SOL-T66  add a planet with full set of parameter but id is not a number', () => {
    cy.get('.btn').first().should('have.text', 'Add planet').click()
    cy.get('#id')
    .type('Alpha11').should('have.value', 'Alpha11')
    cy.get('#name')
    .type('Planet XI').should('have.value', 'Planet XI')
    cy.get('#diameter')
    .type('1.0').should('have.value', '1.0')
    cy.get('#mass')
    .type('2.0').should('have.value', '2.0')
    cy.get('#inclination')
    .type('3.0').should('have.value', '3.0')
    cy.get('#eccentricity')
    .type('4.0').should('have.value', '4.0')
    cy.get('#semimajoraxis')
    .type('5.0').should('have.value', '5.0')
    cy.get('#surfacegravity')
    .type('6.0').should('have.value', '6.0')
    cy.get('#orbitalperiod')
    .type('7.0').should('have.value', '7.0')
    cy.get('#siderealrotation')
    .type('8.0').should('have.value', '8.0')


    cy.get('#addplanet').click()
    cy.contains('Add new planet')

  })
  
  it('SOL-T74 Delete Planet', () => {
      cy.get('.btn').first().should('have.text', 'Add planet')
      cy.contains('Pluto').click()
      cy.contains('Delete').click()
      cy.root().should('not.contain', 'Pluto');

    })
    
})