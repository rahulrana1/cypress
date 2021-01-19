/// <reference types="Cypress" />
import { dashboardPage } from './appActions/dashboardPage_Actions'

describe("Sample feature", function() {

    before("login",() =>{
        cy.visit("https://yourApp.com/")
        cy.loginCFC("yourUserID.com","Password_12345")
        cy.get('[title=selector]').click()
        cy.server()
        cy.route('GET', 'api/report/account_balances?**').as('account_balances')
        cy.wait(10000)
    });

    it('Sample Test', function () {

        //add first transactions
        dashboardPage.clickAddTransactionButton()
    })
});