import { useEffect, useState } from "react"
import { useForm } from ".."
import { InputGroup, InputTitle } from "./styledComponent"

export type inputStrict = {
    value: string,
    onChange: any,
    type?: string,
    title?: string,
    placeholder?: string 
}

const StrictInput: React.FC<inputStrict> = ({value, onChange, type = "text", title, placeholder}) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>() 
    const formValidate = useForm()

    //re validate error message 
    useEffect(()=>{
        if(!formValidate.isError) return

        if(value === "") return setErrorMessage("data can't be empty!")
    },[formValidate])

    //function for email validation
    const checkEmail = (input: string) => {
        let separateDomain = input.split('@')

        if(separateDomain.length === 1 || separateDomain.length > 2) {
            setErrorMessage("invalid email format!")
            return formValidate.setError(true)
        }

        let domainFormat = separateDomain[1].split('.')

        if(domainFormat.length === 1){
            setErrorMessage("invalid email format!")
            return formValidate.setError(true)
        } 

    }

    const validateInput = (input: string) => {
        switch(type){
            case "email": return checkEmail(input)

        }
    }

    //update value state and reset the error message whenever the user typing
    const changeValue = (value: string) => {
        //reset error state
        formValidate.setError(false)
        setErrorMessage(undefined)
        
        //update value
        onChange(value)
    }
    //prevent user enter space before text
    const preventSpaceFirst = (event : React.KeyboardEvent<HTMLInputElement>) => {
        let splits: string[] = value.split('')

        if(splits.length===0 && event.code === "Space") event.preventDefault()

        if(type === "email" && event.code === "Space") event.preventDefault() 
    }
    return(
        <InputGroup errorMessage={errorMessage}>
            {title && <InputTitle>{title}</InputTitle>}
            <input value={value} 
                type={type}
                placeholder={placeholder ? placeholder : ""}
                // listener
                onChange={(e) => {changeValue(e.target.value)}} 
                onKeyPress={(e)=>{preventSpaceFirst(e)}}
                onBlur={(e)=>validateInput(e.target.value)}
            />
        </InputGroup>
    )
}

export default StrictInput