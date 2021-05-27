import React from 'react'
import {Wrapper, Title} from './styles'
import { Link } from "react-router-dom";


const Detail = () => {
    
    return(
        <Wrapper>
            <Title>
                Detail
            </Title>
            <Link to="/">
            go to home
            </Link>
        </Wrapper>
    )
}

export default Detail