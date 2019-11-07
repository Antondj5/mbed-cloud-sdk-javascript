/// <reference types="node" />
import { ReadStream } from "fs";
import { ListOptions } from "../../../common";
import { Repository } from "../../../common/repository";
import { Paginator } from "../../../index";
import { FirmwareManifest } from "./firmwareManifest";
import { FirmwareManifestListOptions } from "./types";
/**
 *FirmwareManifest repository
 */
export declare class FirmwareManifestRepository extends Repository {
    /**
     * create
     * @param firmwareManifestFile - The manifest file to create. The API gateway enforces the account-specific file size.
     */
    create(firmwareManifestFile: ReadStream | Buffer | File | Blob, options?: {
        description?: string;
        keyTableFile?: ReadStream | Buffer | File | Blob;
        name?: string;
    }): Promise<FirmwareManifest>;
    /**
     * delete
     * @param id - The firmware manifest ID.
     */
    delete(id: string): Promise<void>;
    /**
     * list
     * @param options - Options to use for the List
     */
    list(options?: FirmwareManifestListOptions): Paginator<FirmwareManifest, ListOptions>;
    /**
     * read
     * @param id - The firmware manifest ID.
     */
    read(id: string): Promise<FirmwareManifest>;
}