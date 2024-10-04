describe('Orange HRM', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']"

  }
  it('Login Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
   cy.location('pathname').should('equal', '/dashboard/index')
   cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/auth/login')
    cy.get(selectorsList.usernameField).type('test')
    cy.get(selectorsList.passwordField).type('test123')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
   
  })
})