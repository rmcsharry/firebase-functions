import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { UserPreferences } from './shared/models/user-preferences.model';

export const onCreateUserDocument = functions.firestore
  .document(`users/{newUserId}`)
  .onCreate(async (snap, _context) => {
    const id: string = snap.data().id;
    const email: string = snap.data().email;

    const prefs: UserPreferences = {
      language: 'en',
      theme: 'dark'
    };

    try {
      await admin
        .firestore()
        .doc(`users/${id}/preferences`)
        .set(prefs);
      console.info(`Created new user preferences for: ${email}`)
    }
    catch (error) {
      console.error(`Error: ${error}`);
    };
    
    return true;
});