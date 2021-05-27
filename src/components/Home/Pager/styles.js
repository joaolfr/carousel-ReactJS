import styled from 'styled-components'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'

export const Wrapper = styled.div`
display:flex;
flex-direction:row;
margin-top:20px;
align-items:center;

` 
export const PagerWrapper = styled.div`
display:flex;
flex-direction:row;
margin:0 10px;
align-items:center;
`
export const PagerMark = styled.div`
width:${props => props.status ==='active' ? '20px' : '16px'};
height:${props => props.status ==='active' ? '20px' : '16px'};
border-radius:${props => props.status ==='active' ? '10px' : '8px'};
background:${props => props.status === 'next' ? 'gray' : '#000'};
margin:0 5px;
`

export const LeftArrow = styled(FaArrowLeft)`
height:30px;
width:30px;
cursor:pointer;
visibility:${props => props.disabled ? 'hidden' : 'visible'}
`
export const RightArrow = styled(FaArrowRight)`
height:30px;
width:30px;
cursor:pointer;
visibility:${props => props.disabled ? 'hidden' : 'visible'}

`