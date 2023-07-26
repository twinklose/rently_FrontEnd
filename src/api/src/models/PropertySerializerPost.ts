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
 * @interface PropertySerializerPost
 */
export interface PropertySerializerPost {
  /**
   *
   * @type {string}
   * @memberof PropertySerializerPost
   */
  name?: string
  /**
   *
   * @type {string}
   * @memberof PropertySerializerPost
   */
  description?: string
  /**
   *
   * @type {string}
   * @memberof PropertySerializerPost
   */
  signatureDate?: string
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  propertyType?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  price?: number
  /**
   *
   * @type {string}
   * @memberof PropertySerializerPost
   */
  surface?: string
  /**
   *
   * @type {string}
   * @memberof PropertySerializerPost
   */
  landSize?: string
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  bathroom?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  kitchen?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  toilet?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  bedroom?: number
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  elevator?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  balcony?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  terrace?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  cellar?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  parking?: boolean
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  numberRoom?: number
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  pool?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  caretaker?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  fiberDeployed?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  duplex?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  topFloor?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  garage?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  workDone?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  lifeAnnuity?: boolean
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  groundFloor?: boolean
  /**
   *
   * @type {string}
   * @memberof PropertySerializerPost
   */
  landSize1?: string
  /**
   *
   * @type {boolean}
   * @memberof PropertySerializerPost
   */
  garden?: boolean
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  ownerId?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  statusId?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  tenantId?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  addressId?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  dpe?: number
  /**
   *
   * @type {number}
   * @memberof PropertySerializerPost
   */
  agencyId?: number
}

export function PropertySerializerPostFromJSON(
  json: any,
): PropertySerializerPost {
  return {
    name: !exists(json, 'name') ? undefined : json['name'],
    description: !exists(json, 'description') ? undefined : json['description'],
    signatureDate: !exists(json, 'signature_date')
      ? undefined
      : json['signature_date'],
    propertyType: !exists(json, 'property_type')
      ? undefined
      : json['property_type'],
    price: !exists(json, 'price') ? undefined : json['price'],
    surface: !exists(json, 'surface') ? undefined : json['surface'],
    landSize: !exists(json, 'land_size') ? undefined : json['land_size'],
    bathroom: !exists(json, 'bathroom') ? undefined : json['bathroom'],
    kitchen: !exists(json, 'kitchen') ? undefined : json['kitchen'],
    toilet: !exists(json, 'toilet') ? undefined : json['toilet'],
    bedroom: !exists(json, 'bedroom') ? undefined : json['bedroom'],
    elevator: !exists(json, 'elevator') ? undefined : json['elevator'],
    balcony: !exists(json, 'balcony') ? undefined : json['balcony'],
    terrace: !exists(json, 'terrace') ? undefined : json['terrace'],
    cellar: !exists(json, 'cellar') ? undefined : json['cellar'],
    parking: !exists(json, 'parking') ? undefined : json['parking'],
    numberRoom: !exists(json, 'number_room') ? undefined : json['number_room'],
    pool: !exists(json, 'pool') ? undefined : json['pool'],
    caretaker: !exists(json, 'caretaker') ? undefined : json['caretaker'],
    fiberDeployed: !exists(json, 'fiber_deployed')
      ? undefined
      : json['fiber_deployed'],
    duplex: !exists(json, 'duplex') ? undefined : json['duplex'],
    topFloor: !exists(json, 'top_floor') ? undefined : json['top_floor'],
    garage: !exists(json, 'garage') ? undefined : json['garage'],
    workDone: !exists(json, 'work_done') ? undefined : json['work_done'],
    lifeAnnuity: !exists(json, 'life_annuity')
      ? undefined
      : json['life_annuity'],
    groundFloor: !exists(json, 'ground_floor')
      ? undefined
      : json['ground_floor'],
    landSize1: !exists(json, 'land_size_1') ? undefined : json['land_size_1'],
    garden: !exists(json, 'garden') ? undefined : json['garden'],
    ownerId: !exists(json, 'owner_id') ? undefined : json['owner_id'],
    statusId: !exists(json, 'status_id') ? undefined : json['status_id'],
    tenantId: !exists(json, 'tenant_id') ? undefined : json['tenant_id'],
    addressId: !exists(json, 'address_id') ? undefined : json['address_id'],
    dpe: !exists(json, 'dpe') ? undefined : json['dpe'],
    agencyId: !exists(json, 'agency_id') ? undefined : json['agency_id'],
  }
}

export function PropertySerializerPostToJSON(
  value?: PropertySerializerPost,
): any {
  if (value === undefined) {
    return undefined
  }
  return {
    name: value.name,
    description: value.description,
    signature_date: value.signatureDate,
    property_type: value.propertyType,
    price: value.price,
    surface: value.surface,
    land_size: value.landSize,
    bathroom: value.bathroom,
    kitchen: value.kitchen,
    toilet: value.toilet,
    bedroom: value.bedroom,
    elevator: value.elevator,
    balcony: value.balcony,
    terrace: value.terrace,
    cellar: value.cellar,
    parking: value.parking,
    number_room: value.numberRoom,
    pool: value.pool,
    caretaker: value.caretaker,
    fiber_deployed: value.fiberDeployed,
    duplex: value.duplex,
    top_floor: value.topFloor,
    garage: value.garage,
    work_done: value.workDone,
    life_annuity: value.lifeAnnuity,
    ground_floor: value.groundFloor,
    land_size_1: value.landSize1,
    garden: value.garden,
    owner_id: value.ownerId,
    status_id: value.statusId,
    tenant_id: value.tenantId,
    address_id: value.addressId,
    dpe: value.dpe,
    agency_id: value.agencyId,
  }
}
