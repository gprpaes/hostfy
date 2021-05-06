import express from "express";
import Logger from "../utils/Logger";
import { REST_RESOURCES, APP_COMPONENTS } from "../const";
import { query } from "../database/connection";
import Reservation from "../models/reservation";

const reservationRouter = express.Router();

reservationRouter.post(`${REST_RESOURCES.RESERVATION}`, async (req, res) => {
  Logger.info(APP_COMPONENTS.ENDPOINT, "Creating a reservation...");
  const {
    bedroomId,
    guestAmount,
    startDate,
    endDate,
    totalValue,
    reservationDate,
    checkIn,

  } = req.body || null;
  try {
    const reservation = new Reservation(
      null,
      bedroomId,
      guestAmount,
      startDate,
      endDate,
      totalValue,
      reservationDate,
      checkIn,
    
    );

    const resq = await query(
      "INSERT INTO reservation VALUES($1,$2, $3, $4,$5,$6, $7, $8) RETURNING *",
      [
        reservation.getId(),
        reservation.getBedroomId(),
        reservation.getGuestAmount(),
        reservation.getStartDate(),
        reservation.getEndDate(),
        reservation.getTotalValue(),
        reservation.getReservationDate(),
        reservation.getCheckIn(),
       
      ]
    );
    Logger.success(APP_COMPONENTS.ENDPOINT, "created a new property!");
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

reservationRouter.get(`${REST_RESOURCES.RESERVATION}`, async (req, res) => {
  Logger.info(APP_COMPONENTS.ENDPOINT, "Listing all reservations");
  try {
    const resq = await query("SELECT * FROM reservation", []);
    Logger.success(APP_COMPONENTS.ENDPOINT, "Success listing RESERVATION");
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

reservationRouter.get(`${REST_RESOURCES.RESERVATION}/:id`, async (req, res) => {
  const { id } = req.params;
  Logger.info(APP_COMPONENTS.ENDPOINT, "Listing a RESERVATION given an id...");
  try {
    const resq = await query(`SELECT * FROM reservation WHERE id = $1`, [id]);
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

export default reservationRouter;
