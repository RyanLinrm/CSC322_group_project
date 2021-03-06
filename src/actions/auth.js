import {database,firebase, googleAuthProvider} from '../firebase/firebase';
import axios from 'axios';

export const login = (
    {
      address = "",
      phone_number = "",
      user_type = "", 
      userID="",
      status="",
      username="",
      password="",
      credit_card=""
    } = {}
  ) => {
    return ({
      type: 'LOGIN',
      userData:{
      address,
      phone_number,
      user_type,
      userID,
      status,
      username,
      password,
      credit_card
    }
  })};


export const logout = ({userID,status}={}) => {
  let isDelete =  status == "delete";
  if(status == "delete"){
    axios.post('/delete', {
      userID:userID
    })
    .then( (response)=> {
      console.log("delete successfully");
      return({type: 'LOGOUT'});
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  return({type: 'LOGOUT'})
}
  


export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export const editProfile = (updates) => ({
  type: 'EDIT_PROFILE',
  userData:{
    ...updates
  }
});

export const startEditProfile = (updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.userID;
    return database.ref(`users/${uid}`).update(updates).then(() => {
      dispatch(editProfile(updates));
    });
  };
};