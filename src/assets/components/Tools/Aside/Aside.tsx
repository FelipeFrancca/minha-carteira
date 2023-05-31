import React from "react";
import Logo from "../../../img/logo.png";
import {
    StyleConfig,
    Header,
    LogoImg,
    Title,
    Menu,
    MenuItemLink
} from "./StyleConfig"; 

const Aside: React.FC = () => {
    return (
        <StyleConfig>
            <Header>
                <LogoImg src={Logo} alt="Logo minha carteira" />
                <Title>Minha Carteira</Title>
            </Header>

            <Menu>
                <MenuItemLink href="#">
                    Dashboard
                </MenuItemLink>
            </Menu>
        </StyleConfig>
    )
}

export default Aside;