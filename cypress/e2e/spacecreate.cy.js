import { Loginpage } from "../pages/Loginpage.cy"
import { Spacecreatepage } from "../pages/Spacecreatepage.cy"

describe('Tercant cypress testing script', () => {

const loginpage = new Loginpage();
const spacecreatepage = new Spacecreatepage();

it('Tercant page visit', () => {
    loginpage.navigate('https://stg.tercant.com/')
});

it('Tercant login page testing', () => {
    loginpage.enterWorkemail('lkccin1pkc@tempmaile.com');
    loginpage.enterYourpassword('1234@Abcd');
    loginpage.clickForloginbutton();
});

it('Create your first space in Tercant', () => {
    spacecreatepage.clickCreateyourfirstspace();
    spacecreatepage.clickUncoughtdata();
    spacecreatepage.clickCreateyourfirstspacebutton();
    // spacecreatepage.clickNevermindinspace();
    spacecreatepage.clickCreateinspace();
    spacecreatepage.clickKnowledgebase();  //KNOWLEDGEBASE SPACE
    spacecreatepage.clickChooseandnextbutton();
    spacecreatepage.clickGobackbutton();
    spacecreatepage.enterTitleinknowledgebase('Backend Developer gdddn');
    spacecreatepage.enterDescriptioninknowledgebase('sgdjrk Back-end developers are the experts who build and maintain the mechanisms that process data and perform actions on websites.');
    // spacecreatepage.clickAddinvitation();
    spacecreatepage.clickCreatebuttoninknowledgebase();
    // spacecreatepage.clickGobackinknowledgebase();
    // spacecreatepage.clickInspacecardoption(); //CARD OPTION
    // spacecreatepage.clickDeleteoptionincard();
    // spacecreatepage.clickDelete();
    // spacecreatepage.clickCancel();

// // OTHER SPACES :)
//     spacecreatepage.clickPersonalspace(); //PERSONAL SPACE
//     spacecreatepage.clickChooseandnextbutton();
//     spacecreatepage.clickGobackbutton();
    
//     spacecreatepage.clickInspacecardoption(); //CARD OPTION
//     spacecreatepage.clickDeleteoptionincard();
//     spacecreatepage.clickDelete();
//     spacecreatepage.clickCancel();

//     spacecreatepage.clickDocumentationspace(); //DOCUMENTATION SPACE
//     spacecreatepage.clickChooseandnextbutton();
//     spacecreatepage.clickGobackbutton();

//     spacecreatepage.clickInspacecardoption(); //CARD OPTION
//     spacecreatepage.clickDeleteoptionincard();
//     spacecreatepage.clickDelete();
//     spacecreatepage.clickCancel();

//     spacecreatepage.clickSoftwareprojectspace(); //SOFTWAREPROJECT SPACE
//     spacecreatepage.clickChooseandnextbutton();
//     spacecreatepage.clickGobackbutton();

//     spacecreatepage.clickInspacecardoption(); //CARD OPTION
//     spacecreatepage.clickDeleteoptionincard();
//     spacecreatepage.clickDelete();
//     spacecreatepage.clickCancel();

//     spacecreatepage.clickTeamspace(); //TEAM SPACE
//     spacecreatepage.clickChooseandnextbutton();
//     spacecreatepage.clickGobackbutton();

//     spacecreatepage.clickInspacecardoption(); //CARD OPTION
//     spacecreatepage.clickDeleteoptionincard();
//     spacecreatepage.clickDelete();
//     spacecreatepage.clickCancel();

//     spacecreatepage.clickDepartmentspace(); //DEPARTMENT SPACE
//     spacecreatepage.clickChooseandnextbutton();
//     spacecreatepage.clickGobackbutton();
    
//     spacecreatepage.clickInspacecardoption(); //CARD OPTION
//     spacecreatepage.clickDeleteoptionincard();
//     spacecreatepage.clickDelete();
//     spacecreatepage.clickCancel();
});

})