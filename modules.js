import express from "express";

function getUsersRoutes() {
    const router = express.Router();
    
    router.get("/allusers", getAllUser);
    router.get("/:username", getUser);
    router.post("", addUser);
    router.delete("", deleteUser);
    router.put("", changeEmail);
    router.post("/login", login);

  return router;
}

export { getUsersRoutes };