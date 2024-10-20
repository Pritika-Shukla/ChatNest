import express from "express";
import protectRoute from "../middleware/protectRoute.js";
const router=express.router();

router.get('/',protectRoute, getUsersForSidebar);

export  default router;