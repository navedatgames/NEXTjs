const Category = ({games,category})=>{
    return<>
        <h2>{category}</h2>
        {
            games.map(ar=>{
                return(
                    <>
                    <h3>{ar.title} | {ar.release}</h3>
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
    const res = await fetch(`http://localhost:4000/games?category=${category}`)
    const data = await res.json()

    return{
        props:{
            games:data,
            category
        }
    }

}