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
import {
    UserAddressGeo,
    UserAddressGeoFromJSON,
    UserAddressGeoFromJSONTyped,
    UserAddressGeoToJSON,
} from './UserAddressGeo';

/**
 * 
 * @export
 * @interface UserAddress
 */
export interface UserAddress {
    /**
     * 
     * @type {string}
     * @memberof UserAddress
     */
    street: string;
    /**
     * 
     * @type {string}
     * @memberof UserAddress
     */
    suite: string;
    /**
     * 
     * @type {string}
     * @memberof UserAddress
     */
    city: string;
    /**
     * 
     * @type {string}
     * @memberof UserAddress
     */
    zipcode: string;
    /**
     * 
     * @type {UserAddressGeo}
     * @memberof UserAddress
     */
    geo: UserAddressGeo;
}

export function UserAddressFromJSON(json: any): UserAddress {
    return UserAddressFromJSONTyped(json, false);
}

export function UserAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'street': json['street'],
        'suite': json['suite'],
        'city': json['city'],
        'zipcode': json['zipcode'],
        'geo': UserAddressGeoFromJSON(json['geo']),
    };
}

export function UserAddressToJSON(value?: UserAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'street': value.street,
        'suite': value.suite,
        'city': value.city,
        'zipcode': value.zipcode,
        'geo': UserAddressGeoToJSON(value.geo),
    };
}

