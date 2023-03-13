import { Request, Response, Router } from "express";
import { delete_Subject,get_Subject,get_Subjects,matriculate_Subject,post_Subject, update_Subject, get_Users_In_Subject, get_Subjects_Of_An_User} from "../controllers/subject";

const router=Router();

router.get("/all",get_Subjects);
router.get("/:idSubject",get_Subject);
router.post("/",post_Subject);
router.put("/:idSubject",update_Subject);
router.delete("/:idSubject",delete_Subject);
router.post("/matriculate",matriculate_Subject);
router.get("/usersInSubject/:idSubject", get_Users_In_Subject);
router.get("/subjectsOfAnUser/:idUser", get_Subjects_Of_An_User)

export{router};
