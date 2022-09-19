import { Loginpage } from "../pages/Loginpage.cy";
import { Organizationcreatepage } from "../pages/Organizationcreatepage.cy"

const loginpage = new Loginpage();
const organizationcreatepage = new Organizationcreatepage();

describe("Tercant organization creat", () => {

it('Tercant page visit', () => {
    // const token = Cypress.env('token');
    // const authorization = `bearer ${ token }`;
    // const options = {
    //   method: 'GET',
    // //   url: `https://odms.baitussalam.org:8445/api/v1/qurbani-representative`,
    //   headers: {
    //     authorization,
    //   }};
    organizationcreatepage.navigate('https://stg.tercant.com/')
});

it('Tercant login page testing', () => {
    organizationcreatepage.enterWorkemail('xajimody@teleg.eu');
    organizationcreatepage.enterYourpassword('1234@Abcd');
    organizationcreatepage.clickForloginbutton();
});

it('Setup your organization in Tercant', () => {
    organizationcreatepage.clickSetupyourorganization();
    organizationcreatepage.clickUncoughtdata();
});

it('In administration settings page genarel configuration part', () => {
    organizationcreatepage.clickSitetitle();
    organizationcreatepage.enterSitedescription('ggnfnfhnjbjbmcjs nbjbs nbcs');
    organizationcreatepage.enterContactcompany_email();
    organizationcreatepage.enterSitecontactusername('rubisen');
    organizationcreatepage.enterSitehomepage('grg5r5ggeneral configuration part');
    organizationcreatepage.enterWebsitename('efgfjggjnbn');
    organizationcreatepage.enterLanguage();
    organizationcreatepage.enterCountry();
    organizationcreatepage.clickSelectteamsize();
    // organizationcreatepage.clickUploadlogo();
    // organizationcreatepage.clickchoosepictureinlogo(special);
    // organizationcreatepage.clickPerfectuploadcoverimageinlogo();
    // organizationcreatepage.clickNevermindinlogo();
    // organizationcreatepage.clickUploadmobilelogo();
    // organizationcreatepage.clickPerfectuploadcoverimageinmobilelogo();
    // organizationcreatepage.clickNevermindinmobilelogo();
    // organizationcreatepage.clickUploadfavicon();
    // organizationcreatepage.clickPerfectuploadcoverimageinfavicon();
    // organizationcreatepage.clickNevermindinfavicone();
    // organizationcreatepage.clickSavechangesingenarelconfiguration();
});

// it('In administration settings page mail servers part', () => {
//     organizationcreatepage.clickMailservers();
//     organizationcreatepage.enterServerhostname('smtp.gmail.com');
//     organizationcreatepage.enterServerport('587');
//     organizationcreatepage.enterUsername('wikianceportal@gmail.com');
//     organizationcreatepage.enterPasswordinmailserver('fvdsioirpftcessi');
//     organizationcreatepage.enterFromaddress('manipur');
//     organizationcreatepage.enterFromname('rubisen');
//     organizationcreatepage.enterSubjectprefix('Software vgggw');
//     // organizationcreatepage.clickUploadinemailnotificationlogo();
//     // organizationcreatepage.clickPerfectuploadcoverimageinemailnotificationlogo();
//     // organizationcreatepage.clickNevermindinemailnotificationlogo();
//     organizationcreatepage.clickTestemail();
//     organizationcreatepage.clickSavechanges();
// });

// it('In administration settings page security configuration part', () => {
//     organizationcreatepage.clickSecurityconfiguration();
//     organizationcreatepage.clickSavechangesinsecurityconfiguration();
//     // organizationcreatepage.clickTercantlogo();
// });

// it('Tercant login page testing', () => {
//     loginpage.enterWorkemail('bekixy@fxcoral.biz');
//     loginpage.enterYourpassword('1234@Abcd');
//     loginpage.clickForloginbutton();
// });
})