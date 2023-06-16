import React from "react";

import {
    ContainerHeader,
    TitleContainer,
    Controllers
} from './StyleConfig';

interface IContentHeader {
    title: string;
    lineColor: string;
    children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeader> = ({ title, lineColor, children }) => {

    return (
        <ContainerHeader>
            <TitleContainer lineColor={lineColor}>
                <h1>{title}</h1>
            </TitleContainer>
            <Controllers>
                {children}
            </Controllers>
        </ContainerHeader>
    )
}

export default ContentHeader;