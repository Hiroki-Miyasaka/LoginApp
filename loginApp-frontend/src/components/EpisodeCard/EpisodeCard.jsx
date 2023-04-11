import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const EpisodeCardContainer = styled.div`

`;

const EpisodeCard = ({ air_date, characters, created, name}) => {


    return (
        <EpisodeCardContainer>
            <h3>Episode: {name}</h3>
            <p>Air Date: {air_date}</p>
            <p>Created: {created}</p>
        </EpisodeCardContainer>
    )
}

export default EpisodeCard;