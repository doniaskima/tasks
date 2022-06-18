const router = require("express").Router();
const subscriberControllers = require("../controllers/subscriber.controllers");

router.post("/", subscriberControllers.createSubscriber);
router.get("/", subscriberControllers.getSubscribers);
router.get("/:id", subscriberControllers.getSubscriber);
router.delete("/:id", subscriberControllers.deleteSubscriber);
router.put("/:id", subscriberControllers.updateSubscriber);

module.exports = router;