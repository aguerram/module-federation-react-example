import React from "react"
import "./Header.css"
export default ({name,style})=>{

    const [data,setData] = React.useState([])

    React.useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(setData)
    },[])


    
    return <fieldset style={style} >
        <caption>{name}</caption>

        <p>Hot reload</p>
        {
            data.length > 0?<ul>
                {
                    data.map(e=>(
                        <li key={e.id}>{e.title}</li>
                    ))
                }
            </ul>:<p>Loading...</p>
        }
    </fieldset>

    
}