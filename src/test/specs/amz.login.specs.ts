import Login from "../../main/pageobjects/amz.login.page"
import * as config from 'config'
import loginData from "../testData/loginData"

/*data from login data*/
const input1: string=loginData.userPassSet.input1
const input2: string=loginData.userPassSet.input2

const login: any = new Login()
describe("login amazon account",()=>
{
    it("should login with given credentials",async ()=>
    {
        await login.loginProcess();
        await login.enterEmailId(input1);
        await login.clickContinue();
        await login.enterPassword(input2);
        await login.finishSignIn();
    })

    it("login is successful or not",async ()=>
    {
        await login.loginSucces()
    })

})