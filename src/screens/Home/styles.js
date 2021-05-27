import styled from 'styled-components'

export const Wrapper = styled.div`
height:100%;
width:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
` 
export const ImagesWrapper = styled.div`
display:flex;
flex-direction:row;
${props => props.active ? (
    'opacity:1; transition:1s; transform:scale(1.08)'
) : (
    'opacity:0; transition:1s'
)}

`
