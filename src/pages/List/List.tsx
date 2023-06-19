import React, {useMemo} from "react";
import { StyleConfig, Content, Filters } from './StyleConfig';

import SelectInput from "../../assets/components/components/SlectInput/SelectInput";
import CardHistoryFinancene from "../../assets/components/components/CardHistoryFinance/CardHistoryFinance";
import ContentHeader from "../../assets/components/Tools/ContentHeader/contentHeader";

interface IRouteParams {
    type: string;
}

const List: React.FC<IRouteParams> = ({ type }) => {

    const title = useMemo(() => {
        return type === 'entry-moviment' ? 'Movimentações de Entradas' : 'Movimentações de Saídas'
    }, [type]);

    const mounths = [
        {value: 1, label: 'Janeiro'},
        {value: 2, label: 'Fevereiro'},
        {value: 3, label: 'Março'},
        {value: 4, label: 'Abril'},
        {value: 5, label: 'Maio'},
        {value: 6, label: 'Junho'},
        {value: 7, label: 'Julho'},
        {value: 8, label: 'Agosto'},
        {value: 9, label: 'Setembro'},
        {value: 10, label: 'Outubro'},
        {value: 11, label: 'Novembro'},
        {value: 12, label: 'Dezembro'},
    ]
    const yaers = [
        {value: 2020, label: '2020'},
        {value: 2021, label: '2021'},
        {value: 2022, label: '2022'},
        {value: 2023, label: '2023'},
        {value: 2024, label: '2024'},
        {value: 2025, label: '2025'},
        {value: 2026, label: '2026'},
        {value: 2027, label: '2027'},
        {value: 2028, label: '2028'},
        {value: 2029, label: '2029'},
        {value: 2030, label: '2030'},
    ]

    return (
        <StyleConfig>
            <ContentHeader title={title} lineColor="#ff0000">
                <SelectInput options={mounths}/>
                <SelectInput options={yaers}/>
            </ContentHeader>

            <Filters>
                <button type="button" className="tag-filter tag-filter-recurrent">
                    Recorrentes
                </button>
                <button type="button" className="tag-filter tag-filter-eventual">
                    Eventuais
                </button>
            </Filters>

            <Content>
                <CardHistoryFinancene tagColor="#B70404" title="Conta de Luz" subtitle="06/07/23" amount="R$: 750,00"/>
            </Content>
        </StyleConfig>
    );
}

export default List;