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
var adapter_1 = require("../../../common/adapter");
var __1 = require("../..");
var __2 = require("../..");
var __3 = require("../..");
/**
 *SubtenantUser adapter
 */
var SubtenantUserAdapter = /** @class */ (function (_super) {
    __extends(SubtenantUserAdapter, _super);
    function SubtenantUserAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * fromApi
     * @param data - data
     * @param instance - instance
     */
    SubtenantUserAdapter.fromApi = function (data, instance) {
        if (!data) {
            return null;
        }
        var activeSessions = [];
        if (data.active_sessions) {
            activeSessions = data.active_sessions.map(function (i) { return __1.ActiveSessionAdapter.fromApi(i); });
        }
        var loginHistory = [];
        if (data.login_history) {
            loginHistory = data.login_history.map(function (i) { return __2.LoginHistoryAdapter.fromApi(i); });
        }
        var loginProfiles = [];
        if (data.login_profiles) {
            loginProfiles = data.login_profiles.map(function (i) { return __3.LoginProfileAdapter.fromApi(i); });
        }
        var mappedEntity = SubtenantUserAdapter.assignDefined(instance || {}, {
            _discriminator: "SUBTENANT_USER",
            accountId: data.account_id,
            activeSessions: activeSessions,
            address: data.address,
            createdAt: data.created_at,
            creationTime: data.creation_time,
            customFields: data.custom_fields,
            email: data.email,
            emailVerified: data.email_verified,
            fullName: data.full_name,
            groups: data.groups,
            id: data.id,
            isGtcAccepted: data.is_gtc_accepted,
            isMarketingAccepted: data.is_marketing_accepted,
            isTotpEnabled: data.is_totp_enabled,
            lastLoginTime: data.last_login_time,
            loginHistory: loginHistory,
            loginProfiles: loginProfiles,
            password: data.password,
            passwordChangedTime: data.password_changed_time,
            phoneNumber: data.phone_number,
            status: data.status,
            totpScratchCodes: data.totp_scratch_codes,
            updatedAt: data.updated_at,
            username: data.username,
        });
        return mappedEntity;
    };
    return SubtenantUserAdapter;
}(adapter_1.Adapter));
exports.SubtenantUserAdapter = SubtenantUserAdapter;
//# sourceMappingURL=subtenantUserAdapter.js.map