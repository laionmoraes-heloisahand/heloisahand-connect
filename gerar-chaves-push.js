const crypto = require("crypto");

function base64Url(buffer) {
  return buffer
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

const ecdh = crypto.createECDH("prime256v1");
ecdh.generateKeys();

console.log("Copie estas variaveis para o Environment do Render:");
console.log(`VAPID_PUBLIC_KEY=${base64Url(ecdh.getPublicKey())}`);
console.log(`VAPID_PRIVATE_KEY=${base64Url(ecdh.getPrivateKey())}`);
console.log("VAPID_SUBJECT=mailto:institutoheloisahand@gmail.com");
