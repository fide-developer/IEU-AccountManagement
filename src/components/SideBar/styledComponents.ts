import styled from "styled-components";


export const SideBarContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    background-color: #2E2E2E;
    color: white;
    align-items: center;

    >*{
        padding: 24px 16px;
    }
`
export const SBLogo = styled.div`
    font-size: 14pt;
    font-weight: bold;
    background-color:#27AAE1;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-bottom: 50%;
    position: relative;

    ::after{
        content: " ";
        width: 100%;
        height: 2px;
        background-color: #bfbfbf;
        position: absolute;
        top: 150%;
        left: 0;
    }
`

export const SBMenus = styled.div`
    /* padding:  */
    transition: transform .2s ease-in-out,background-color .5s ease-in-out, color .5s ease-in-out;
    padding: 8px 0;
    background-color: rgba(0,0,0,0);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;

    svg{
        transition: fill .5s ease-in-out;
        fill: white;
    }

    :hover{
        color: #27AAE1;
        transform: scale(0.95);
        background-color: rgba(0,0,0,0.3);
        svg{
            fill: #27AAE1 ;
        }

        ::after{
            content: attr(data-tooltip);
            clip-path: polygon(0% 0%, 100% 0%, 100% calc(100% - 8px), 24px calc(100% - 8px), 16px 100%, 8px calc(100% - 8px), 0% calc(100% - 8px));
            background-color: rgba(0,0,0,0.8);
            position: absolute;
            padding: 6px 8px 14px 8px;
            top: -100%;
            left: calc(50% - 16px);
            white-space: nowrap;
            color: white;
            border-radius: 2px;
        }
    }
`