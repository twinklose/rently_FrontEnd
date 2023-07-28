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

import { exists } from '../runtime'
/**
 *
 * @export
 * @interface FeeSerializerRead
 */
export interface FeeSerializerRead {
  /**
   *
   * @type {number}
   * @memberof FeeSerializerRead
   */
  fee_id?: number
  /**
   *
   * @type {string}
   * @memberof FeeSerializerRead
   */
  rent_fee?: string
  /**
   *
   * @type {string}
   * @memberof FeeSerializerRead
   */
  sell_fee?: string
  /**
   *
   * @type {string}
   * @memberof FeeSerializerRead
   */
  square_fee?: string
  /**
   *
   * @type {string}
   * @memberof FeeSerializerRead
   */
  gestion_fee?: string
}

export function FeeSerializerReadFromJSON(json: any): FeeSerializerRead {
  return {
    fee_id: !exists(json, 'fee_id') ? undefined : json['fee_id'],
    rent_fee: !exists(json, 'rent_fee') ? undefined : json['rent_fee'],
    sell_fee: !exists(json, 'sell_fee') ? undefined : json['sell_fee'],
    square_fee: !exists(json, 'square_fee') ? undefined : json['square_fee'],
    gestion_fee: !exists(json, 'gestion_fee') ? undefined : json['gestion_fee'],
  }
}

export function FeeSerializerReadToJSON(value?: FeeSerializerRead): any {
  if (value === undefined) {
    return undefined
  }
  return {
    fee_id: value.fee_id,
    rent_fee: value.rent_fee,
    sell_fee: value.sell_fee,
    square_fee: value.square_fee,
    gestion_fee: value.gestion_fee,
  }
}
