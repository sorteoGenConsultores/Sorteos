import React from 'react';
import { useAuth } from '../../context/AuthContext';

function RegisterWSocial(props) {
   const {
      loginWithGoogle
   } = useAuth()

   return (<button className="google-btn">
      <div className="google-icon-wrapper" onClick={() => { console.log('meloge'); loginWithGoogle() }}>
         <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt='google logo' />
      </div>
      <p className="btn-text"><b>Sign in with google</b></p>
   </button>
   );
}

export default RegisterWSocial;