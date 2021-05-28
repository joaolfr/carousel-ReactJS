import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { sliderData, current, nextSlide, previousSlide, setData} from '../../redux/carousel/carouselSlice'
import {useLazyFetch} from '../../services/hooks'

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

    //data fetch
    const [searchImages, {loading, error}] = useLazyFetch({
        url:'/data',
        method:"GET"
    })

    //effect
     useEffect(() => {

        async function fetchAPI(){

        const data = await searchImages()
        console.log("data images: ", data[0].data)
        dispatch(setData(data[0].data))
        }

        fetchAPI()
    },[])

    useEffect(() => {
        if(currentPage === 0){setLeftDisabled(true)}else{setLeftDisabled(false)}
        if(currentPage === SliderData.length - 1){setRightDisabled(true)}else{setRightDisabled(false)}
    }, [currentPage])



    return{
        SliderData, currentPage, rightDisabled, leftDisabled, back, next, loading, error
    }
}