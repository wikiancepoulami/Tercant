import { Registrationpage } from "../pages/Registrationpage.cy";
import { Organizationcreatepage } from "../pages/Organizationcreatepage.cy";
import { Spacecreatepage } from "../pages/Spacecreatepage.cy"
import { Inviteteampage } from "../pages/Inviteteampage.cy"
import { Loginpage } from "../pages/Loginpage.cy";
import { Tercant } from "../pages/Tercant.cy"

const registrationpage = new Registrationpage()
const organizationcreatepage = new Organizationcreatepage();
const spacecreatepage = new Spacecreatepage();
const inviteteampage = new Inviteteampage();
const loginpage = new Loginpage();
const tercant = new Tercant();

describe("First time dashboard create in tercant", () => {

    it('Tercant page visit', () => {
        registrationpage.navigate('https://stg.tercant.com/')
    });
//REGISTRATION 
    it('Tercant registration page testing', () => {
        registrationpage.clickCreateyourorganizationbutton();
        registrationpage.enterYourfirstname('Barsha');
        registrationpage.enterYourlastname('Dey');
        registrationpage.enterWorkemail('sojeqa@decabg.eu');
        registrationpage.enterCompanyname('trtmn');
        registrationpage.enterChoosepassword('1234@Abcd');
        registrationpage.enterConfirmpassword('1234@Abcd');
        registrationpage.clickThecheckbox();
        registrationpage.clickAgreeandstartbutton();
        //FOR VERIFICATION
        registrationpage.clickVerify();
    });
//ORGANIZATION CREATE
    it('Setup your organization in Tercant', () => {
        organizationcreatepage.clickSetupyourorganization();
        organizationcreatepage.clickUncoughtdata();
    });
    
    it('In administration settings page genarel configuration part', () => {
        organizationcreatepage.enterSitetitle('mzxsghjgx');
        organizationcreatepage.enterSitedescription('gjgk The Great Company in India..sgerhenhrn');
        organizationcreatepage.enterContactcompany_email('hbjghg@gmail.com');
        organizationcreatepage.enterSitecontactusername('barshadey');
        organizationcreatepage.enterSitehomepage('Dashboard for general configuration part..gjgkyhl');
        organizationcreatepage.enterWebsitename('Tercant website.com');
        organizationcreatepage.enterLanguage();
        organizationcreatepage.enterCountry();
        organizationcreatepage.clickSelectteamsize();
        // organizationcreatepage.clickUploadlogo();
        // // organizationcreatepage.clickchoosepictureinlogo(special);
        // organizationcreatepage.clickPerfectuploadcoverimageinlogo();
        // // organizationcreatepage.clickNevermindinlogo();
        // organizationcreatepage.clickUploadmobilelogo();
        // organizationcreatepage.clickPerfectuploadcoverimageinmobilelogo();
        // // organizationcreatepage.clickNevermindinmobilelogo();
        // organizationcreatepage.clickUploadfavicon();
        // organizationcreatepage.clickPerfectuploadcoverimageinfavicon();
        // organizationcreatepage.clickNevermindinfavicone();
        // organizationcreatepage.clickSavechangesingenarelconfiguration();
    });
    
    it('In administration settings page mail servers part', () => {
        organizationcreatepage.clickMailservers();
        organizationcreatepage.enterServerhostname('smtp.gmail.com');
        organizationcreatepage.enterServerport('587');
        organizationcreatepage.enterUsername('wikianceportal@gmail.com');
        organizationcreatepage.enterPasswordinmailserver('bgtrdn');
        organizationcreatepage.enterFromaddress('Pune');
        organizationcreatepage.enterFromname('barshadey');
        organizationcreatepage.enterSubjectprefix('hdgd');
        // organizationcreatepage.clickUploadinemailnotificationlogo();
        // organizationcreatepage.clickPerfectuploadcoverimageinemailnotificationlogo();
        // // organizationcreatepage.clickNevermindinemailnotificationlogo();
        // organizationcreatepage.clickTestemail();
        // organizationcreatepage.clickSavechanges();
    });
    
    it('In administration settings page security configuration part', () => {
        organizationcreatepage.clickSecurityconfiguration();
        organizationcreatepage.clickSavechangesinsecurityconfiguration();
        // organizationcreatepage.clickTercantlogo();
    });

// it('Tercant page visit', () => {
//     loginpage.navigate('https://stg.tercant.com/')
// });

    it('Tercant login page testing', () => {
        loginpage.enterWorkemail('sojeqa@decabg.eu');
        loginpage.enterYourpassword('1234@Abcd');
        loginpage.clickForloginbutton();
    });
//INVITE YOUR TEAMMATES
    it('Invite your teammates in Tercant', () => {
        inviteteampage.clickInviteyourteammates();
        inviteteampage.clickUncoughtdata();
        inviteteampage.clickTeammembersbutton();
        inviteteampage.enterWorkemailteammember('poulamisarkar150@gmail.com');
        inviteteampage.clickAnymemberstypebutton();
        inviteteampage.clickAddbuttoninteammember();
        inviteteampage.clickInvite0members();
        inviteteampage.clickNevermindteammember();
        // inviteteampage.clickActionsinteammember();
        // inviteteampage.clickResendinvitationinactions();
        // inviteteampage.clickDeleteinactions();
        inviteteampage.clickOngroup();
        inviteteampage.clickGroupsbutton();
        inviteteampage.enterGroupname('ndfhdjf');
        inviteteampage.enterDescriptioningroup('We provide application-based solutions in a wide range of technology along with in-depth analysis, technology management, support, and expertise.');
        inviteteampage.clickAddingroup();
        // inviteteampage.clickNevermindingroup();
        // inviteteampage.clickActionsingroup();
        // inviteteampage.clickResendinvitationingroupactions();
        // inviteteampage.clickDeleteingroupactions();
    });
//SPACE CREATE  
    it('Create your first space in Tercant', () => {
        spacecreatepage.clickCreateyourfirstspace();
        spacecreatepage.clickUncoughtdata();
        spacecreatepage.clickCreateyourfirstspacebutton();
        // spacecreatepage.clickNevermindinspace();
        spacecreatepage.clickCreateinspace();
        spacecreatepage.clickKnowledgebase();  //KNOWLEDGEBASE SPACE
        spacecreatepage.clickChooseandnextbutton();
        // spacecreatepage.clickGobackbutton();
        spacecreatepage.enterTitleinknowledgebase('BackfwgDev');
        spacecreatepage.enterDescriptioninknowledgebase('Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites.');
        spacecreatepage.clickAddinvitation();
        spacecreatepage.clickCreatebuttoninknowledgebase();
        // spacecreatepage.clickGobackinknowledgebase();
        // spacecreatepage.clickInspacecardoption(); //CARD OPTION
        // spacecreatepage.clickDeleteoptionincard();
        // spacecreatepage.clickDelete();
        // spacecreatepage.clickCancel();
    });

})