const cipher = (salt) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);

  return (text) =>
    text.split("").map(textToChars).map(applySaltToChar).map(byteHex).join("");
};

const decipher = (salt) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);
  return (encoded) =>
    encoded
      .match(/.{1,2}/g)
      .map((hex) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode) => String.fromCharCode(charCode))
      .join("");
};

let token = "2a9f328a29b91ba894a3659d5ebc95b1beebef30";

const encrypt = cipher("R@G|-|@v"); // Salt = "R@G|-|@v"
let encrypted_token = encrypt(token);
console.log(encrypted_token); //7c2f77287d7c762f7c772c777f2c2f76777a2f7d787b772a7b2b2c2d777b2c7f2c2b2b2c2b287d7e

const decrypt = decipher("R@G|-|@v"); // Salt = "R@G|-|@v"
let decrypted_token = decrypt(encrypted_token); //7c2f77287d7c762f7c772c777f2c2f76777a2f7d787b772a7b2b2c2d777b2c7f2c2b2b2c2b287d7e
console.log(decrypted_token); //2a9f328a29b91ba894a3659d5ebc95b1beebef30

console.log(decrypted_token === token);
