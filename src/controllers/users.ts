import { Request, Response } from 'express';

import { getUsers, getUserById, deleteUserById } from '../db/users';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.sendStatus(400);
    }
    const deletedUser = await getUserById(id);
    if (!deletedUser) {
      return res.sendStatus(400);
    }

    await deleteUserById(deletedUser._id.toString());
    return res.status(200).json(deletedUser).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
