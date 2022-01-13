import Link from 'next/link'
const Posts = ({posts})=>{
    return<>
        <h2>List of All post</h2>
        {
            posts?.map(post=>{
              return(  <div>

                    <Link href={`/posts/${post.id}`} passHref>
                        <p>{post.id} {post.title}</p>
                    </Link>
                    <hr/>
                </div>
              )
            })
        }
    
    
    </>
   
}

export default Posts

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data  =await res.json()

    return{
        props:{
            posts:data.slice(0,5)
        }
    }
}