import styled from "styled-components";

export const Over=styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 8px;
    width: 100px;
    height: 150px;
    padding: 0;
`

export const CardContainer = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 6px;
    flex-wrap: wrap;
    justify-content: flex-start;

    &:hover ${Over} {
        opacity: 1;
    }
`;

export const Poster = styled.img`
    width: 100px;
    height: 150px;
    border-radius: 8px;
`;

export const Title = styled.div`
    margin-top: 8px;
    font-size: 12px;
    font-weight: bold;
    text-align: left;
    color: #fff;
`;

export const Date = styled.div`
    font-size: 10px;
    text-align: left;
    color: white;
`
