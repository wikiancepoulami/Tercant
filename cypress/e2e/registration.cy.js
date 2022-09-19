import { Registrationpage } from "../pages/Registrationpage.cy"

const registrationpage = new Registrationpage()

  it('Tercant page visit', () => {
  registrationpage.navigate('https://stg.tercant.com/')
  });

  it('Tercant registration page testing', () => {
    registrationpage.clickCreateyourorganizationbutton();
    registrationpage.enterYourfirstname('Sam');
    registrationpage.enterYourlastname('Roy');
    registrationpage.enterWorkemail('soxole@forexnews.bg');
    registrationpage.enterCompanyname('FAIZxcv');
    registrationpage.enterChoosepassword('Abcd@1234');
    registrationpage.enterConfirmpassword('Abcd@1234');
    registrationpage.clickThecheckbox();
    registrationpage.clickAgreeandstartbutton();
//FOR VERIFICATION
    // registrationpage.clickVerificationcode();
    registrationpage.clickVerify();
});
