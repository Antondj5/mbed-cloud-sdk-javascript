"use strict";
function decodeBase64(data) {
    var result = "";
    if (typeof atob === "function") {
        result = atob(data.payload);
    }
    else {
        result = new Buffer(data.payload, "base64").toString("utf8");
    }
    if (data.ct.indexOf("json") > -1) {
        result = JSON.parse(result);
    }
    return result;
}
exports.decodeBase64 = decodeBase64;
function mapListResponse(from, to) {
    to = to || {};
    to.after = from.after;
    to.data = from.data;
    to.hasMore = from.has_more;
    to.limit = from.limit;
    to.order = from.order;
    to.totalCount = from.total_count;
    return to;
}
exports.mapListResponse = mapListResponse;