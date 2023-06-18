import React from 'react';

import { CardContainer, Tag } from './StyleConfig';

interface ICardContainerHistoryFinanceProps {
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

const CardContainerHistoryFinance: React.FC<ICardContainerHistoryFinanceProps> = ({
    tagColor,
    title,
    subtitle,
    amount }) => {

    return (
      <CardContainer>
        <Tag color={tagColor}/>
        <div>
            <span>{title}</span>
            <small>{subtitle}</small>
        </div>
        <h3>{amount}</h3>

      </CardContainer>
    );

  }
  
export default CardContainerHistoryFinance;