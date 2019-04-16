import { Schema } from "../../../schema/schema";

export const campaignDeviceMetadataSchema = (): Schema => {
    return Object.assign(new Schema(), {
        name: "CampaignDeviceMetadata",
        fields: [
            {
                name: "campaign",
                apiName: "campaign",
                type: "string",
            },
            {
                name: "createdAt",
                apiName: "created_at",
                type: "Date",
            },
            {
                name: "deploymentState",
                apiName: "deployment_state",
                type: "CampaignDeviceMetadataDeploymentState",
            },
            {
                name: "description",
                apiName: "description",
                type: "string",
            },
            {
                name: "deviceId",
                apiName: "device_id",
                type: "string",
            },
            {
                name: "mechanism",
                apiName: "mechanism",
                type: "string",
            },
            {
                name: "mechanismUrl",
                apiName: "mechanism_url",
                type: "string",
            },
            {
                name: "name",
                apiName: "name",
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
                name: "read",
                returnType: "Promise<CampaignDeviceMetadata>",
                parameters: [
                    {
                        name: "campaign",
                        position: 0,
                        type: "string",
                    },
                    {
                        name: "campaignDeviceMetadataId",
                        position: 1,
                        type: "string",
                    },
                ],
            },
        ],
    });
};