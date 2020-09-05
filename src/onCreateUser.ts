

import * as functions from 'firebase-functions';
import { database } from 'firebase-admin';
import { User } from './shared/models/user.model';

export const onCreateUser = functions.auth.user().onCreate(user => {
  console.info('user email is : ', user.email);
  if (user.email === null) {
    return false;
  }

  const newUser: User = {
    name: user.displayName,
    email: user.email
  }

  const refAccounts = database().ref(`users/${user.uid}`);

  refAccounts
    .update(newUser)
    .then(() => console.info(`Created new user Account for: ${user.email}`))
    .catch(error => console.error(`Error: ${error}`));

  return true;
});
