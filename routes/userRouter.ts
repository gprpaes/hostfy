import express from "express";
import { REST_RESOURCES, APP_COMPONENTS } from "../const";
import User from "../models/user";
import { query } from "../database/connection";
import Logger from "../utils/Logger";

const userRouter = express.Router();

userRouter.get(`${REST_RESOURCES.USER}/:id`, async (req, res) => {
  const { id } = req.params;
  Logger.info(APP_COMPONENTS.ENDPOINT, "Listing a user given an id...");
  try {
    const resq = await query(`SELECT * FROM app_user WHERE id = $1`, [id]);
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

userRouter.get(`/login`, async (req, res) => {
  const { email, password } = req.query;

  Logger.info(APP_COMPONENTS.ENDPOINT, "Trying to Login");
  try {
    const resq = await query(
      "SELECT * from app_user WHERE email = $1 and password = $2",
      [email, password]
    );

    return res.json({
      success: true,
      data: resq.rows,
    });
  } catch (error) {
    res.status(403);
    return res.json({
      error: error,
    });
  }
});

userRouter.get(REST_RESOURCES.USER, async (req, res) => {
  Logger.info(APP_COMPONENTS.ENDPOINT, "Listing users...");
  try {
    const resq = await query("SELECT * FROM app_user", []);
    Logger.success(APP_COMPONENTS.ENDPOINT, "Success listing users");
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

userRouter.post(REST_RESOURCES.USER, async (req, res) => {
  Logger.info(APP_COMPONENTS.ENDPOINT, "Trying to create a new user...");
  const {
    username,
    password,
    propertyId,
    position,
    isSuperUser,
    parentUserId,
    permissionId,
    blocked,
    created,
    name,
    email,
    cpf,
    address,
    phone,
    birthday,
  } = req.body || null;

  const user = new User(
    null,
    username || null,
    password || null,
    propertyId || null,
    position || null,
    isSuperUser || null,
    parentUserId || null,
    permissionId || null,
    blocked || null,
    created || null,
    name || null,
    email || null,
    cpf || null,
    address || null,
    phone || null,
    birthday || null
  );
  try {
    const resq = await query(
      "INSERT INTO app_user VALUES($1,$2, $3, $4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16) RETURNING *",
      [
        user.getId(),
        user.getName(),
        user.getCpf(),
        user.getAddress(),
        user.getEmail(),
        user.getPhone(),
        user.getBirthday(),
        user.getUsername(),
        user.getPassword(),
        user.getPosition(),
        user.getIsSuperUser(),
        user.getParentUserId(),
        user.getPermissionId(),
        user.getBlocked(),
        user.getCreated(),
        user.getPropertyId(),
      ]
    );
    Logger.success(APP_COMPONENTS.ENDPOINT, "created a new user!");
    res.status(201);
    return res.json({
      success: true,
      data: resq.rows[0],
    });
  } catch (error) {
    Logger.info(APP_COMPONENTS.ENDPOINT, "error on creating user");
    res.status(400);
    return res.json({
      error: error.toString(),
    });
  }
});

export default userRouter;
