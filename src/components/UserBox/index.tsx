import { UserContainer, UserMenu, UserMenuDrowdown, UserMenuTitle } from "./styledComponents";
import {ReactComponent as DropdownIcon } from "../../images/arrow-dropdown.svg"
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { logout } from "../../features/Auth/authSlice";

const UserBox: React.FC = () => {
    const [userOption, setUserOption] = useState<boolean>(false)
    const dispatch = useAppDispatch()    

    return(
        <UserContainer onMouseLeave={() => setUserOption(false)}>
            <UserMenuTitle onClick={() => setUserOption(!userOption)}>
                <span className="title">Hello<span className="bolder"> Fadjar </span>!</span>
                <DropdownIcon />
            </UserMenuTitle>
            
            <UserMenuDrowdown active={userOption} onClick={()=> setUserOption(false)}>
                <UserMenu>Profile</UserMenu>
                <UserMenu>User Setting</UserMenu>
                <UserMenu onClick={() => dispatch(logout())}>Logout</UserMenu>
            </UserMenuDrowdown>
        
        </UserContainer>
    )
}

export default UserBox;