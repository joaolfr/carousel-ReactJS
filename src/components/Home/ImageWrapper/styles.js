import styled from 'styled-components'

export const Wrapper = styled.div`
display:flex;
flex-direction:row;
${props => props.active ? (
    'opacity:1; transition:1s; transform:scale(1.08);  '
) : (
    'opacity:0; transition:1s; transform:translateY(-100%) '
)}
overflow:auto;
`

export const Image = styled.img`
    border-radius:10px;
    height:40vh;
    width:20vw;
    margin:0 15px;
`