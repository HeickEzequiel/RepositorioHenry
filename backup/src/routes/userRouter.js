const { Router } = require("express");
const router = Router();



const login = require("../handlers/userHandler/login");
const logoutHandler = require("../handlers/userHandler/logoutHandler");
const getAllUsersHandler = require("../handlers/userHandler/getAllUsersHandler");
const getOneUserHandler = require("../handlers/userHandler/getOneUserHandler");
const newUserHandler = require("../handlers/userHandler/newUserHandler");


router.route("/getallusers").get(getAllUsersHandler);
router.route("/getoneuser/:id").get(getOneUserHandler);
router.route("/register").post(newUserHandler);
router.route("/login").post(login);
router.route("/logout").post(logoutHandler);

module.exports = router;
