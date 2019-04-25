import React from 'react';
import {connect} from 'react-redux';
import RegisterForm from '../components/RegisterForm';
import {startEditProfile} from '../actions/userProfile';

//retrieve data from firebase
const EditProfilePage = (props) => {
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit your Profile</h1>
        </div>
      </div> 
      <div className="content-container">
        <RegisterForm
          onSubmit={ (auth) => {
            console.log('reaches before startEditProfile');
            props.startEditProfile(auth)
            props.history.push('/profile');
          }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditProfile: (id, profile) => dispatch(startEditProfile(id, profile))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage);