/**
 * Deployment Service API
 * This is the API Documentation for the mbed deployment service which is part of the update service.
 *
 * OpenAPI spec version: 0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

// ===============================================
// This file is autogenerated - Please do not edit
// Tracks base typescript-fetch mustache 01/02/17
// ===============================================

/* tslint:disable:no-unused-variable */

import superagent = require('superagent');
import { ApiBase } from "../common/apiBase";

export type CampaignDeviceMetadataSerializerDeploymentStateEnum = "pending" | "updated_device_catalog" | "updated_connector_channel" | "deployed" | "manifestremoved";
export interface CampaignDeviceMetadataSerializer {
    /**
     * The description of the object
     */
    "description": string;
    /**
     * The update campaign to which this device belongs
     */
    "campaign": string;
    /**
     * The time the object was created
     */
    "created_at": Date;
    /**
     * The API resource entity
     */
    "object": string;
    /**
     * The time the object was updated
     */
    "updated_at": Date;
    /**
     * The ID of the channel used to communicated with the device
     */
    "mechanism": string;
    /**
     * The name of the object
     */
    "name": string;
    /**
     * The entity instance signature
     */
    "etag": Date;
    /**
     * The address of the Connector to use
     */
    "mechanism_url": string;
    /**
     * The state of the deployment
     */
    "deployment_state": CampaignDeviceMetadataSerializerDeploymentStateEnum;
    /**
     * The ID of the metadata concerning this device/campaign
     */
    "id": string;
    /**
     * The ID of the device to deploy
     */
    "device_id": string;
}

export interface UpdateCampaignPage {
    /**
     * API Resource name
     */
    "object"?: string;
    /**
     * Whether there are more results to display
     */
    "has_more"?: boolean;
    /**
     * Total number of records
     */
    "total_count"?: number;
    /**
     * Entity id for fetch after it
     */
    "after"?: string;
    /**
     * The number of results to return
     */
    "limit"?: number;
    "data"?: Array<UpdateCampaignSerializer>;
    /**
     * Order of returned records
     */
    "order"?: string;
}

export type UpdateCampaignSerializerStateEnum = "draft" | "scheduled" | "devicefetch" | "devicecopy" | "devicecopycomplete" | "publishing" | "deploying" | "deployed" | "manifestremoved" | "expired";
export interface UpdateCampaignSerializer {
    /**
     * An optional description of the campaign
     */
    "description": string;
    /**
     * The state of the campaign
     */
    "state": UpdateCampaignSerializerStateEnum;
    /**
     * The updating IAM user ID
     */
    "updating_user_id": string;
    /**
     * The time the object was created
     */
    "created_at": Date;
    /**
     * The API resource entity
     */
    "object": string;
    "root_manifest_id": string;
    /**
     * DEPRECATED: The ID of the campaign
     */
    "campaign_id": string;
    /**
     * The updating account ID
     */
    "updating_account_id": string;
    /**
     * The time the object was updated
     */
    "updated_at": Date;
    /**
     * The timestamp at which update campaign scheduled to start
     */
    "when"?: Date;
    /**
     * The timestamp when the update campaign finished
     */
    "finished"?: Date;
    /**
     * The entity instance signature
     */
    "etag": Date;
    "root_manifest_url": string;
    /**
     * The gateway client API key
     */
    "updating_api_key": string;
    /**
     * The ID of the campaign
     */
    "id": string;
    /**
     * The filter for the devices the campaign will target
     */
    "device_filter": string;
    /**
     * A name for this campaign
     */
    "name": string;
}

export type UpdateCampaignStatusSerializerStateEnum = "draft" | "scheduled" | "devicefetch" | "devicecopy" | "devicecopycomplete" | "publishing" | "deploying" | "deployed" | "manifestremoved" | "expired";
export interface UpdateCampaignStatusSerializer {
    "direct_devices": number;
    "connector_devices": number;
    /**
     * An optional description of the campaign
     */
    "description": string;
    /**
     * The state of the campaign
     */
    "state": UpdateCampaignStatusSerializerStateEnum;
    /**
     * The updating IAM user ID
     */
    "updating_user_id": string;
    /**
     * The time the object was created
     */
    "created_at": Date;
    "total_devices": number;
    "campaigndevicemetadata_set": Array<CampaignDeviceMetadataSerializer>;
    /**
     * DEPRECATED: The ID of the campaign
     */
    "campaign_id": string;
    "deployed_devices": number;
    /**
     * The time the object was updated
     */
    "updated_at": Date;
    /**
     * The timestamp at which campaign is scheduled to start
     */
    "when"?: Date;
    /**
     * The timestamp when the update campaign finished
     */
    "finished"?: Date;
    "root_manifest_url": string;
    /**
     * The gateway client API key
     */
    "updating_api_key": string;
    /**
     * The updating account ID
     */
    "updating_account_id": string;
    /**
     * The filter for the devices the campaign will target
     */
    "device_filter": string;
    /**
     * A name for this campaign
     */
    "name": string;
}

export type WriteCampaignDeviceMetadataSerializerDeploymentStateEnum = "pending" | "updated_device_catalog" | "updated_connector_channel" | "deployed" | "manifestremoved";
export interface WriteCampaignDeviceMetadataSerializer {
    /**
     * The description of the object
     */
    "description"?: string;
    /**
     * The update campaign to which this device belongs
     */
    "campaign": string;
    /**
     * The API resource entity
     */
    "object"?: string;
    /**
     * The ID of the channel used to communicated with the device
     */
    "mechanism": string;
    /**
     * The name of the object
     */
    "name": string;
    /**
     * The address of the Connector to use
     */
    "mechanism_url"?: string;
    /**
     * The state of the deployment
     */
    "deployment_state"?: WriteCampaignDeviceMetadataSerializerDeploymentStateEnum;
    /**
     * The ID of the device to deploy
     */
    "device_id": string;
}

export type WriteUpdateCampaignSerializerStateEnum = "draft" | "scheduled" | "devicefetch" | "devicecopy" | "devicecopycomplete" | "publishing" | "deploying" | "deployed" | "manifestremoved" | "expired";
export interface WriteUpdateCampaignSerializer {
    /**
     * A name for this campaign
     */
    "name": string;
    /**
     * The state of the campaign
     */
    "state"?: WriteUpdateCampaignSerializerStateEnum;
    /**
     * The updating IAM user ID
     */
    "updating_user_id"?: string;
    /**
     * The API resource entity
     */
    "object"?: string;
    "root_manifest_id"?: string;
    /**
     * DEPRECATED: The ID of the campaign
     */
    "campaign_id"?: string;
    /**
     * The gateway client API key
     */
    "updating_api_key"?: string;
    /**
     * The timestamp at which update campaign scheduled to start
     */
    "when"?: Date;
    /**
     * The timestamp when the update campaign finished
     */
    "finished"?: Date;
    /**
     * The updating account ID
     */
    "updating_account_id"?: string;
    /**
     * The filter for the devices the campaign will target
     */
    "device_filter"?: string;
    /**
     * An optional description of the campaign
     */
    "description"?: string;
}

/**
 * DefaultApi
 */
export class DefaultApi extends ApiBase {

    /** 
     * &lt;p&gt;Reads the deploy_info.json file and returns the Build and Git ID to the caller.&lt;/p&gt; &lt;p&gt;Will return a 500 error if the file is missing, cannot be parsed or the keys are missing.&lt;/p&gt;
     */
    deployInfoGET (callback?: (error:any, data?:any, response?: superagent.Response) => any): superagent.SuperAgentRequest {

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/ds_deploy_info',
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating update campaigns. Update campaigns are used to control firmware update to a list of devices specified by a filter.  &lt;/p&gt; &lt;p&gt;Create update campaign&lt;/p&gt;
     * @param body Update campaign object to create
     */
    updateCampaignCreate (body: WriteUpdateCampaignSerializer, callback?: (error:any, data?:UpdateCampaignSerializer, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "body" is set
        if (body === null || body === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'body' missing when calling 'updateCampaignCreate'."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/update-campaigns/',
            method: 'POST',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
            body: body,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating update campaigns. Update campaigns are used to control firmware update to a list of devices specified by a filter.  &lt;/p&gt; &lt;p&gt;Delete update campaign&lt;/p&gt;
     * @param campaignId The ID of the update campaign
     */
    updateCampaignDestroy (campaignId: string, callback?: (error:any, data?:UpdateCampaignSerializer, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "campaignId" is set
        if (campaignId === null || campaignId === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'campaignId' missing when calling 'updateCampaignDestroy'."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/update-campaigns/{campaign_id}/'.replace('{' + 'campaign_id' + '}', String(campaignId)),
            method: 'DELETE',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating update campaigns. Update campaigns are used to control firmware update to a list of devices specified by a filter.  &lt;/p&gt; &lt;p&gt;List all update campaigns&lt;/p&gt;
     * @param limit 
     * @param order 
     * @param after 
     * @param filter 
     * @param include 
     */
    updateCampaignList (limit?: number, order?: string, after?: string, filter?: string, include?: string, callback?: (error:any, data?:UpdateCampaignPage, response?: superagent.Response) => any): superagent.SuperAgentRequest {

        let headerParams: any = {};

        let queryParameters: any = {};
        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }
        if (order !== undefined) {
            queryParameters['order'] = order;
        }
        if (after !== undefined) {
            queryParameters['after'] = after;
        }
        if (filter !== undefined) {
            queryParameters['filter'] = filter;
        }
        if (include !== undefined) {
            queryParameters['include'] = include;
        }

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/update-campaigns/',
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating update campaigns. Update campaigns are used to control firmware update to a list of devices specified by a filter.  &lt;/p&gt; &lt;p&gt;Update campaign fields&lt;/p&gt;
     * @param campaignId DEPRECATED: The ID of the campaign
     * @param description An optional description of the campaign
     * @param deviceFilter The filter for the devices the campaign will target
     * @param finished The timestamp when the update campaign finished
     * @param name A name for this campaign
     * @param object The API resource entity
     * @param rootManifestId 
     * @param state The state of the campaign
     * @param when The timestamp at which update campaign scheduled to start
     */
    updateCampaignPartialUpdate (campaignId?: string, description?: string, deviceFilter?: string, finished?: Date, name?: string, object?: string, rootManifestId?: string, state?: string, when?: Date, callback?: (error:any, data?:UpdateCampaignSerializer, response?: superagent.Response) => any): superagent.SuperAgentRequest {

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};
        if (campaignId !== undefined) {
            formParams['campaign_id'] = campaignId;
        }

        if (description !== undefined) {
            formParams['description'] = description;
        }

        if (deviceFilter !== undefined) {
            formParams['device_filter'] = deviceFilter;
        }

        if (finished !== undefined) {
            formParams['finished'] = finished;
        }

        if (name !== undefined) {
            formParams['name'] = name;
        }

        if (object !== undefined) {
            formParams['object'] = object;
        }

        if (rootManifestId !== undefined) {
            formParams['root_manifest_id'] = rootManifestId;
        }

        if (state !== undefined) {
            formParams['state'] = state;
        }

        if (when !== undefined) {
            formParams['when'] = when;
        }


        return this.request({
            url: '/v3/update-campaigns/{campaign_id}/',
            method: 'PATCH',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating update campaigns. Update campaigns are used to control firmware update to a list of devices specified by a filter.  &lt;/p&gt; &lt;p&gt;Retrieve campaign&lt;/p&gt;
     * @param campaignId The ID of the campaign
     */
    updateCampaignRetrieve (campaignId: string, callback?: (error:any, data?:UpdateCampaignSerializer, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "campaignId" is set
        if (campaignId === null || campaignId === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'campaignId' missing when calling 'updateCampaignRetrieve'."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/update-campaigns/{campaign_id}/'.replace('{' + 'campaign_id' + '}', String(campaignId)),
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating update campaigns. Update campaigns are used to control firmware update to a list of devices specified by a filter.  &lt;/p&gt; &lt;p&gt;Show the status of an update campaign&lt;/p&gt;
     * @param campaignId The ID of the update campaign
     */
    updateCampaignStatus (campaignId: string, callback?: (error:any, data?:UpdateCampaignStatusSerializer, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "campaignId" is set
        if (campaignId === null || campaignId === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'campaignId' missing when calling 'updateCampaignStatus'."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/update-campaigns/{campaign_id}/status/'.replace('{' + 'campaign_id' + '}', String(campaignId)),
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating update campaigns. Update campaigns are used to control firmware update to a list of devices specified by a filter.  &lt;/p&gt; &lt;p&gt;Update campaign&lt;/p&gt;
     * @param campaignId Campaign ID to update
     * @param body Update campaign object to create
     */
    updateCampaignUpdate (campaignId: string, body: WriteUpdateCampaignSerializer, callback?: (error:any, data?:UpdateCampaignSerializer, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "campaignId" is set
        if (campaignId === null || campaignId === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'campaignId' missing when calling 'updateCampaignUpdate'."));
            }
            return;
        }
        // verify required parameter "body" is set
        if (body === null || body === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'body' missing when calling 'updateCampaignUpdate'."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/update-campaigns/{campaign_id}/'.replace('{' + 'campaign_id' + '}', String(campaignId)),
            method: 'PUT',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
            body: body,
        }, callback);
    }
}

