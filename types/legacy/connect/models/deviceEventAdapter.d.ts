import { EndpointData as apiDeviceEvent, ResourcesData as apiResourceEvent } from "../../_api/mds";
import { DeviceEvent, DeviceEventEnum } from "../types";
import { Resource } from "./resource";
/**
 * Device Event Adapter
 */
export declare class DeviceEventAdapter {
    static mapResource(from: apiResourceEvent, deviceId: string): Resource;
    static map(from: apiDeviceEvent, event: DeviceEventEnum): DeviceEvent<Resource>;
    static mapId(from: string, event: DeviceEventEnum): DeviceEvent<Resource>;
}
