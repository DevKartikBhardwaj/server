const admin = require("firebase-admin");
require("dotenv").config();

const credentials = {
  type: process.env.TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATEKEYID,
  private_key: process.env.PRIVATEKEY,
  client_email: process.env.CLIENTEMAIL,
  client_id: process.env.CLIENTID,
  auth_uri: process.env.AUTHURI,
  token_uri: process.env.TOKENURI,
  auth_provider_x509_cert_url: process.env.AUTHCERTURL,
  client_x509_cert_url: process.env.CLIENTCERTURL,
  universe_domain: process.env.UNIVERSEDOMAIN,
};

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

module.exports = admin.firestore();
