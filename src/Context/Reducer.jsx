

export const reducer = (state,action)=>{
    switch(action.type){
        case 'SET_CITY':
            return  {
                ...state,city:action.selectedCity
            }
        case 'SET_CURRENT':
            return{
                ...state,current:action.payload
            }
        case 'SET_DAILY':
            return{
                ...state,daily:action.daily
            }
        default:{
            return state;
        }
    }
}