"use strict";
var iam_1 = require("../_api/iam");
var Api = (function () {
    function Api(options) {
        this.default = new iam_1.DefaultApi(options.host);
        this.developer = new iam_1.DeveloperApi(options.host);
        this.admin = new iam_1.AccountAdminApi(options.host);
        this.root = new iam_1.RootAdminApi(options.host);
        this.default.setApiKey(iam_1.DefaultApiApiKeys.Bearer, "Bearer " + options.accessKey);
        this.developer.setApiKey(iam_1.DeveloperApiApiKeys.Bearer, "Bearer " + options.accessKey);
        this.admin.setApiKey(iam_1.AccountAdminApiApiKeys.Bearer, "Bearer " + options.accessKey);
        this.root.setApiKey(iam_1.RootAdminApiApiKeys.Bearer, "Bearer " + options.accessKey);
    }
    return Api;
}());
exports.Api = Api;
