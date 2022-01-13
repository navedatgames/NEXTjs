import {useRouter} from "next/router"
const docs = ()=>{
    const router = useRouter()
    const { params = [] } = router.query;
    console.log(params)
    if(params.length===2){
        return(
            <h2>Document of {params[0]} and {params[1]}</h2>
        )
    }
    else{
        return(
            <h2>No document found</h2>
        )
    }
}
export default docs