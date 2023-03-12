//*import

const initialState = {

}

interface Action {
    type: string,
    payload: any
}

const rootReducer = (state = initialState, action: Action)=>{
    const {type, payload} = action
    
    switch(type){
        default: return {
            ...state
        }
    }
}
export default rootReducer;