import React, { Children, useContext, useEffect, useState } from "react"
import { FormBody, FormContainer, FormTitle } from "./styledComponents"

const FormContext = React.createContext<{isError: boolean, setError: React.Dispatch<React.SetStateAction<boolean>>}>({
    isError: false,
    setError: () => {}
})

export const useForm = () => {return useContext(FormContext)}

const Form: React.FC = ({children}) => {
    const [isError, setIsError] = useState<boolean>(false)

    return(
        <FormContext.Provider value={{isError: isError,setError:setIsError}}>
            <FormContainer onSubmit={(e) => e.preventDefault()}>
                <FormTitle>Login</FormTitle>
                <FormBody>
                    {children}
                </FormBody>
            </FormContainer>
        </FormContext.Provider>
    )
}

export default Form