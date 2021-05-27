import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { sliderData, current, nextSlide, previousSlide} from '../../redux/carousel/carouselSlice'

export default () => {

    //redux
    const dispatch = useDispatch()
    const SliderData = useSelector(sliderData)
    const currentPage = useSelector(current)
    //state
    const [rightDisabled, setRightDisabled] = useState(false)
    const [leftDisabled, setLeftDisabled] = useState(true)
    //functions
    const back = () => {
         dispatch(previousSlide())
    }
    
    const next = () => {
         dispatch(nextSlide())     
    }
    //effect
    useEffect(() => {
        if(currentPage === 0){setLeftDisabled(true)}else{setLeftDisabled(false)}
        if(currentPage === SliderData.length - 1){setRightDisabled(true)}else{setRightDisabled(false)}
    }, [currentPage])



    return{
        SliderData, currentPage, rightDisabled, leftDisabled, back, next
    }
}