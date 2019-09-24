
module.exports = () => {
   const { getDataFromMaster,getDataFromPersonal,getDataFromPersonalStatus }=require("../models/user/action");
    const user= payload => {
        return new Promise(async(resolve, reject) => {
            try {
                getDataFromMaster('masterdata', { user_id: parseInt(payload.userid)}, (err, response) => {
                  
                    if (response) 
                    { 
                        resolve(response);
                    }
                    else if (err) {
                        reject({
                            message: "User doesn't exist",
                            status: 400
                        });
                    }
                })
                

            // const response = await Masterdata.findOne({ user_id: payload.userid});
            
            } catch (error) {
                reject(error);
            }
        });
    };
    const userDocument= payload => {
        return new Promise(async(resolve, reject) => {
            try {
                
                getDataFromPersonal('personalinformation', { userId: parseInt(payload.userid)}, (err, response) => {
                  
                    if (response) 
                    { 
                        resolve(response);
                    }
                    else if (err) {
                        reject({
                            message: "User doesn't exist",
                            status: 400
                        });
                    }
                })
            // const response = await Masterdata.findOne({ user_id: payload.userid});
            
            } catch (error) {
                reject(error);
            }
        });
    };
    const userStatus= payload => {
        return new Promise(async(resolve, reject) => {
            try {
                
                getDataFromPersonalStatus('personalinformation', { userId: parseInt(payload.userid)}, (err, response) => {
                  
                    if (response) 
                    { 
                        resolve(response);
                    }
                    else if (err) {
                        reject({
                            message: "User doesn't exist",
                            status: 400
                        });
                    }
                })
            // const response = await Masterdata.findOne({ user_id: payload.userid});
            
            } catch (error) {
                reject(error);
            }
        });
    };
    
    return {
        user,
        userDocument,
        userStatus
    };
};