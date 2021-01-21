# algolia_data_pusher
Implementation of Google Cloud Functions to push data from Firebase Firestore into Algolia indices

This function will only be used once right before running a sync function between Algolia and Firestore

Run using this command: firebase deploy --only functions:sendCollectionToAlgolia
