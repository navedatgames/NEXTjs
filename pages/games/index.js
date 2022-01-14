import Link  from "next/link"
const Games = ({gaming})=>{
    
    return<>
        <h2>List of best games</h2>
        <span className="btn-types">
            <Link href = '/games/FPS'>
                <button >FPS</button>
            </Link>
            <Link href = '/games/multiplayer'>
                <button >Multiplayer</button>
            </Link>
            <Link href = '/games/action'>
                <button >action</button>
            </Link>
            <Link href = '/games/fighting'>
                <button >fighting</button>
            </Link>
        </span>
        {
            gaming.map(a=>{
                return(
                    <>
                    <h2>{a.title} | {a.release}</h2>
                    <p>{a.category}</p>
                    <hr/>
                    </>
                )
            })
        }
        </>
}
export default Games

export async function getServerSideProps(){
    const res = await fetch('http://localhost:4000/games')
    const data = await res.json()

    return{
        props:{
            gaming:data
        }
    }
}