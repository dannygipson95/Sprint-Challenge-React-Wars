// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    width: 40%;
    margin: 5% 0;
    padding: 1%;
    border: 2px solid black;
    border-radius: 5px;
    background: #44CC14;

    img {
        width:50%;
        border: 2px solid #80D91E;
        border-radius: 10px;
    }

    `
const CenteredDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
`

export default function Character(props) {
    const {name, species, status, image} = props;

    return (
        <StyledDiv>
            <img src={image} alt={name}/>
            <CenteredDiv>
                <h2>{name}</h2>
                <h4>Species: {species}</h4>
                <h4>Status: {status}</h4>
            </CenteredDiv>
        </StyledDiv>
    )
}