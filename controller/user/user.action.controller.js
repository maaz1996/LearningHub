
module.exports =()=> {
    const userServices=require('../../services/user.services')();
    // personal user function
const user=async (req, res, next) => {
      try {
        const payload = req.params
        const  response = await userServices.user(payload);
        res.status(200).send({
            status: 200,
            message: { "response": response,
             "result": "IMPLEMENTED " }
        });
    } catch (error) {
        next(error);
    }
    }
    const userDocument=async(req,res,next)=>{
        try{
            const payload=req.params
            const response=await userServices.userDocument(payload);
            if (response && response.length == 0) {
                res.status(200).send({
                  status: 400,
                  message: {
                    "result": "User doesn't exist"
                  }
                });
              }
            else{

            res.status(200).send({
                status:200,
                message:{
                    "response":response,             
                    // "Fnf Status": response[0].fnfStatus,
                    // "Form16 Status": response[0].form16Status,
                    // "PF TransferStatus":response[0].pfTransferStatus,
                    // "UAN Details":response[0].uanDetails,
                    "result":"implemented"
                }
            });
        }
    }
        catch(error){
            next(error);
        }
    }
    const userStatus=async(req,res,next)=>{
        try{
            const payload=req.params
            const response=await userServices.userStatus(payload);
            if (response && response.length == 0) {
                res.status(200).send({
                  status: 400,
                  message: {
                    "result": "User doesn't exist"
                  }
                });
              }
            else{

            res.status(200).send({
                status:200,
                message:{
                    "response":response,             
                    // "Fnf Status": response[0].fnfStatus,
                    // "Form16 Status": response[0].form16Status,
                    // "PF TransferStatus":response[0].pfTransferStatus,
                    // "UAN Details":response[0].uanDetails,
                    "result":"implemented"
                }
            });
        }
    }
        catch(error){
            next(error);
        }
    }
    return{
        user,
        userDocument,
        userStatus
    };
  };
  