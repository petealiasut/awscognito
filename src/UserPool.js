import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData= {
    UserPoolId:"ap-southeast-1_PWOn2Eg0x",
    ClientId:"7m7158tpsm0kct270sgnjud4bh",
}

export default new CognitoUserPool(poolData);
