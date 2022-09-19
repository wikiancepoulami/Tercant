import { Loginpage } from "../pages/Loginpage.cy"

const loginpage = new Loginpage()

it('Tercant page visit', () => {
    loginpage.navigate('https://stg.tercant.com/')
});
it('Tercant login page testing', () => {
    loginpage.enterWorkemail('xajimody@teleg.eu');
    loginpage.enterYourpassword('1234@Abcd');
    loginpage.clickForloginbutton();
    // loginpage.clickLogoutbutton();
    // loginpage.clickUncoughtdata();
    // loginpage.clickYeslogoutbutton();
});