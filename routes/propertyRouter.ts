import express from "express"
import Logger from "../utils/Logger"
import {REST_RESOURCES, APP_COMPONENTS} from "../const"
import {query} from "../database/connection"
const propertyRouter = express.Router();


propertyRouter.get(`${REST_RESOURCES.PROPERTY}`, async(req, res) =>{
    Logger.info(APP_COMPONENTS.ENDPOINT, "Listing all properties");
    try{
        const resq = await query("SELECT * FROM property", []);
    Logger.success(APP_COMPONENTS.ENDPOINT, "Success listing property");
    res.status(200);
    return res.json({
      success: true,
      data: resq.rows,
    });
    }catch(error){
        res.status(500);
        return res.json({
          error: error.toString(),
        });
    }
})



export default propertyRouter;

