import {UPD_SUB} from '../actions'

const newsub = (state='', action) => {  
  switch (action.type) {
    case UPD_SUB:
      return action.sub
      
    default: 
      return state
  }
}

export default newsub