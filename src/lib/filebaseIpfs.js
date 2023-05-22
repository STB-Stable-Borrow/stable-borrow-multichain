import { json } from "react-router-dom";

require("dotenv").config();
const {
  REACT_APP_MY_ENV_VARIABLE_FILEBASE_ACCESS_KEY_ID,
  REACT_APP_MY_SERVER_VARIABLE_FILEBASE_SECRET_ACCESS_KEY,
} = process.env;
const AWS = require("aws-sdk");
const filebase = new AWS.S3({
  endpoint: "https://s3.filebase.com",
  signatureVersion: "v4",
  accessKeyId: REACT_APP_MY_ENV_VARIABLE_FILEBASE_ACCESS_KEY_ID,
  secretAccessKey: REACT_APP_MY_SERVER_VARIABLE_FILEBASE_SECRET_ACCESS_KEY,
});

const saveTokenDetails = (tokenId, username, about, imgUrl, account) => {
  let snft_storage;
  const data = JSON.stringify({
    id: tokenId,
    name: username,
    description: about,
    image: imgUrl,
  });
  snft_storage = {
    Bucket: "snft-stable-details",
    Key: `snft-stable-details-for-${account}`,
    Body: data,
    ContentType: "snft",
    Metadata: {
      owner: `${username}`,
    },
  };
  console.log("Token details ", snft_storage);
  const res = filebase.putObject(snft_storage, (err, data) => {
    if (err) {
      console.log("Error! to upload nft details", err.stack);
      window.alert("Error while uploading nft details. Try again later");
    } else {
      console.log("nft details uploaded successfully ", data);
      //TODO: Toast saying profile details pinned to ipfs successfully
    }
  });
  return res;
};

const getTokenDetails = (account) => {
  const params = {
    Key: `snft-stable-details-for-${account}`,
    Bucket: "snft-stable-details",
  };
  return filebase.getObject(params, (err, data) => {
    if (err) {
      console.error("token details does not exist: ", err.stack);
    } else {
      const tokenDetails = Buffer.from(data.Body, "utf8").toString();
      //   const profileFormatted = tokenDetails.replaceAll("\n", " ");
      //   const json = JSON.parse(profileFormatted);
      //   const haunterProfile = {
      //     creationDate: json[0],
      //     tokenId: json[1],
      //     username: json[2],
      //     about: json[3],
      //     imgUrl: json[4],
      //   };
      //   console.log("haunter profile: ", haunterProfile);
      //   state.setHaunterProfile(haunterProfile);
      //   return haunterProfile;
    }
  });
};

export { saveTokenDetails, getTokenDetails };
