import { Repository } from "../../../common/repository";
import { apiWrapper } from "../../../legacy/common/functions";
import { DeviceEnrollmentBulkDeleteAdapter } from "../../index";
import { downloadErrorsReportFile } from "../../../common/privateFunctions";
import { downloadFullReportFile } from "../../../common/privateFunctions";
/**
 *DeviceEnrollmentBulkDelete repository
 */
export class DeviceEnrollmentBulkDeleteRepository extends Repository {
    /**
     * delete
     * @param enrollmentIdentities - The `CSV` file containing the enrollment IDs. The maximum file size is 10MB.
     */
    delete(enrollmentIdentities) {
        return apiWrapper(resultsFn => {
            this.client._CallApi({
                url: "/v3/device-enrollments-bulk-deletes",
                method: "POST",
                formParams: {
                    enrollment_identities: enrollmentIdentities,
                },
                contentTypes: ["multipart/form-data"],
            }, resultsFn);
        }, (data, done) => {
            done(null, DeviceEnrollmentBulkDeleteAdapter.fromApi(data));
        });
    }
    /**
     * downloadErrorsReportFile
     * @param model - model
     */
    downloadErrorsReportFile(model) {
        return downloadErrorsReportFile(this, model);
    }
    /**
     * downloadFullReportFile
     * @param model - model
     */
    downloadFullReportFile(model) {
        return downloadFullReportFile(this, model);
    }
    /**
     * read
     * @param id - Bulk ID
     */
    read(id) {
        return apiWrapper(resultsFn => {
            this.client._CallApi({
                url: "/v3/device-enrollments-bulk-deletes/{id}",
                method: "GET",
                pathParams: {
                    id: id,
                },
            }, resultsFn);
        }, (data, done) => {
            done(null, DeviceEnrollmentBulkDeleteAdapter.fromApi(data));
        });
    }
}
//# sourceMappingURL=deviceEnrollmentBulkDeleteRepository.js.map