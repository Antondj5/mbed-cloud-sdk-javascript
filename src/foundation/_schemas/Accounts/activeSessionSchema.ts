import { Schema } from "../../../schema/schema";

export const activeSessionSchema = (): Schema => {
    return Object.assign(new Schema(), {
        name: "ActiveSession",
        fields: [
            {
                name: "accountId",
                apiName: "account_id",
                type: "string",
            },
            {
                name: "createdAt",
                apiName: "created_at",
                type: "Date",
            },
            {
                name: "ipAddress",
                apiName: "ip_address",
                type: "string",
            },
            {
                name: "loginTime",
                apiName: "login_time",
                type: "Date",
            },
            {
                name: "referenceToken",
                apiName: "reference_token",
                type: "string",
            },
            {
                name: "userAgent",
                apiName: "user_agent",
                type: "string",
            },
        ],
    });
};
