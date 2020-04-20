import React from 'react'
import { connect } from 'react-redux'
import {Increment,Decrement} from './../reducer'

const Show = (props) => {
    const {num} = props;

    const HIncrement = () => {
        props.dispatch({type : Increment})
    }
    const HDecrement = () => {
        props.dispatch({type : Decrement})
    }

    return (
        <div>
            <h1>{num}</h1>
            <div>
                <button type="button" onClick={HIncrement}>tambah</button>
                <button type="button" onClick={HDecrement}>kurang</button>
            </div>
        </div>
    )

}

const mapStateToProps = (state) =>{
    return{
        num : state.num
    }
} 

export default connect (mapStateToProps)(Show);