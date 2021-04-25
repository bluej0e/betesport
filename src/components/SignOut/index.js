import React from 'react';
import { withFirebase } from '../Firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
library.add( faSignOutAlt )

const SignOutButton = ({ firebase }) => (
<div onClick={firebase.doSignOut}>
    Log out <FontAwesomeIcon icon={['fas', 'sign-out-alt']}  />
</div>
);

export default withFirebase(SignOutButton);
