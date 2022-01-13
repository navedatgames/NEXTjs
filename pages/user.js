import User from '../components/user'
const Users = ({users})=>{
    return <>
       <h2>List of user present</h2>
       {
           users.map(user=>{
               return(
               <div>
                  <User user = {user}/>

               </div>
               )
           })
       }
       </>
        
    
}
export default Users
//static generation with getStaticProps()
export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

   
    return{
        props:{
            users:data
            
        }
    }

    

}