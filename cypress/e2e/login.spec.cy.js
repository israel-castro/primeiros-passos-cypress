describe('Orange HRM', () => {
  it('Login Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
   cy.location('pathname').should('equal', '/dashboard/index')
   cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
  })
  it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/auth/login')
    cy.get("[name='username']").type('test')
    cy.get("[name='password']").type('test123')
    cy.get("[type='submit']").click()
    cy.get("[role='alert']")
   
  })
})