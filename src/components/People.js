import './people.css'
function People({data}){
    if(data.length==0){
        return(
            <div className='noMatch'>
                <p>no matched names</p>
            </div>
        )
    }
    return(
        <div className="people-comp">
            {data.map((person)=>{
                const {login,id,avatar_url,html_url}=person;
               return (
                <a href={html_url} target='_blank'key={id}>
                   <div  className='person'>
                     <img src={avatar_url}/>
                     <h2>{login}</h2>
                   </div>
                </a>
               )
            })}
        </div>
    )
}
export default People;