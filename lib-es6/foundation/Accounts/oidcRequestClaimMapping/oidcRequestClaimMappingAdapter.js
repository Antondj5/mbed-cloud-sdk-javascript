import { Adapter } from "../../../common/adapter";
/**
 *OidcRequestClaimMapping adapter
 */
export class OidcRequestClaimMappingAdapter extends Adapter {
    /**
     * fromApi
     * @param data - data
     * @param instance - instance
     */
    static fromApi(data, instance) {
        if (!data) {
            return null;
        }
        const mappedEntity = OidcRequestClaimMappingAdapter.assignDefined(instance || {}, {
            _discriminator: "OIDC_REQUEST_CLAIM_MAPPING",
            email: data.email,
            emailVerified: data.email_verified,
            familyName: data.family_name,
            givenName: data.given_name,
            name: data.name,
            phoneNumber: data.phone_number,
            sub: data.sub,
            updatedAt: data.updated_at,
            updatedAtPattern: data.updated_at_pattern,
        });
        return mappedEntity;
    }
}
//# sourceMappingURL=oidcRequestClaimMappingAdapter.js.map