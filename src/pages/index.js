import React from 'react'
import { useHistory } from 'react-router-dom'

const Home =()=>{
    const history = useHistory()
    history.push('/signin')
    return(
        <div>
            <h1>
                Hello
            </h1>
        </div>
    )
}
export default Home