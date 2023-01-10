const router = require("express").Router();
const userRoutes = require("./api/userRoutes");

router.use("/api/user", userRoutes);

router.use((req, res) => res.send("Wrong route!"));

module.exports = router;
