import { Loginpage } from "../pages/Loginpage.cy"
import { Inviteteampage } from "../pages/Inviteteampage.cy"

describe('Tercant cypress testing script', () => {

const loginpage = new Loginpage();
const inviteteampage = new Inviteteampage();

it('Tercant page visit', () => {
    loginpage.navigate('https://stg.tercant.com/')
});

it('Tercant login page testing', () => {
    loginpage.enterWorkemail('lkccin1pkc@tempmaile.com');
    loginpage.enterYourpassword('1234@Abcd');
    loginpage.clickForloginbutton();
});

it('Invite your teammates in Tercant', () => {
    inviteteampage.clickInviteyourteammates();
    inviteteampage.clickUncoughtdata();
    inviteteampage.clickTeammembersbutton();
    inviteteampage.enterWorkemailteammember('lkccevqnwc@tempmaile.com');
    inviteteampage.clickAnymemberstypebutton();
    inviteteampage.clickAddbuttoninteammember();
    inviteteampage.clickInvite0members();
    inviteteampage.clickNevermindteammember();
    // inviteteampage.clickActionsinteammember();
    // inviteteampage.clickResendinvitationinactions();
    // inviteteampage.clickDeleteinactions();
    inviteteampage.clickOngroup();
    inviteteampage.clickGroupsbutton();
    inviteteampage.enterGroupname('fghfhf');
    inviteteampage.enterDescriptioningroup('We provide application-based solutions in a wide range of technology along with in-depth analysis, technology management, support, and expertise.');
    inviteteampage.clickAddingroup();
    // inviteteampage.clickNevermindingroup();
    // inviteteampage.clickActionsingroup();
    // inviteteampage.clickResendinvitationingroupactions();
    // inviteteampage.clickDeleteingroupactions();
});
})