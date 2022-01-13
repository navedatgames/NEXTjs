import Link from "next/link"
const product  = ({productId = 100})=>{
    return(
        <>
        <Link href = '/product/1'>
        <a>Product 1</a>
        </Link>
        <br/>
        <Link href = '/product/2'>
        <a>Product 2</a>
        </Link>
        <Link href = '/product/3'>
        <a>Product 3</a>
        </Link>
        <br/>
        <Link href = {`/product/${productId}`}>
        <a>Product {productId}</a>
        </Link>
        
        
        </>
    )
}
export default product