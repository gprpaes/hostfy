import express from "express";
import Logger from "../utils/Logger";
import { REST_RESOURCES, APP_COMPONENTS } from "../const";
import { query } from "../database/connection";
import Bedroom from "../models/bedroom";

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

bedroomRouter.get(`${REST_RESOURCES.BEDROOM}/:id`, async (req, res) => {
  const { id } = req.params;
  Logger.info(APP_COMPONENTS.ENDPOINT, "Listing a BEDROOM given an id...");
  try {
    const resq = await query(`SELECT * FROM bedroom WHERE id = $1`, [id]);
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

bedroomRouter.post(`${REST_RESOURCES.BEDROOM}`, async (req, res) => {
  Logger.info(APP_COMPONENTS.ENDPOINT, "Creating a bedroom....");

  const { number, type, bedtype, capacity, status, booked, propertyId } =
    req.body || null;

  try {
    const bedroom = new Bedroom(
      null,
      number,
      type,
      bedtype,
      capacity,
      status,
      propertyId,
      booked
    );
    const resq = await query(
      "INSERT INTO bedroom VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        bedroom.getId(),
        bedroom.getNumber(),
        bedroom.getType(),
        bedroom.getBedType(),
        bedroom.getCapacity(),
        bedroom.getStatus(),
        bedroom.getBooked(),
        bedroom.getPropertyId(),
      ]
    );
    Logger.success(APP_COMPONENTS.ENDPOINT, "created a new bedroom!");
    res.status(201);
    return res.json({
      success: true,
      data: resq.rows[0],
    });
  } catch (error) {
    res.status(500);
    return res.json({
      error: error.toString(),
    });
  }
});

export default bedroomRouter;
