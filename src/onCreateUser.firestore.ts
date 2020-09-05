import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { User } from './shared/models/user.model';

export const onCreateUser = functions.auth.user().onCreate(async user => {
  console.info('user email is : ', user.email);
  if (user.email === null) {
    return false;
  }

  const newUser: User = {
    name: user.displayName,
    email: user.email,
    balance: 0
  }

  try {
    await admin
      .firestore()
      .doc(`users/${user.uid}`)
      .set(newUser);
    console.info(`Created new user document for: ${user.email}`)
  }
  catch (error) {
    console.error(`Error: ${error}`);
  };
  
  return true;
});