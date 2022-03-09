import styled from "styled-components";

const Button = styled.button`
    padding: 6px 20px;
    font-size: 12pt;
    border-radius: 4px;
    border: none;
    cursor: pointer;

    transition: transform .1s linear;
`

export const MainButton = styled(Button)`
    background: #27AAE1;
    color: white;

    &:hover{
        background-color: rgba(39,170,225, 0.7);
        transform: scale(0.95)
    }
`
export const TextButton = styled(Button)`
    padding-left: 0;
    padding-right: 0;
    background: none;
    color: inherit;

    &:hover{
        color: rgba(39,170,225, 0.7);
    }
`

export const ButtonGroup = styled.div<{flow: string}>`
    display: flex;
    flex-flow: ${ props => props.flow} nowrap;
    gap: 1.5em;
`