module.export = () => {
    const axios = require("axios");
    const params = new URLSearchParams();
    const getAssertionToken = (payload) => {
        return new Promise(async(resolve, reject) => {
            try {
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
                    assertionToken = response.data
                    params.append("company_id", company_id);
                    params.append("client_id", client_id);
                    params.append("grant_type", grant_type);
                    params.append("assertion", assertionToken)
                    axios({
                        method: "POST",
                        url: "https://api10.successfactors.com/oauth/token",
                        withCredentials: true,
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            "Access-Control-Allow-Methods": "POST",
                            "Access-Control-Allow-Origin": "*",
                            "Access-Control-Allow-Headers": "Content-Type"
                        },
                        data: params
                    }).then(response => {
                        console.log(response.data);
                        resolve(response)
                    });
                })
            } catch (error) {
                reject(error)
            }
        })
    };
    return {
        getAssertionToken,

    }
}