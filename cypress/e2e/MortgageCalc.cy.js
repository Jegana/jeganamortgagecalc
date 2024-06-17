import { IratePage } from "./pages/IratePage"
import { MCMiscPage } from "./pages/MCMiscPage"

const iRPage = new IratePage()
const mCMPage = new MCMiscPage()

describe('e2e test', () => {
  it('E2E Test 1', function () {
    cy.visit('https://www.zillow.com/mortgage-calculator/')
    mCMPage.enterPrice('500000')
    mCMPage.enterPercent('25')
    mCMPage.selectLoan('15 year fixed')
    iRPage.readLabel('Interest rate')
    iRPage.clickToolTip()
    iRPage.checkToolTipHeader('Interest rate')
    iRPage.checkToolTipBody('Representative interest rates are based upon a national, or state specific average from lenders quoting on Zillow for preliminary research purposes only. Actual available rates and monthly payment amounts are subject to market fluctuations and will depend on a number of factors, including geography and loan characteristics.')
    iRPage.clickBackground()
    iRPage.checkSCRLink()
    iRPage.enterIRate('7.0')
    mCMPage.checkPayment('$3,992')
    iRPage.enterIRate('3.555')
    mCMPage.checkPayment('$3,313')
    iRPage.enterIRate('12.999')
    mCMPage.checkPayment('$5,366')

  }) 

  })