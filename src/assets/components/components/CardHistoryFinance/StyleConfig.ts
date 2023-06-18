import styled from "styled-components";


interface ITagProps {
    color: string;
}

export const CardContainer = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.palette.tertiary};
    list-style: none;
    border-radius: 5px;
    margin: 10px 0;
    padding: 12px 10px;
    cursor: pointer;
    transition: all .3s;
    position: relative;

    &:hover {
        opacity: 0.7;
        transform: translateX(5px);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
    }

    > div span {
        font-weight: 700;
    }
`;

export const Tag = styled.div<ITagProps>`
    width: 10px;
    height: 60%;
    border-radius: 3px;
    position: absolute;
    background-color: ${props => props.color};
    left: 0;
`;