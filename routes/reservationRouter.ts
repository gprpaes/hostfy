import express from "express";
import Logger from "../utils/Logger";
import { REST_RESOURCES, APP_COMPONENTS } from "../const";
import { query } from "../database/connection";
import Reservation from "../models/reservation";

const reservationRouter = express.Router();

export default reservationRouter;
