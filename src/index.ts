import * as functions from 'firebase-functions';
import { initializeApp } from 'firebase-admin';

import { onCreateUser } from './onCreateUser.firestore'
import { onCreateUserDocument } from './onCreateArticleDocument.firestore'

initializeApp(functions.config().firebase);

exports.onCreateUser = onCreateUser
exports.onCreateUserDocument = onCreateUserDocument
