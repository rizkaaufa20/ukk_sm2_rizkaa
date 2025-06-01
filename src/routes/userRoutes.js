const express= require("express")
const router= express.Router()
const userController= require("../controllers/userController")
const authJWt= require ("../middleware/authMiddleware")

router.post("/users",authJWt,userController.storeUser);
router.get("/users", authJWt,userController.index);
router.delete("/users/:id",authJWt,userController.destroyUser);
router.put("/users/:id", authJWt, userController.updateUser)
router.get("/users/:id",authJWt,userController.showUser);
router.post("/login", userController.login);
router.post("/logout",authJWt,userController.logout);

module.exports=router;



