import * as functions from 'firebase-functions';

export const onCreateUserDocument = functions.firestore
  .document(`articles/{articleId}`)
  .onCreate(async (snap, _context) => {
    const id: string = snap.data().id;
    const title: string = snap.data().title;

    try {
      // TODO: add code to send notification to all users
      console.info(`New article notification sent for: ${id} - ${title}`)
    }
    catch (error) {
      console.error(`Error: ${error}`);
    };
    
    return true;
});