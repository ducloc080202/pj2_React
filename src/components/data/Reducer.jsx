const initState={
    time: 0,
    state: false,
    pressure: 0,
    pushCount: 0,
    fullData:[]
}
function Reducer(state,action){
    switch(action.type){
        case 'change':
            return {
                ...action.payload.single,
                fullData:action.payload.fullData
            }
    }
}
export {initState} 
export default Reducer