import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const EpisodeCardContainer = styled.div`
    border: solid #ffffff 1px;
    border-radius: 5px;
    h3 {
        margin: 1rem 0;
    }
    p {
        margin: 0.2rem 0;
    }
    button {
        border:none;
        padding: 10px 12px;
        border-radius: 8px;
        background: #ffffff;
        cursor: pointer;
        margin: 1rem 0;
    }
`;

const EpisodeCard = ({ air_date, characters, created, name}) => {


    return (
        <EpisodeCardContainer>
            <h3>Episode: {name}</h3>
            <p>Air Date: {air_date}</p>
            <p>Created: {created}</p>
            <button>Appeared Characters</button>
        </EpisodeCardContainer>
    )
}

export default EpisodeCard;