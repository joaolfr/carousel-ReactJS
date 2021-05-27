import React from 'react'
import {Wrapper, PagerWrapper, PagerMark, LeftArrow, RightArrow} from './styles'

const Pager = ({leftDisabled, rightDisabled, currentPage, back, next, SliderData }) => {

    return(
       <Wrapper>
           <LeftArrow disabled={leftDisabled} onClick={() => back()} />
           
           <PagerWrapper>
                {SliderData.map((page, index) => (
                <PagerMark key={index} status={currentPage === index ? 'active' : currentPage > index ? 'passed' : 'next'}/>
                ))}
            </PagerWrapper>
        
            <RightArrow disabled={rightDisabled} onClick={() => next()} />
       
        </Wrapper> 
    )
}

export default Pager