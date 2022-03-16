import styled from "styled-components";
import { LogoContainer } from "../../components/Logo/styledComponent";
const paddingTop = "72px";

export const LoginPageContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    min-height: 100vh;
`

export const LoginSection = styled.div`
    width: 24%;
    padding-top: ${paddingTop};
    background-color: #302F2F;
    color: white;
`

export const LoginContent = styled.div`
    padding: 0 15%;
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;

    ${LogoContainer}{
        height: 32px;
    }

    h1{
        font-size: 36pt;
        font-weight: 700;
        line-height: 56px;
    }
`

export const Messages = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 16px;

    h2{
        font-size: 14pt;
        font-weight: 600;
        line-height: 21px;
    }
    h3{
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
    }
`