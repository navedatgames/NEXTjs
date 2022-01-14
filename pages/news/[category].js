const Category = ({articles,category})=>{
    return<>
        <h2>{category}</h2>
        {
            articles.map(ar=>{
                return(
                    <>
                    <h3>{ar.title} | {ar.category}</h3>
                    <hr/>
                    </>
                )
            })
        }
    </>
}
export default Category

export async function getServerSideProps(value){
    const { params} = value;
    const {category} = params;
    const res = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await res.json()

    return{
        props:{
            articles:data,
            category
        }
    }

}