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

import { exists, mapValues } from '../runtime'
/**
 *
 * @export
 * @interface TagSerializerPut
 */
export interface TagSerializerPut {
  /**
   *
   * @type {string}
   * @memberof TagSerializerPut
   */
  name?: string
}

export function TagSerializerPutFromJSON(json: any): TagSerializerPut {
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
  }
}

export function TagSerializerPutToJSON(value?: TagSerializerPut): any {
  if (value === undefined) {
    return undefined
  }
  return {
    name: value.name,
  }
}
