"users strict"

export function cartReducers(state={cart:[]}, action) {
  switch(action.type){
    case "ADD_TO_CART":
    return {cart:[...state, ...action.payload]}
  }

  return state;
}