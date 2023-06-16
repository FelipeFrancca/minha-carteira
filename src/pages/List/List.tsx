import React from "react";
import { StyleConfig } from './StyleConfig';

import SelectInput from "../../assets/components/components/SlectInput/SelectInput";
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
            <ContentHeader title="List" lineColor="#ff0000">
                <SelectInput options={options}/>
            </ContentHeader>

        </StyleConfig>
    );
}

export default List;