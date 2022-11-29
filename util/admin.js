
var admin = require("firebase-admin");

var serviceAccount = require("../shop-rest-ba556-firebase-adminsdk-1pcwa-362b04439a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://shop-rest-ba556-default-rtdb.europe-west1.firebasedatabase.app"
});
const db = admin.firestore();
module.exports = { admin, db };