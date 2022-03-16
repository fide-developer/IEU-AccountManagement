import styled from "styled-components";


export const InputGroup = styled.div<{errorMessage: string | undefined}>`
    display: flex;
    flex-flow: column nowrap;
    gap: 16px;

    input{
        padding: 6px 16px;
        font-size: 10pt;
        border-radius: 4px;
        border: ${props => props.errorMessage ? "1px solid #F46036" : "none"};
        outline: none;
        background-color: #FCF7FF;
    }

    &:after{
        content: ${(props) => `"${props.errorMessage ? 'error: '+props.errorMessage : ''}"`};
        color: #F46036;
        font-size: 9pt;
    }
`

export const InputTitle = styled.h1`
    display: block;
    font-size: 12pt;
    font-weight: 500;
    line-height: 14px;
`