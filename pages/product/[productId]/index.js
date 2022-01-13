import {useRouter} from 'next/router'
const Id = ()=>{
    const router = useRouter();
    const productId = router.query.productId;
    return(
        <h2>Product details {productId}</h2>
    )
}

export default Id;