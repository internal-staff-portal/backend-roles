import {
  CoreValues,
  Module,
  ModuleConstructor,
} from "@internal-staff-portal/backend-shared";
import { Router } from "express";

//export model and interfaces
export { IRole, RoleModel } from "./Models/RoleModel";

//options for the Wrapper
interface ModuleOptions {}

//the wrapper of the constructor
export default function ModuleWrapper(
  options?: ModuleOptions,
): ModuleConstructor {
  //the constructor
  return function (core: CoreValues): Module {
    //define module path
    const path = "/roles";

    //create the router
    const rolesRouter = Router();

    //create the socket.io namespace
    const namespace = core.createNamespace(path);

    //test route (will be removed)
    rolesRouter.get("/test", (req, res) => {
      res.send("Test from roles module!");
    });

    //return the actual module
    return {
      name: "roles",
      path: path,
      router: rolesRouter,
    };
  };
}
