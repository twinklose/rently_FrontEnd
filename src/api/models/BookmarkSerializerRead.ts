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
 * @interface BookmarkSerializerRead
 */
export interface BookmarkSerializerRead {
  /**
   *
   * @type {number}
   * @memberof BookmarkSerializerRead
   */
  bookmarkId?: number
  /**
   *
   * @type {number}
   * @memberof BookmarkSerializerRead
   */
  userId?: number
  /**
   *
   * @type {number}
   * @memberof BookmarkSerializerRead
   */
  propertyId?: number
}

export function BookmarkSerializerReadFromJSON(
  json: any,
): BookmarkSerializerRead {
  return {
    bookmarkId: !exists(json, 'bookmark_id') ? undefined : json['bookmark_id'],
    userId: !exists(json, 'user_id') ? undefined : json['user_id'],
    propertyId: !exists(json, 'property_id') ? undefined : json['property_id'],
  }
}

export function BookmarkSerializerReadToJSON(
  value?: BookmarkSerializerRead,
): any {
  if (value === undefined) {
    return undefined
  }
  return {
    bookmark_id: value.bookmarkId,
    user_id: value.userId,
    property_id: value.propertyId,
  }
}
