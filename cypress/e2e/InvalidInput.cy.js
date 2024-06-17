import { IratePage } from "./pages/IratePage"

const iRPage = new IratePage()

describe('negative test: Invalid Inputs to Interest rate field', () => {
    it('Negative Test 1', function () {
        cy.visit('https://www.zillow.com/mortgage-calculator/')
        iRPage.enterIRate('aaa')
        iRPage.checkInvalid('aaa')
        iRPage.enterIRate('3%')
        iRPage.checkInvalid('3%')
        iRPage.enterIRate('2..5')
        iRPage.checkInvalid('2..5')
        iRPage.enterIRate(' ')
        iRPage.checkInvalid(' ')
        iRPage.enterIRate(' 1')
        iRPage.checkInvalid(' 1')
        iRPage.enterIRate('1 ')
        iRPage.checkInvalid('1 ')
        iRPage.enterIRate('-1')
        iRPage.checkRangeMin()
        iRPage.enterIRate('100.1')
        iRPage.checkRangeMax('100.1')
    })
})