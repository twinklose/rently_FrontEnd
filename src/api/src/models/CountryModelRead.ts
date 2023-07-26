// tslint:disable
/**
 * Api documentation
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
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
 * @interface CountryModelRead
 */
export interface CountryModelRead  {
    /**
     * 
     * @type {number}
     * @memberof CountryModelRead
     */
    countryId?: number;
    /**
     * 
     * @type {string}
     * @memberof CountryModelRead
     */
    name?: string;
}

export function CountryModelReadFromJSON(json: any): CountryModelRead {
    return {
        'countryId': !exists(json, 'country_id') ? undefined : json['country_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function CountryModelReadToJSON(value?: CountryModelRead): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'country_id': value.countryId,
        'name': value.name,
    };
}


