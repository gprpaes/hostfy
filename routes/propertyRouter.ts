import express from "express";
import Logger from "../utils/Logger";
import { REST_RESOURCES, APP_COMPONENTS } from "../const";
import { query } from "../database/connection";
import Property from "../models/property";
const propertyRouter = express.Router();

propertyRouter.get(`${REST_RESOURCES.PROPERTY}/:id`, async (req, res) => {
  const { id } = req.params;
  Logger.info(APP_COMPONENTS.ENDPOINT, "Listing a PROPERTY given an id...");
  try {
    const resq = await query(`SELECT * FROM property WHERE id = $1`, [id]);
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

propertyRouter.get(`${REST_RESOURCES.PROPERTY}`, async (req, res) => {
  Logger.info(APP_COMPONENTS.ENDPOINT, "Listing all properties");
  try {
    const resq = await query("SELECT * FROM property", []);
    Logger.success(APP_COMPONENTS.ENDPOINT, "Success listing property");
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

propertyRouter.post(`${REST_RESOURCES.PROPERTY}`, async (req, res) => {
  Logger.info(APP_COMPONENTS.ENDPOINT, "Creating property....");
  const { name, cnpj, address, roomAmount, propertyTypeId } = req.body || null;
  const property = new Property(
    null,
    name || null,
    propertyTypeId || null,
    address || null,
    roomAmount || null,
    cnpj || null
  );
  try {
    const resq = await query(
      "INSERT INTO property VALUES($1,$2, $3, $4,$5,$6) RETURNING *",
      [
        property.getId(),
        property.getName(),
        property.getCnpj(),
        property.getAddress(),
        property.getRoomAmount(),
        property.getPropertyId(),
      ]
    );
    Logger.success(APP_COMPONENTS.ENDPOINT, "created a new property!");
    res.status(201);
    return res.json({
      success: true,
      data: resq.rows[0],
    });
  } catch (error) {
    Logger.info(APP_COMPONENTS.ENDPOINT, "error on creating property");
    res.status(400);
    return res.json({
      error: error.toString(),
    });
  }
});

export default propertyRouter;
