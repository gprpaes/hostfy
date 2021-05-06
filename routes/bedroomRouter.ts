import express from "express";
import Logger from "../utils/Logger"
import {REST_RESOURCES, APP_COMPONENTS} from "../const"
import {query} from "../database/connection";
import Bedroom from "../models/bedroom"

const bedroomRouter = express.Router();



bedroomRouter.get(`${REST_RESOURCES.BEDROOM}`, async (req, res) => {
    Logger.info(APP_COMPONENTS.ENDPOINT, "Listing all BEDROOMs");
    try {
      const resq = await query("SELECT * FROM bedroom", []);
      Logger.success(APP_COMPONENTS.ENDPOINT, "Success listing BEDROOM");
      res.status(200);
      return res.json({
        success: true,
        data: resq.rows,
      });
    } catch (error) {
      res.status(500);
      return res.json({
        error: error.toString(),
      });
    }
  });
  



export default bedroomRouter;