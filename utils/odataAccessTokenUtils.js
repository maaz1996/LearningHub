const axios = require("axios");

const accessToken = (clientId, userId, tokenUrl, privateKey, url) => {
  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("user_id", userId);
  params.append("token_url", tokenUrl);
  params.append("private_key", privateKey);
  axios({
    method: "POST",
    url: url,
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type"
    },
    data: params
  }).then(response => {
    return response;
  });
};

module.exports = accessToken;
