import React , {useEffect,useState} from 'react'

export default (props) => {
    
    const [num , setnum] = useState(0)

    const Increment = () => {
        setnum(num + 1);
    }
    const Decrement = () => {
        setnum(num - 1);
    }

    useEffect(() =>{
        console.log(num)
    }, [num])

    return (
        <div>
            <h1>{num}</h1>
            <div>
                <button type="button" onClick={()=>Increment()}>tambah</button>
                <button type="button" onClick={()=>Decrement()}>kurang</button>
            </div>
        </div>
    )
} 