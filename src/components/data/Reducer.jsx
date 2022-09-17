const initState={
    time: 0,
    state: false,
    pressure: 0,
    pushCount: 0
}
function Reducer(state,action){
    switch(action.type){
        case 'change':
            return action.payload
    }
}
export {initState} 
export default Reducer