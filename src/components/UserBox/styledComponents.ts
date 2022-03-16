import styled from "styled-components";


export const UserContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;

    position: relative;
`

export const UserMenuTitle = styled.div`
    display: flex;
    align-items:flex-start;
    padding: 8px 14px 0 16px;
    border-radius: 5px;
    font-size: 12pt;
    cursor: pointer;
    transition: transform .2s ease-in-out,background-color .5s ease-in-out, color .5s ease-in-out,border .5s ease-in-out;
    
    .title{
        padding-bottom: 8px;
        border-bottom: 2px solid rgba(0,0,0,.2);
        
        .bolder{
            font-weight: 700;
        }
    }

    :hover{
        background-color: rgba(0,0,0,.1);
        transform: scale(0.95);
        .title{
            border: none;
        }
    }
`