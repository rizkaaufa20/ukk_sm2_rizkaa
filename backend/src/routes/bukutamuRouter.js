const express=require("express")
const router=express.Router()
const bukutamuController= require("../controllers/bukutamuController")
const authJWt= require("../middleware/authMiddleware")

router.get("/bukutamu", bukutamuController.index)
router.post("/bukutamu", bukutamuController.storeBukutamu)
router.delete("/bukutamu/:id", authJWt, bukutamuController.destroyBukutamu)

module.exports=router