import { Schema } from "../../../schema/schema";

export const subtenantDarkThemeImageSchema = (): Schema => {
    return Object.assign(new Schema(), {
        name: "SubtenantDarkThemeImage",
        fields: [
            {
                name: "reference",
                apiName: "reference",
                type: "SubtenantDarkThemeImageReference",
            },
            {
                name: "staticUri",
                apiName: "static_uri",
                type: "string",
            },
            {
                name: "updatedAt",
                apiName: "updated_at",
                type: "Date",
            },
        ],

        methods: [
            {
                name: "delete",
                returnType: "Promise<SubtenantDarkThemeImage>",
                parameters: [
                    {
                        name: "accountId",
                        position: 0,
                        type: "string",
                    },
                    {
                        name: "reference",
                        position: 1,
                        type: "string",
                    },
                ],
            },
            {
                name: "read",
                returnType: "Promise<SubtenantDarkThemeImage>",
                parameters: [
                    {
                        name: "accountId",
                        position: 0,
                        type: "string",
                    },
                    {
                        name: "reference",
                        position: 1,
                        type: "string",
                    },
                ],
            },
            {
                name: "update",
                returnType: "Promise<SubtenantDarkThemeImage>",
                parameters: [
                    {
                        name: "accountId",
                        position: 0,
                        type: "string",
                    },
                    {
                        name: "image",
                        position: 1,
                        type: "ReadStream | Buffer | File | Blob",
                    },
                    {
                        name: "reference",
                        position: 2,
                        type: "string",
                    },
                ],
            },
        ],
    });
};
