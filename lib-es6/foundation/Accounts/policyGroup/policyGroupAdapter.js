import { Adapter } from "../../../common/adapter";
/**
 *PolicyGroup adapter
 */
export class PolicyGroupAdapter extends Adapter {
    /**
     * fromApi
     * @param data - data
     * @param instance - instance
     */
    static fromApi(data, instance) {
        if (!data) {
            return null;
        }
        const mappedEntity = PolicyGroupAdapter.assignDefined(instance || {}, {
            _discriminator: "POLICY_GROUP",
            accountId: data.account_id,
            apikeyCount: data.apikey_count || undefined,
            createdAt: data.created_at,
            id: data.id,
            name: data.name,
            updatedAt: data.updated_at,
            userCount: data.user_count || undefined,
        });
        return mappedEntity;
    }
}
//# sourceMappingURL=policyGroupAdapter.js.map