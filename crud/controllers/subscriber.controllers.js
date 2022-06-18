const Subscriber = require("../models/subscriber");

const getSubscribers = async(req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};
const getSubscriber = async(req, res) => {
    const id = req.params.id;
    try {
        const subscriber = await Subscriber.findById(id);
        res.status(200).json(subscriber);
    } catch (err) {
        res.status(500).json(err);
    }
};
const deleteSubscriber = async(req, res) => {
    const id = req.params.id;
    try {
        await res.subscriber.remove()
        res.json({ message: 'Deleted Subscriber' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};
const updateSubscriber = async(req, res) => {
    const id = req.params.id;
    if (req.body.name != null) {
        res.subscriber.name = req.body.name;
    }
    if (req.body.subscribedToChannel != null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
    }
    try {
        const updatedSubscriber = await res.subscriber.save();
        res.json(updatedSubscriber);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

};
const createSubscriber = async(req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}



module.exports.getSubscribers = getSubscribers;
module.exports.createSubscriber = createSubscriber;
module.exports.updateSubscriber = updateSubscriber;
module.exports.deleteSubscriber = deleteSubscriber;
module.exports.getSubscriber = getSubscriber;