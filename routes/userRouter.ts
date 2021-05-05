import express from "express";
import { REST_RESOURCES } from "../const";
import User from "../models/user";
import { query } from "../database/connection";

const userRouter = express.Router();

userRouter.get(REST_RESOURCES.USER, (req, res) => {
  res.status(200);
  return res.json({ foi: "ae" });
});

userRouter.post(REST_RESOURCES.USER, async (req, res) => {
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
    res.status(201);
    return res.json({
      success: true,
      data: resq.rows[0],
    });
  } catch (error) {
    res.status(400);
    return res.json({
      error: error.toString(),
    });
  }
});

export default userRouter;
