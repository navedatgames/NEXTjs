import Link from 'next/link'
import {useRouter} from 'next/router'
let Home = ()=>{
    const router = useRouter();
    function submitHandler(){
        router.push('/posts')
    }
    function newssubmitHandler(){
        router.push('/news')
    }
    return(
        <div>
            <h1>Home Page</h1>
            <Link href = '/user'>
            <a>Go to user</a>
            </Link>
            <br/>
            <Link href = '/product'>
            <a>Go to product</a>
            </Link>
            <br/>
            <button onClick={submitHandler}>
                View Post
            </button>
            <hr/>
            <button onClick={newssubmitHandler}>
                View News
            </button>

        </div>
        
    )
}

export default Home