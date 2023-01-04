const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api/user", userRoutes);

router.use((req, res) => res.send("Wrong route!"));

module.exports = router;
