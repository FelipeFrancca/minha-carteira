import React from "react";
import { StyleConfig, Content } from './StyleConfig';

import SelectInput from "../../assets/components/components/SlectInput/SelectInput";
import CardHistoryFinancener from "../../assets/components/components/CardHistoryFinance/CardHistoryFinance";
import ContentHeader from "../../assets/components/Tools/ContentHeader/contentHeader";

const List: React.FC = () => {

    const options = [
        {value: 'Janeiro', label: 'Janeiro'},
        {value: 'Fevereiro', label: 'Fevereiro'},
        {value: 'Março', label: 'Março'},
        {value: 'Abril', label: 'Abril'},
    ]

    return (
        <StyleConfig>
            <ContentHeader title="Movimentações de Saídas" lineColor="#ff0000">
                <SelectInput options={options}/>
            </ContentHeader>

            <Content>
                <CardHistoryFinancener cardColor="#526D82" tagColor="#B70404" title="Conta de Luz" subtitle="06/07/23" amount="R$: 750,00"/>
                <CardHistoryFinancener cardColor="#526D82" tagColor="#B70404" title="Visita a Fortaleza" subtitle="06/07/23" amount="R$: 650,00"/>
                <CardHistoryFinancener cardColor="#526D82" tagColor="#B70404" title="Conta de Água" subtitle="06/07/23" amount="R$: 550,00"/>
                <CardHistoryFinancener cardColor="#526D82" tagColor="#B70404" title="Lanche da tarde" subtitle="06/07/23" amount="R$: 450,00"/>
                <CardHistoryFinancener cardColor="#526D82" tagColor="#B70404" title="Estudos" subtitle="06/07/23" amount="R$: 350,00"/>
                <CardHistoryFinancener cardColor="#526D82" tagColor="#B70404" title="Saúde" subtitle="06/07/23" amount="R$: 250,00"/>
                <CardHistoryFinancener cardColor="#526D82" tagColor="#B70404" title="Lanches" subtitle="06/07/23" amount="R$: 150,00"/>
                <CardHistoryFinancener cardColor="#526D82" tagColor="#B70404" title="Barbearia" subtitle="06/07/23" amount="R$: 50,00"/>

            </Content>
        </StyleConfig>
    );
}

export default List;