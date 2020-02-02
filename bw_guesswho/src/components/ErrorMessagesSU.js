import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    margin-bottom: -2%;
    width: 100%;
    color: white;
    text-align: left;
    font-family: 'Roboto', sans-serif;
`
const StyledP = styled.p`
    margin: 0;
`

export default function ErrorMessagesSU(props) {
    return (
        <>
         {(props.errors.name !== undefined && props.errors.email !== undefined && props.errors.password !== undefined && props.errors.passwordConfirm !== undefined) &&(
             <>
                <StyledP><Label>{Object.values(props.errors.name)[0]}</Label></StyledP>
                <StyledP><Label>{Object.values(props.errors.email)[0]}</Label></StyledP>
                <StyledP><Label>{Object.values(props.errors.password)[0]}</Label></StyledP>
                <StyledP><Label>{Object.values(props.errors.passwordConfirm)[0]}</Label></StyledP>
             </>
         ) ||
         (props.errors.password !== undefined && props.errors.passwordConfirm !== undefined) &&(
             <>
                <StyledP><Label>{Object.values(props.errors.password)[0]}</Label></StyledP>
                <StyledP><Label>{Object.values(props.errors.passwordConfirm)[0]}</Label></StyledP>
             </>
         )}
        </>
    )
}