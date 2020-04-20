const numState = {
    num : 0
}

const Increment = 'Increment';
const Decrement = 'Decrement';

export {Increment,Decrement}

export default ( state = numState , action = {}) =>{
    switch(action.type){
        case Increment:
            return Object.assign ( {} , state , { num : state.num + 1 })
        case Decrement: 
            return Object.assign ( {}, state , {} , { num : state.num -1  })
        default :
        console.log('default')
        return state;
    }
}