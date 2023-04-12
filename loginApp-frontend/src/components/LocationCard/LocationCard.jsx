import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const LocationCardContainer = styled.div`
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

const LocationCard = ({ created, dimension, name, residents, type }) => {

    // const navigate = useNavigate();

    return(
        <LocationCardContainer>
            <h3>{name}</h3>
            <p>Type: {type}</p>
            <p>Created: {created}</p>
            <p>Dimension: {dimension}</p>
            <button>Residents</button>
        </LocationCardContainer>
    )
}

export default LocationCard;