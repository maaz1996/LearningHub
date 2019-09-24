module.exports = () => {
    const eventSchema = require("../models/admin/event")
    const newsSchema = require("../models/admin/news")
    const faqSchema=require("../models/admin/faq")
    const { getDataFromMaster }=require("../models/user/action");
    const addNews = ({ payload }) => {
        return new Promise(async(resolve, reject) => {
            try {
                const { title, content, tags, date,author } = payload
                const news = new newsSchema({ title, content, tags, date,author});
                await news.save();
                resolve(payload)

            } catch (error) {
                reject(error)
            }
        })
    }
    const viewNews = ({ payload }) => {
        return new Promise(async(resolve, reject) => {
            try {
                const { title, content, tags, date,author } = payload
                const foundNews = await newsSchema.findOne({ title })
                resolve(foundNews)

            } catch (error) {
                reject(error)
            }
        })
    }
    const addEvents = ({ payload }) => {
        return new Promise(async(resolve, reject) => {
            try {
                const { title, content, tags, date,author } = payload
                const news = new eventSchema({ title, content, tags, date,author });
                await news.save();
                resolve(payload)

            } catch (error) {
                reject(error)
            }
        })
    }
    const viewEvents = ({ payload }) => {
        return new Promise(async(resolve, reject) => {
            try {
                const { title, content, tags, date,author } = payload
                const foundNews = await eventSchema.findOne({ title })
                resolve(foundNews)

            } catch (error) {
                reject(error)
            }
        })
    }

    const addFaq = ({ payload }) => {
        return new Promise(async(resolve, reject) => {
            try {
                const { question,answer} = payload
                const faqs = new faqSchema({ question,answer });
                await faqs.save();
                resolve(payload)

            } catch (error) {
                reject(error)
            }
        })
    }
    const viewFaq = ({ payload }) => {
        return new Promise(async(resolve, reject) => {
            try {
                const { question,answer } = payload
                const foundFaq= await faqSchema.findOne({ question })
                resolve(foundFaq)

            } catch (error) {
                reject(error)
            }
        })
    }
    const deleteFaq = ({ payload }) => {
        return new Promise(async(resolve, reject) => {
            try {
                const deletedFaq= await faqSchema.remove({ question: payload.question })
                console.log(deletedFaq)
                resolve(deletedFaq)

            } catch (error) {
                reject(error)
            }
        })
    }
    const user= ({payload}) => {
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
            } catch (error) {
                reject(error);
            }
        });
    };


    return {
        addNews,
        viewNews,
        addEvents,
        viewEvents,
        addFaq,
        viewFaq,
        deleteFaq,
        user
    }
};