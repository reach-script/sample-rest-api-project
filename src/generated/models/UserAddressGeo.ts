/* tslint:disable */
/* eslint-disable */
/**
 * User
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UserAddressGeo
 */
export interface UserAddressGeo {
    /**
     * 
     * @type {string}
     * @memberof UserAddressGeo
     */
    lat: string;
    /**
     * 
     * @type {string}
     * @memberof UserAddressGeo
     */
    lng: string;
}

export function UserAddressGeoFromJSON(json: any): UserAddressGeo {
    return UserAddressGeoFromJSONTyped(json, false);
}

export function UserAddressGeoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserAddressGeo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lat': json['lat'],
        'lng': json['lng'],
    };
}

export function UserAddressGeoToJSON(value?: UserAddressGeo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lat': value.lat,
        'lng': value.lng,
    };
}

