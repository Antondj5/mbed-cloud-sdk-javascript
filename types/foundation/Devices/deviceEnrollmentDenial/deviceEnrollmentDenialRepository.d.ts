import { Repository } from "../../../common/repository";
import { DeviceEnrollmentDenial } from "./deviceEnrollmentDenial";
import { DeviceEnrollmentDenialListOptions } from "./types";
import { Paginator } from "../../../index";
import { ListOptions } from "../../../common";
/**
 *DeviceEnrollmentDenial repository
 */
export declare class DeviceEnrollmentDenialRepository extends Repository {
    /**
     * list
     * @param options - Options to use for the List
     */
    list(options?: DeviceEnrollmentDenialListOptions): Paginator<DeviceEnrollmentDenial, ListOptions>;
    /**
     * read
     * @param deviceEnrollmentDenialId - id of the recorded failed bootstrap attempt
     */
    read(deviceEnrollmentDenialId: string): Promise<DeviceEnrollmentDenial>;
}