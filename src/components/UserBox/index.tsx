import { UserContainer, UserMenuTitle } from "./styledComponents";
import {ReactComponent as DropdownIcon } from "../../images/arrow-dropdown.svg"

const UserBox: React.FC = () => {


    return(
        <UserContainer>
            <UserMenuTitle>
                <span className="title">Hello<span className="bolder"> Fadjar </span>!</span>
                <DropdownIcon />
            </UserMenuTitle>
        </UserContainer>
    )
}

export default UserBox;