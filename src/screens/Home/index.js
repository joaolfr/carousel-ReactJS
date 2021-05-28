import React from 'react'
import {Wrapper} from './styles'
import {ImagesWrapper, Pager} from '../../components/Home'
import useHome from './hooks'

const Home = () => {

    const {SliderData, currentPage, rightDisabled, leftDisabled, back, next, loading} = useHome()
  
    return(
        <Wrapper>
         {loading && <span>Loading Images...</span>}
         {!loading && (
             <>
         {SliderData.map((block, index) => (

             <ImagesWrapper key={index} currentPage={currentPage} index={index} block={block} />
           
          ) )}

            <Pager leftDisabled={leftDisabled} rightDisabled={rightDisabled} currentPage={currentPage} back={back} next={next} SliderData={SliderData}/>
            </>
         )}

        </Wrapper>
    )
}

export default Home