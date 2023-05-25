import React, {useMemo} from "react";
import emojis from "../../../../utils/emojis";
import {
    Container,
    Profile,
    Welcome,
    UserName
} from "./StyleConfig"; 
import ThemeSwitch from "../../components/themeSwitch";

const Mainheader: React.FC = () => {
    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
          return emojis[indice];
      },[]);

    return (
        <Container>
            <ThemeSwitch/>
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Felipe França</UserName>
            </Profile>
        </Container>
    )
}

export default Mainheader;