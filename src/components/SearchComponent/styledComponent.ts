import styled from "styled-components";


export const SearchContainer = styled.div`
    position: relative;
    width: 100%;

    input{
        width: 100%;
        outline: none; 
        border-radius: 4px;
        border: 1px solid black;
        padding: 8px 12px 8px 40px;   
    }

    .icons{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;

        top: 0;
        left: 0;
        height: 100%;
        width: 40px;
    
        svg{
            fill: rgba(0,0,0,.8);
            height: 60%;
            width: auto;
        }
    }
`