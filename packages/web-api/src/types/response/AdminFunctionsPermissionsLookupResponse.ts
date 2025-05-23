/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import type { WebAPICallResult } from '../../WebClient';
export type AdminFunctionsPermissionsLookupResponse = WebAPICallResult & {
  error?: string;
  errors?: Errors;
  metadata?: { [key: string]: Errors };
  needed?: string;
  ok?: boolean;
  permissions?: { [key: string]: Permission };
  provided?: string;
  response_metadata?: ResponseMetadata;
};

export type Errors = {};

export interface Permission {
  allowed_by_admin?: AllowedByAdmin;
  allowed_entities?: AllowedEntities;
  distribution?: AllowedByAdmin;
}

export interface AllowedByAdmin {
  type?: string;
  user_ids?: string[];
}

export interface AllowedEntities {
  channel_ids?: string[];
  org_ids?: string[];
  team_ids?: string[];
  type?: string;
  user_ids?: string[];
}

export interface ResponseMetadata {
  messages?: string[];
}
