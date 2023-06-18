import styled from 'styled-components';

export const StyleConfig = styled.div``;

export const Content = styled.div``;

export const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;

    .tag-filter {
        background: none;
        font-size: 18px;
        font-weight: 700;
        color: ${props => props.theme.palette.white};
        margin: 0 15px;
        transition: opacity .3s;

        &:hover {
            opacity: .7;
        }
    }
    .tag-filter-recurrent::after {
            content: '';
            display: block;
            justify-content: center;
            width: 55px;
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.palette.warning} ;
        }
        .tag-filter-eventual::after {
            content: '';
            display: block;
            width: 55px;
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.palette.sucess} ;
        }
    
`;