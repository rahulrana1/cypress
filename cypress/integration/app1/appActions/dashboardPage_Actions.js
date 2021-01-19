/// <reference types="cypress" />

export class DashboardPage {

    clickAddTransactionButton(){
        cy.contains('Add Transaction').click()
    }

}

export const dashboardPage = new DashboardPage()