import MainLogo from './logo-teachcast.png'
import { LogoContainer } from './styledComponent'

const Logo: React.FC = () => {

    return(
        <LogoContainer>
            <img src={MainLogo} alt="TC"/>
        </LogoContainer>
    )
}

export default Logo