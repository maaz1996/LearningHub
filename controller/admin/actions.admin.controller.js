const Company = require("../../models/admin/register");
const AdminActionSerivce = require("../../services/adminActions.services")();
const express = require("express");
module.exports = {
    add: async(req, res, next) => {
        const {
            companyname,
            companyid,
            companyurl,
            cloudprovider,
            idp,
            tokenurl,
            clientid,
            userid,
            privatekey
        } = req.body;

        const newCompany = new Company({
            companyname,
            companyid,
            companyurl,
            cloudprovider,
            idp,
            tokenurl,
            clientid,
            userid,
            privatekey

        });
        await newCompany.save();
        res.status(200).send({ Status: "Company Added Successfully" });
    },
    addNews: async(req, res) => {
        payload = req.body;
        const reponse = await AdminActionSerivce.addNews({ payload })
        res.status(200).send({ "status:": "200 OK", "New Entry saved for ": reponse });
    },
    viewNews: async(req, res) => {
        payload = req.body;
        const reponse = await AdminActionSerivce.viewNews({ payload })
        res.status(200).json({ reponse });
    },
    addEvents: async(req, res) => {
        payload = req.body;
        const reponse = await AdminActionSerivce.addEvents({ payload })
        res.status(200).json({ "status:": "200 OK", "New Entry saved for ": reponse });
    },
    viewEvents: async(req, res) => {
        payload = req.body;
        const reponse = await AdminActionSerivce.viewEvents({ payload })
        res.status(200).json({ reponse });
    },
    addFaq: async(req, res) => {
        payload = req.body;
        const reponse = await AdminActionSerivce.addFaq({ payload })
        res.status(200).json({ "status:": "200 OK", "New Entry saved for ": reponse });
    },
    viewFaq: async(req, res) => {
        payload = req.body;
        const reponse = await AdminActionSerivce.viewFaq({ payload })
        res.status(200).json({ reponse });
    },
    deleteFaq: async(req, res) => {
        payload = req.body;
        const response = await AdminActionSerivce.deleteFaq({ payload })
        if (response){
        res.status(200).send({
            status: 200,
            message: { "response":"FAQ Deleted",
            "No. of Deleted Documents":response.deletedCount ,
             "result": "IMPLEMENTED " }
        });
    }
    },
    user: async(req, res,next) => {
        try {
            const payload = req.params
            const  response = await AdminActionSerivce.user({payload});
            res.status(200).send({
                status: 200,
                message: { "response": response,
                 "result": "IMPLEMENTED " }
            });
        } catch (error) {
            next(error);
        }
    }
};