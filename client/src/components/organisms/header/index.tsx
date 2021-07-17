import { Container } from '../../atoms/container'
import { Logo } from '../../atoms/logo'
import { Search } from '../../molecules/search'
import { HeaderLink } from '../headerLink'
import './styles.scss'


export function Header(){
    return(
        <>
            <div className="trace"></div>

            <Container background="#63308f" padding={45}>

                <div className="header">

                    <div className="left">
                        <Logo />
                    </div>

                    <div className="right">
                        <HeaderLink />
                        <Search />
                    </div>

                </div>

            </Container>
        </>
    )
}