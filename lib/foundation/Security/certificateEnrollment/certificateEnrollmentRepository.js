"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var repository_1 = require("../../../common/repository");
var functions_1 = require("../../../legacy/common/functions");
var filters_1 = require("../../../common/filters");
var index_1 = require("../../index");
var index_2 = require("../../../index");
/**
 *CertificateEnrollment repository
 */
var CertificateEnrollmentRepository = /** @class */ (function (_super) {
    __extends(CertificateEnrollmentRepository, _super);
    function CertificateEnrollmentRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * list
     * @param options - Options to use for the List
     */
    CertificateEnrollmentRepository.prototype.list = function (options) {
        var _this = this;
        var pageFunc = function (pageOptions) {
            pageOptions = pageOptions || {};
            return functions_1.apiWrapper(function (resultsFn) {
                _this.client._CallApi({
                    url: "/v3/certificate-enrollments",
                    method: "GET",
                    query: {
                        device_id__eq: filters_1.extractFilter(pageOptions.filter, "deviceId", "eq"),
                        certificate_name__eq: filters_1.extractFilter(pageOptions.filter, "certificateName", "eq"),
                        enroll_status__neq: filters_1.extractFilter(pageOptions.filter, "enrollStatus", "neq"),
                        enroll_status__eq: filters_1.extractFilter(pageOptions.filter, "enrollStatus", "eq"),
                        enroll_result__neq: filters_1.extractFilter(pageOptions.filter, "enrollResult", "neq"),
                        enroll_result__eq: filters_1.extractFilter(pageOptions.filter, "enrollResult", "eq"),
                        created_at__lte: filters_1.extractFilter(pageOptions.filter, "createdAt", "lte"),
                        created_at__gte: filters_1.extractFilter(pageOptions.filter, "createdAt", "gte"),
                        updated_at__lte: filters_1.extractFilter(pageOptions.filter, "updatedAt", "lte"),
                        updated_at__gte: filters_1.extractFilter(pageOptions.filter, "updatedAt", "gte"),
                        after: pageOptions.after,
                        include: pageOptions.include,
                        limit: pageOptions.limit,
                        order: pageOptions.order,
                    },
                }, resultsFn);
            }, function (data, done) {
                done(null, new index_2.Page(data, data.data, index_1.CertificateEnrollmentAdapter.fromApi, pageOptions));
            }, null);
        };
        return new index_2.Paginator(pageFunc, options);
    };
    /**
     * read
     * @param id - The certificate enrollment ID.
     */
    CertificateEnrollmentRepository.prototype.read = function (id) {
        var _this = this;
        return functions_1.apiWrapper(function (resultsFn) {
            _this.client._CallApi({
                url: "/v3/certificate-enrollments/{certificate-enrollment-id}",
                method: "GET",
                pathParams: {
                    "certificate-enrollment-id": id,
                },
            }, resultsFn);
        }, function (data, done) {
            done(null, index_1.CertificateEnrollmentAdapter.fromApi(data));
        });
    };
    return CertificateEnrollmentRepository;
}(repository_1.Repository));
exports.CertificateEnrollmentRepository = CertificateEnrollmentRepository;
//# sourceMappingURL=certificateEnrollmentRepository.js.map