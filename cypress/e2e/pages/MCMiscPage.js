export class MCMiscPage{
    hprice = '#homePrice'
    hpayment = '#form-1_downPayment'
    hppercent = '#form-1_downPaymentPercent'
    loan = '#form-1_term'
    breakdown = '#breakdown-panel'
    payment = '#breakdown-panel > div > div > div.pie-chart > svg > g > g:nth-child(4) > text:nth-child(2)'

    enterPrice(price){
        cy.get(this.hprice).clear().type(price)
    }
    enterPercent(percent){
        cy.get(this.hppercent).clear().type(percent)
    }
    selectLoan(term){
        cy.get(this.loan).select(term)
    }
    checkPayment(monthly){
        cy.get(this.payment).should((paymenttxt) => {
            const paymentText = paymenttxt.text()
            expect(paymentText).to.equal(monthly)
        })
    }
}