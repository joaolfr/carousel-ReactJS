import React from 'react'
import { Wrapper, Image} from './styles'

const ImagesWrapper = ({index, currentPage, block, }) => {

    return(
       <Wrapper  active={currentPage === index}>
            {currentPage === index && (
                block.images.map((item, index) => (
                    <Image   src={item} alt="spider" key={index}/>
                    ))
            )}
       </Wrapper>
    )
}

export default ImagesWrapper