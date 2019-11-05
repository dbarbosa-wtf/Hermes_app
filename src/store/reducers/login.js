const INITIAL_STATE ={
  email:null,
  senha:null,
  error:false
}

export default function login (state=INITIAL_STATE,action){
  switch(action.type){
    case'LOGIN_SUCCESS':
      return{...state,email:action.payload.email,senha:action.payload.senha,error:false}
    case 'LOGIN_FAILURE':
      return{...state,error:true};
    default:
      return state;
  }
}
