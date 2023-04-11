import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const LocationCardContainer = styled.div`

`;

const LocationCard = ({ created, dimension, name, residents, type }) => {

    return(
        <LocationCardContainer>
            <h3>{name}</h3>
            <p>Type: {type}</p>
            <p>Created: {created}</p>
            <p>Dimension: {dimension}</p>
        </LocationCardContainer>
    )
}

export default LocationCard;