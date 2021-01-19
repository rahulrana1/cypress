/// <reference types="Cypress" />
import { dashboardPage } from './appActions/dashboardPage_Actions'

describe("CFC16 Included transactions filter", function() {

    beforeEach("open app and login",() =>{
        cy.visit("https://yourUrl.com/")
        cy.loginCFC("userid.com","Password_12345")
        cy.server()
        cy.wait(10000)
    });

    it('1. /notifications stubbing - 500 error code', function () {
        cy.route({
            method: 'GET',
            url: '/api/path',
            status: 500,
            response:{ errors: { base: ['500 server error'] } }
        }).as('notifications')
        cy.get('[title=selector]').click()
        cy.wait(20000)
        cy.wait('@notifications').then((xhr)=> {
                expect(xhr.status).to.eq(500)
        })
    })
});