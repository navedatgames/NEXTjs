const News = ({topics}) =>{
    return <>
    <h2>This is all best news</h2>
    {
        topics.map(a=>{
            return(
                <div>
                    <h3>{a.title} | {a.category}</h3>
                </div>
            )
        })
    }
        </>
}
export default News

export async function getServerSideProps(){
    const res = await fetch('http://localhost:4000/news')
    const data = await res.json()

    return{
        props:{
            topics:data
        }
    }
}