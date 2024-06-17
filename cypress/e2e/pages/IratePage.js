export class IratePage{
    irlabel = '#label_4'
    tooltip = '.zgmi__sc-1hfey7w-0 > .Flex-c11n-8-64-1__sc-n94bjd-0 > .TriggerButton-c11n-8-64-1__sc-19o64qd-0'
    ttheader = 'header.DialogHeader-c11n-8-64-1__sc-1nk3a2m-0'
    ttbody = 'div.DialogBody-c11n-8-64-1__sc-dazfx6-0'
    scrlink = '.zgmi__sc-1hfey7w-0 > .StyledTextButton-c11n-8-64-1__sc-n1gfmh-0'
    irtxtbox = '#rate'
    irunit = '#__c11n_ee2o'
    background = '.kfWtKv'
    error = '.StyledFormHelp-c11n-8-64-1__sc-h3s6hy-0'

    readLabel(label){
        cy.get(this.irlabel).invoke('text').then((labelText) => {
            cy.log(labelText)
            expect(labelText).to.equal(label)
        })
    }
    clickToolTip(){
        cy.get(this.tooltip).click()
    }
    checkToolTipHeader(header){
        return cy.get(this.ttheader).invoke('text').then((tthtxt) => {
            expect(tthtxt).to.equal(header)
        }
    )

    }
    checkToolTipBody(body){
        return cy.get(this.ttbody).invoke('text').then((ttbtxt) => {
            expect(ttbtxt).to.equal(body)
        })
    }
    checkSCRLink(){
        cy.get(this.scrlink).should('have.attr', 'target', '_blank').then(scrurl => {
            const href =scrurl.prop('href')
            expect(href).to.equal('https://www.zillow.com/mortgage-rates/?value=500000&down=125000&auto=true&va=false&source=Z_Mortgage_Calc_rates')
        })
    }
    enterIRate(interestrate){
        cy.get(this.irtxtbox).clear().type(interestrate)
        cy.get(this.background).click()
    }
    checkInvalid(interestrate){
        cy.get(this.error).invoke('text').then((errortxt) => {
            expect(errortxt).to.equal(`'${interestrate}' is not a valid number`)
        })
    }
    checkRangeMin(){
        cy.get(this.error).invoke('text').then((errortxt) => {
            expect(errortxt).to.equal('Rate must be greater than or equal to 0')
        })
    }
    checkRangeMax(){
        cy.get(this.error).invoke('text').then((errortxt) => {
            expect(errortxt).to.equal('Rate must be less than or equal to 100')
        })
    }
    clickBackground(){
        cy.get(this.background).click()
    }
}
