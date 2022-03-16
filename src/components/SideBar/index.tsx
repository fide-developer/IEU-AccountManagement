import { SBLogo, SBMenus, SideBarContainer } from "./styledComponents"
import { ReactComponent as ManageAccountIcons }from "../../images/manage-account.svg"

const SideBar: React.FC = () => {

    return(
        <SideBarContainer>
                <div>
                    <SBLogo>TC</SBLogo>
                </div>
                <SBMenus data-tooltip="Manage Account">
                    <ManageAccountIcons />
                </SBMenus>
        </SideBarContainer>
    )
} 

export default SideBar