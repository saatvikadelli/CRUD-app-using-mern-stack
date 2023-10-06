import express from "express";

import { addAnotherUser } from "../controller/user-collector.js";
import { getUsers  } from "../controller/user-collector.js";
import { getUser , editUser, deleteUser  , getPublicUsers} from "../controller/user-collector.js";




const router = express.Router();

router.post('/add',addAnotherUser);
router.get('/public-users',getPublicUsers);

router.get('/all',getUsers);
router.get('/:id',getUser);
router.post('/:id',editUser);
router.delete('/:id',deleteUser);
//router.post('/public-user-details/:id',createPublicUser);
export default router;