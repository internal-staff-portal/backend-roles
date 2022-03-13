import { model, Schema } from "mongoose";
import { v4 } from "uuid";

//the interface for a role
export interface IRole<ModuleData = {}> {
  _id: string;
  moduleData: ModuleData;
  owner: string;
  users: string[];
}

//the role schema
const RoleSchema = new Schema<IRole>({
  _id: {
    default: v4,
    type: String,
    required: true,
  },
  moduleData: {
    type: Object,
    required: false,
    default: {},
  },
  owner: {
    type: String,
    required: true,
  },
  users: {
    type: [String],
    required: true,
    default: [],
  },
  //schme definitions here
});

//the role model
export const RoleModel = model("role", RoleSchema);
