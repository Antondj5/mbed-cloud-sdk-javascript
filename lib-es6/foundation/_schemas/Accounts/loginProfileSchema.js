import { Schema } from "../../../schema/schema";
export const loginProfileSchema = () => {
    return Object.assign(new Schema(), {
        name: "LoginProfile",
        fields: [
            {
                name: "foreignId",
                apiName: "foreign_id",
                type: "string",
            },
            {
                name: "loginProfileType",
                apiName: "type",
                type: "LoginProfileType",
            },
            {
                name: "name",
                apiName: "name",
                type: "string",
            },
        ],
    });
};
//# sourceMappingURL=loginProfileSchema.js.map