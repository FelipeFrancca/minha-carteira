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

import {
    Widgets,
    KeyboardArrowUp,
    KeyboardArrowDown,
    Logout
} from '@mui/icons-material/';

const Aside: React.FC = () => {
    return (
        <StyleConfig>
            <Header>
                <LogoImg src={Logo} alt="Logo minha carteira" />
                <Title>Minha Carteira</Title>
            </Header>

            <Menu>
                <MenuItemLink href="/dashboard">
                    <Widgets/>
                        Dashboard
                </MenuItemLink>
                <MenuItemLink href="/entry-moviment">
                    <KeyboardArrowUp/>
                        Movimentações de Entradas
                </MenuItemLink>
                <MenuItemLink href="/exit-moviment">
                    <KeyboardArrowDown/>
                        Movimentações de Saídas
                </MenuItemLink>
                <MenuItemLink href="#">
                    <Logout/>
                        Sair
                </MenuItemLink>
            </Menu>
        </StyleConfig>
    )
}

export default Aside;