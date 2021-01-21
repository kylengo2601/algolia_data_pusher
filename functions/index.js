// Import all needed modules.
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const algoliasearch = require("algoliasearch");

// Set up Firestore.
admin.initializeApp();
const db = admin.firestore();
const collection = "collection";   // replace with collection's name


const ALGOLIA_INDEX_NAME = "index";  // replace with index name
const client = algoliasearch("app_id", "admin_key");  // replace with real app id and admin key
const collectionIndex = client.initIndex(ALGOLIA_INDEX_NAME);


exports.sendCollectionToAlgolia = functions.https.onRequest(async (req, res) => {
  const algoliaRecords = [];

  // Retrieve all documents from the collection.
  const querySnapshot = await db.collection(collection).get();

  querySnapshot.docs.forEach((doc) => {
    const document = doc.data();

    const record = {
      objectID: doc.id,
      name: document.name,
      address: document.address,
      district: document.district,
      city: document.city,
      postal_code: document.postal_code,
      position: document.position,
      phone_no: document.phone_no,
      bus_photo_url: document.bus_photo_url,
      categories: document.categories,
      avg_rating: document.avg_rating,
      review_count: document.review_count,
      hours: document.hours,
    };

    algoliaRecords.push(record);
  });

  // After all records are created, we save them to
  collectionIndex.saveObjects(algoliaRecords, (_error, content) => {
    res.status(200).send("Collection $collection was indexed to Algolia successfully.");
  });
});
