/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRequestAccessInput = {
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
  phone?: string | null;
  companyName?: string | null;
  iPolicy?: boolean | null;
  iNews?: boolean | null;
  createdAt?: string | null;
};

export type ModelRequestAccessConditionInput = {
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  companyName?: ModelStringInput | null;
  iPolicy?: ModelBooleanInput | null;
  iNews?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelRequestAccessConditionInput | null> | null;
  or?: Array<ModelRequestAccessConditionInput | null> | null;
  not?: ModelRequestAccessConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type RequestAccess = {
  __typename: 'RequestAccess';
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
  phone?: string | null;
  companyName?: string | null;
  iPolicy?: boolean | null;
  iNews?: boolean | null;
  createdAt?: string | null;
  updatedAt: string;
};

export type UpdateRequestAccessInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  companyName?: string | null;
  iPolicy?: boolean | null;
  iNews?: boolean | null;
  createdAt?: string | null;
};

export type DeleteRequestAccessInput = {
  id: string;
};

export type CreateWebContactUsInput = {
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
  phone?: string | null;
  service?: string | null;
  message?: string | null;
  createdAt?: string | null;
};

export type ModelWebContactUsConditionInput = {
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  service?: ModelStringInput | null;
  message?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelWebContactUsConditionInput | null> | null;
  or?: Array<ModelWebContactUsConditionInput | null> | null;
  not?: ModelWebContactUsConditionInput | null;
};

export type WebContactUs = {
  __typename: 'WebContactUs';
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
  phone?: string | null;
  service?: string | null;
  message?: string | null;
  createdAt?: string | null;
  updatedAt: string;
};

export type UpdateWebContactUsInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  service?: string | null;
  message?: string | null;
  createdAt?: string | null;
};

export type DeleteWebContactUsInput = {
  id: string;
};

export type CreateBusinessAnglesContactUsInput = {
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
  phone?: string | null;
  startUpName?: string | null;
  aboutCompany?: string | null;
  createdAt?: string | null;
};

export type ModelBusinessAnglesContactUsConditionInput = {
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  startUpName?: ModelStringInput | null;
  aboutCompany?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelBusinessAnglesContactUsConditionInput | null> | null;
  or?: Array<ModelBusinessAnglesContactUsConditionInput | null> | null;
  not?: ModelBusinessAnglesContactUsConditionInput | null;
};

export type BusinessAnglesContactUs = {
  __typename: 'BusinessAnglesContactUs';
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
  phone?: string | null;
  startUpName?: string | null;
  aboutCompany?: string | null;
  createdAt?: string | null;
  updatedAt: string;
};

export type UpdateBusinessAnglesContactUsInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  startUpName?: string | null;
  aboutCompany?: string | null;
  createdAt?: string | null;
};

export type DeleteBusinessAnglesContactUsInput = {
  id: string;
};

export type CreateCandidateLeadInput = {
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
  phone?: string | null;
  address?: string | null;
  country?: string | null;
  positionTitle?: string | null;
  position?: JobPositions | null;
  positionType?: JobTypes | null;
  positionLevel?: PositionLevels | null;
  heardAboutOffer?: string | null;
  createdAt?: string | null;
};

export enum JobPositions {
  FULLSTACK = 'FULLSTACK',
  FRONTEND = 'FRONTEND',
  BACKEND = 'BACKEND',
  IOS_DEVELOPER = 'IOS_DEVELOPER',
  SWIFT = 'SWIFT',
  FULLSTACK_MERN = 'FULLSTACK_MERN',
  FULLSTACK_MEAN = 'FULLSTACK_MEAN',
  RUBY_ON_RAILS = 'RUBY_ON_RAILS',
  NODEJS = 'NODEJS',
  PYTHON_DJANGO = 'PYTHON_DJANGO',
  PHP = 'PHP',
}

export enum JobTypes {
  FULLTIME = 'FULLTIME',
  PART_TIME = 'PART_TIME',
  SHIFTING = 'SHIFTING',
  MID_SHIFT = 'MID_SHIFT',
  HOURLY = 'HOURLY',
  PROJECT = 'PROJECT',
}

export enum PositionLevels {
  SENIOR = 'SENIOR',
  MID = 'MID',
  JUNIOR = 'JUNIOR',
}

export type ModelCandidateLeadConditionInput = {
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  address?: ModelStringInput | null;
  country?: ModelStringInput | null;
  positionTitle?: ModelStringInput | null;
  position?: ModelJobPositionsInput | null;
  positionType?: ModelJobTypesInput | null;
  positionLevel?: ModelPositionLevelsInput | null;
  heardAboutOffer?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelCandidateLeadConditionInput | null> | null;
  or?: Array<ModelCandidateLeadConditionInput | null> | null;
  not?: ModelCandidateLeadConditionInput | null;
};

export type ModelJobPositionsInput = {
  eq?: JobPositions | null;
  ne?: JobPositions | null;
};

export type ModelJobTypesInput = {
  eq?: JobTypes | null;
  ne?: JobTypes | null;
};

export type ModelPositionLevelsInput = {
  eq?: PositionLevels | null;
  ne?: PositionLevels | null;
};

export type CandidateLead = {
  __typename: 'CandidateLead';
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
  phone?: string | null;
  address?: string | null;
  country?: string | null;
  positionTitle?: string | null;
  position?: JobPositions | null;
  positionType?: JobTypes | null;
  positionLevel?: PositionLevels | null;
  heardAboutOffer?: string | null;
  resume?: ModelCandidateResumeConnection | null;
  createdAt?: string | null;
  updatedAt: string;
};

export type ModelCandidateResumeConnection = {
  __typename: 'ModelCandidateResumeConnection';
  items: Array<CandidateResume>;
  nextToken?: string | null;
};

export type CandidateResume = {
  __typename: 'CandidateResume';
  id: string;
  candidateId: string;
  candidate?: CandidateLead | null;
  name: string;
  file?: S3Object | null;
  createdAt?: string | null;
  updatedAt: string;
};

export type S3Object = {
  __typename: 'S3Object';
  bucket: string;
  region: string;
  key: string;
};

export type UpdateCandidateLeadInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
  country?: string | null;
  positionTitle?: string | null;
  position?: JobPositions | null;
  positionType?: JobTypes | null;
  positionLevel?: PositionLevels | null;
  heardAboutOffer?: string | null;
  createdAt?: string | null;
};

export type DeleteCandidateLeadInput = {
  id: string;
};

export type CreateCandidateResumeInput = {
  id?: string | null;
  candidateId: string;
  name: string;
  file?: S3ObjectInput | null;
  createdAt?: string | null;
};

export type S3ObjectInput = {
  bucket: string;
  region: string;
  key: string;
};

export type ModelCandidateResumeConditionInput = {
  candidateId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelCandidateResumeConditionInput | null> | null;
  or?: Array<ModelCandidateResumeConditionInput | null> | null;
  not?: ModelCandidateResumeConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateCandidateResumeInput = {
  id: string;
  candidateId?: string | null;
  name?: string | null;
  file?: S3ObjectInput | null;
  createdAt?: string | null;
};

export type DeleteCandidateResumeInput = {
  id: string;
};

export type CreateAppUserInput = {
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
  phone?: string | null;
  role?: Roles | null;
  userStatus?: UserStatus | null;
  iAgree?: boolean | null;
  createdAt?: string | null;
};

export enum Roles {
  ADMIN = 'ADMIN',
  STAFF = 'STAFF',
  HR = 'HR',
  CLIENT = 'CLIENT',
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
  TERMINATED = 'TERMINATED',
}

export type ModelAppUserConditionInput = {
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  role?: ModelRolesInput | null;
  userStatus?: ModelUserStatusInput | null;
  iAgree?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelAppUserConditionInput | null> | null;
  or?: Array<ModelAppUserConditionInput | null> | null;
  not?: ModelAppUserConditionInput | null;
};

export type ModelRolesInput = {
  eq?: Roles | null;
  ne?: Roles | null;
};

export type ModelUserStatusInput = {
  eq?: UserStatus | null;
  ne?: UserStatus | null;
};

export type AppUser = {
  __typename: 'AppUser';
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
  phone?: string | null;
  role?: Roles | null;
  userStatus?: UserStatus | null;
  iAgree?: boolean | null;
  profilePics?: ModelProfilePicsConnection | null;
  createdAt?: string | null;
  updatedAt: string;
  owner?: string | null;
};

export type ModelProfilePicsConnection = {
  __typename: 'ModelProfilePicsConnection';
  items: Array<ProfilePics>;
  nextToken?: string | null;
};

export type ProfilePics = {
  __typename: 'ProfilePics';
  id: string;
  appUserId: string;
  appUser?: AppUser | null;
  name: string;
  file?: S3Object | null;
  default?: boolean | null;
  createdAt?: string | null;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateAppUserInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  role?: Roles | null;
  userStatus?: UserStatus | null;
  iAgree?: boolean | null;
  createdAt?: string | null;
};

export type DeleteAppUserInput = {
  id: string;
};

export type CreateProfilePicsInput = {
  id?: string | null;
  appUserId: string;
  name: string;
  file?: S3ObjectInput | null;
  default?: boolean | null;
  createdAt?: string | null;
};

export type ModelProfilePicsConditionInput = {
  appUserId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  default?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelProfilePicsConditionInput | null> | null;
  or?: Array<ModelProfilePicsConditionInput | null> | null;
  not?: ModelProfilePicsConditionInput | null;
};

export type UpdateProfilePicsInput = {
  id: string;
  appUserId?: string | null;
  name?: string | null;
  file?: S3ObjectInput | null;
  default?: boolean | null;
  createdAt?: string | null;
};

export type DeleteProfilePicsInput = {
  id: string;
};

export type ModelAppUserFilterInput = {
  id?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  role?: ModelRolesInput | null;
  userStatus?: ModelUserStatusInput | null;
  iAgree?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelAppUserFilterInput | null> | null;
  or?: Array<ModelAppUserFilterInput | null> | null;
  not?: ModelAppUserFilterInput | null;
};

export type ModelAppUserConnection = {
  __typename: 'ModelAppUserConnection';
  items: Array<AppUser>;
  nextToken?: string | null;
};

export type ModelProfilePicsFilterInput = {
  id?: ModelIDInput | null;
  appUserId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  default?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelProfilePicsFilterInput | null> | null;
  or?: Array<ModelProfilePicsFilterInput | null> | null;
  not?: ModelProfilePicsFilterInput | null;
};

export type ModelRequestAccessFilterInput = {
  id?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  companyName?: ModelStringInput | null;
  iPolicy?: ModelBooleanInput | null;
  iNews?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelRequestAccessFilterInput | null> | null;
  or?: Array<ModelRequestAccessFilterInput | null> | null;
  not?: ModelRequestAccessFilterInput | null;
};

export type ModelRequestAccessConnection = {
  __typename: 'ModelRequestAccessConnection';
  items: Array<RequestAccess>;
  nextToken?: string | null;
};

export type ModelWebContactUsFilterInput = {
  id?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  service?: ModelStringInput | null;
  message?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelWebContactUsFilterInput | null> | null;
  or?: Array<ModelWebContactUsFilterInput | null> | null;
  not?: ModelWebContactUsFilterInput | null;
};

export type ModelWebContactUsConnection = {
  __typename: 'ModelWebContactUsConnection';
  items: Array<WebContactUs>;
  nextToken?: string | null;
};

export type ModelBusinessAnglesContactUsFilterInput = {
  id?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  startUpName?: ModelStringInput | null;
  aboutCompany?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelBusinessAnglesContactUsFilterInput | null> | null;
  or?: Array<ModelBusinessAnglesContactUsFilterInput | null> | null;
  not?: ModelBusinessAnglesContactUsFilterInput | null;
};

export type ModelBusinessAnglesContactUsConnection = {
  __typename: 'ModelBusinessAnglesContactUsConnection';
  items: Array<BusinessAnglesContactUs>;
  nextToken?: string | null;
};

export type ModelCandidateLeadFilterInput = {
  id?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  address?: ModelStringInput | null;
  country?: ModelStringInput | null;
  positionTitle?: ModelStringInput | null;
  position?: ModelJobPositionsInput | null;
  positionType?: ModelJobTypesInput | null;
  positionLevel?: ModelPositionLevelsInput | null;
  heardAboutOffer?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelCandidateLeadFilterInput | null> | null;
  or?: Array<ModelCandidateLeadFilterInput | null> | null;
  not?: ModelCandidateLeadFilterInput | null;
};

export type ModelCandidateLeadConnection = {
  __typename: 'ModelCandidateLeadConnection';
  items: Array<CandidateLead>;
  nextToken?: string | null;
};

export type ModelCandidateResumeFilterInput = {
  id?: ModelIDInput | null;
  candidateId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelCandidateResumeFilterInput | null> | null;
  or?: Array<ModelCandidateResumeFilterInput | null> | null;
  not?: ModelCandidateResumeFilterInput | null;
};

export enum ModelSortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type CreateRequestAccessMutationVariables = {
  input: CreateRequestAccessInput;
  condition?: ModelRequestAccessConditionInput | null;
};

export type CreateRequestAccessMutation = {
  createRequestAccess?: {
    __typename: 'RequestAccess';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    companyName?: string | null;
    iPolicy?: boolean | null;
    iNews?: boolean | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type UpdateRequestAccessMutationVariables = {
  input: UpdateRequestAccessInput;
  condition?: ModelRequestAccessConditionInput | null;
};

export type UpdateRequestAccessMutation = {
  updateRequestAccess?: {
    __typename: 'RequestAccess';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    companyName?: string | null;
    iPolicy?: boolean | null;
    iNews?: boolean | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type DeleteRequestAccessMutationVariables = {
  input: DeleteRequestAccessInput;
  condition?: ModelRequestAccessConditionInput | null;
};

export type DeleteRequestAccessMutation = {
  deleteRequestAccess?: {
    __typename: 'RequestAccess';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    companyName?: string | null;
    iPolicy?: boolean | null;
    iNews?: boolean | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type CreateWebContactUsMutationVariables = {
  input: CreateWebContactUsInput;
  condition?: ModelWebContactUsConditionInput | null;
};

export type CreateWebContactUsMutation = {
  createWebContactUs?: {
    __typename: 'WebContactUs';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    service?: string | null;
    message?: string | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type UpdateWebContactUsMutationVariables = {
  input: UpdateWebContactUsInput;
  condition?: ModelWebContactUsConditionInput | null;
};

export type UpdateWebContactUsMutation = {
  updateWebContactUs?: {
    __typename: 'WebContactUs';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    service?: string | null;
    message?: string | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type DeleteWebContactUsMutationVariables = {
  input: DeleteWebContactUsInput;
  condition?: ModelWebContactUsConditionInput | null;
};

export type DeleteWebContactUsMutation = {
  deleteWebContactUs?: {
    __typename: 'WebContactUs';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    service?: string | null;
    message?: string | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type CreateBusinessAnglesContactUsMutationVariables = {
  input: CreateBusinessAnglesContactUsInput;
  condition?: ModelBusinessAnglesContactUsConditionInput | null;
};

export type CreateBusinessAnglesContactUsMutation = {
  createBusinessAnglesContactUs?: {
    __typename: 'BusinessAnglesContactUs';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    startUpName?: string | null;
    aboutCompany?: string | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type UpdateBusinessAnglesContactUsMutationVariables = {
  input: UpdateBusinessAnglesContactUsInput;
  condition?: ModelBusinessAnglesContactUsConditionInput | null;
};

export type UpdateBusinessAnglesContactUsMutation = {
  updateBusinessAnglesContactUs?: {
    __typename: 'BusinessAnglesContactUs';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    startUpName?: string | null;
    aboutCompany?: string | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type DeleteBusinessAnglesContactUsMutationVariables = {
  input: DeleteBusinessAnglesContactUsInput;
  condition?: ModelBusinessAnglesContactUsConditionInput | null;
};

export type DeleteBusinessAnglesContactUsMutation = {
  deleteBusinessAnglesContactUs?: {
    __typename: 'BusinessAnglesContactUs';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    startUpName?: string | null;
    aboutCompany?: string | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type CreateCandidateLeadMutationVariables = {
  input: CreateCandidateLeadInput;
  condition?: ModelCandidateLeadConditionInput | null;
};

export type CreateCandidateLeadMutation = {
  createCandidateLead?: {
    __typename: 'CandidateLead';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    address?: string | null;
    country?: string | null;
    positionTitle?: string | null;
    position?: JobPositions | null;
    positionType?: JobTypes | null;
    positionLevel?: PositionLevels | null;
    heardAboutOffer?: string | null;
    resume?: {
      __typename: 'ModelCandidateResumeConnection';
      items: Array<{
        __typename: 'CandidateResume';
        id: string;
        candidateId: string;
        candidate?: {
          __typename: 'CandidateLead';
          id?: string | null;
          firstName?: string | null;
          lastName?: string | null;
          email: string;
          phone?: string | null;
          address?: string | null;
          country?: string | null;
          positionTitle?: string | null;
          position?: JobPositions | null;
          positionType?: JobTypes | null;
          positionLevel?: PositionLevels | null;
          heardAboutOffer?: string | null;
          createdAt?: string | null;
          updatedAt: string;
        } | null;
        name: string;
        file?: {
          __typename: 'S3Object';
          bucket: string;
          region: string;
          key: string;
        } | null;
        createdAt?: string | null;
        updatedAt: string;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type UpdateCandidateLeadMutationVariables = {
  input: UpdateCandidateLeadInput;
  condition?: ModelCandidateLeadConditionInput | null;
};

export type UpdateCandidateLeadMutation = {
  updateCandidateLead?: {
    __typename: 'CandidateLead';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    address?: string | null;
    country?: string | null;
    positionTitle?: string | null;
    position?: JobPositions | null;
    positionType?: JobTypes | null;
    positionLevel?: PositionLevels | null;
    heardAboutOffer?: string | null;
    resume?: {
      __typename: 'ModelCandidateResumeConnection';
      items: Array<{
        __typename: 'CandidateResume';
        id: string;
        candidateId: string;
        candidate?: {
          __typename: 'CandidateLead';
          id?: string | null;
          firstName?: string | null;
          lastName?: string | null;
          email: string;
          phone?: string | null;
          address?: string | null;
          country?: string | null;
          positionTitle?: string | null;
          position?: JobPositions | null;
          positionType?: JobTypes | null;
          positionLevel?: PositionLevels | null;
          heardAboutOffer?: string | null;
          createdAt?: string | null;
          updatedAt: string;
        } | null;
        name: string;
        file?: {
          __typename: 'S3Object';
          bucket: string;
          region: string;
          key: string;
        } | null;
        createdAt?: string | null;
        updatedAt: string;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type DeleteCandidateLeadMutationVariables = {
  input: DeleteCandidateLeadInput;
  condition?: ModelCandidateLeadConditionInput | null;
};

export type DeleteCandidateLeadMutation = {
  deleteCandidateLead?: {
    __typename: 'CandidateLead';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    address?: string | null;
    country?: string | null;
    positionTitle?: string | null;
    position?: JobPositions | null;
    positionType?: JobTypes | null;
    positionLevel?: PositionLevels | null;
    heardAboutOffer?: string | null;
    resume?: {
      __typename: 'ModelCandidateResumeConnection';
      items: Array<{
        __typename: 'CandidateResume';
        id: string;
        candidateId: string;
        candidate?: {
          __typename: 'CandidateLead';
          id?: string | null;
          firstName?: string | null;
          lastName?: string | null;
          email: string;
          phone?: string | null;
          address?: string | null;
          country?: string | null;
          positionTitle?: string | null;
          position?: JobPositions | null;
          positionType?: JobTypes | null;
          positionLevel?: PositionLevels | null;
          heardAboutOffer?: string | null;
          createdAt?: string | null;
          updatedAt: string;
        } | null;
        name: string;
        file?: {
          __typename: 'S3Object';
          bucket: string;
          region: string;
          key: string;
        } | null;
        createdAt?: string | null;
        updatedAt: string;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type CreateCandidateResumeMutationVariables = {
  input: CreateCandidateResumeInput;
  condition?: ModelCandidateResumeConditionInput | null;
};

export type CreateCandidateResumeMutation = {
  createCandidateResume?: {
    __typename: 'CandidateResume';
    id: string;
    candidateId: string;
    candidate?: {
      __typename: 'CandidateLead';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      address?: string | null;
      country?: string | null;
      positionTitle?: string | null;
      position?: JobPositions | null;
      positionType?: JobTypes | null;
      positionLevel?: PositionLevels | null;
      heardAboutOffer?: string | null;
      resume?: {
        __typename: 'ModelCandidateResumeConnection';
        items: Array<{
          __typename: 'CandidateResume';
          id: string;
          candidateId: string;
          name: string;
          createdAt?: string | null;
          updatedAt: string;
        }>;
        nextToken?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt: string;
    } | null;
    name: string;
    file?: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type UpdateCandidateResumeMutationVariables = {
  input: UpdateCandidateResumeInput;
  condition?: ModelCandidateResumeConditionInput | null;
};

export type UpdateCandidateResumeMutation = {
  updateCandidateResume?: {
    __typename: 'CandidateResume';
    id: string;
    candidateId: string;
    candidate?: {
      __typename: 'CandidateLead';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      address?: string | null;
      country?: string | null;
      positionTitle?: string | null;
      position?: JobPositions | null;
      positionType?: JobTypes | null;
      positionLevel?: PositionLevels | null;
      heardAboutOffer?: string | null;
      resume?: {
        __typename: 'ModelCandidateResumeConnection';
        items: Array<{
          __typename: 'CandidateResume';
          id: string;
          candidateId: string;
          name: string;
          createdAt?: string | null;
          updatedAt: string;
        }>;
        nextToken?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt: string;
    } | null;
    name: string;
    file?: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type DeleteCandidateResumeMutationVariables = {
  input: DeleteCandidateResumeInput;
  condition?: ModelCandidateResumeConditionInput | null;
};

export type DeleteCandidateResumeMutation = {
  deleteCandidateResume?: {
    __typename: 'CandidateResume';
    id: string;
    candidateId: string;
    candidate?: {
      __typename: 'CandidateLead';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      address?: string | null;
      country?: string | null;
      positionTitle?: string | null;
      position?: JobPositions | null;
      positionType?: JobTypes | null;
      positionLevel?: PositionLevels | null;
      heardAboutOffer?: string | null;
      resume?: {
        __typename: 'ModelCandidateResumeConnection';
        items: Array<{
          __typename: 'CandidateResume';
          id: string;
          candidateId: string;
          name: string;
          createdAt?: string | null;
          updatedAt: string;
        }>;
        nextToken?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt: string;
    } | null;
    name: string;
    file?: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type CreateAppUserMutationVariables = {
  input: CreateAppUserInput;
  condition?: ModelAppUserConditionInput | null;
};

export type CreateAppUserMutation = {
  createAppUser?: {
    __typename: 'AppUser';
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    role?: Roles | null;
    userStatus?: UserStatus | null;
    iAgree?: boolean | null;
    profilePics?: {
      __typename: 'ModelProfilePicsConnection';
      items: Array<{
        __typename: 'ProfilePics';
        id: string;
        appUserId: string;
        appUser?: {
          __typename: 'AppUser';
          id: string;
          firstName?: string | null;
          lastName?: string | null;
          email: string;
          phone?: string | null;
          role?: Roles | null;
          userStatus?: UserStatus | null;
          iAgree?: boolean | null;
          createdAt?: string | null;
          updatedAt: string;
          owner?: string | null;
        } | null;
        name: string;
        file?: {
          __typename: 'S3Object';
          bucket: string;
          region: string;
          key: string;
        } | null;
        default?: boolean | null;
        createdAt?: string | null;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdateAppUserMutationVariables = {
  input: UpdateAppUserInput;
  condition?: ModelAppUserConditionInput | null;
};

export type UpdateAppUserMutation = {
  updateAppUser?: {
    __typename: 'AppUser';
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    role?: Roles | null;
    userStatus?: UserStatus | null;
    iAgree?: boolean | null;
    profilePics?: {
      __typename: 'ModelProfilePicsConnection';
      items: Array<{
        __typename: 'ProfilePics';
        id: string;
        appUserId: string;
        appUser?: {
          __typename: 'AppUser';
          id: string;
          firstName?: string | null;
          lastName?: string | null;
          email: string;
          phone?: string | null;
          role?: Roles | null;
          userStatus?: UserStatus | null;
          iAgree?: boolean | null;
          createdAt?: string | null;
          updatedAt: string;
          owner?: string | null;
        } | null;
        name: string;
        file?: {
          __typename: 'S3Object';
          bucket: string;
          region: string;
          key: string;
        } | null;
        default?: boolean | null;
        createdAt?: string | null;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeleteAppUserMutationVariables = {
  input: DeleteAppUserInput;
  condition?: ModelAppUserConditionInput | null;
};

export type DeleteAppUserMutation = {
  deleteAppUser?: {
    __typename: 'AppUser';
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    role?: Roles | null;
    userStatus?: UserStatus | null;
    iAgree?: boolean | null;
    profilePics?: {
      __typename: 'ModelProfilePicsConnection';
      items: Array<{
        __typename: 'ProfilePics';
        id: string;
        appUserId: string;
        appUser?: {
          __typename: 'AppUser';
          id: string;
          firstName?: string | null;
          lastName?: string | null;
          email: string;
          phone?: string | null;
          role?: Roles | null;
          userStatus?: UserStatus | null;
          iAgree?: boolean | null;
          createdAt?: string | null;
          updatedAt: string;
          owner?: string | null;
        } | null;
        name: string;
        file?: {
          __typename: 'S3Object';
          bucket: string;
          region: string;
          key: string;
        } | null;
        default?: boolean | null;
        createdAt?: string | null;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type CreateProfilePicsMutationVariables = {
  input: CreateProfilePicsInput;
  condition?: ModelProfilePicsConditionInput | null;
};

export type CreateProfilePicsMutation = {
  createProfilePics?: {
    __typename: 'ProfilePics';
    id: string;
    appUserId: string;
    appUser?: {
      __typename: 'AppUser';
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      role?: Roles | null;
      userStatus?: UserStatus | null;
      iAgree?: boolean | null;
      profilePics?: {
        __typename: 'ModelProfilePicsConnection';
        items: Array<{
          __typename: 'ProfilePics';
          id: string;
          appUserId: string;
          name: string;
          default?: boolean | null;
          createdAt?: string | null;
          updatedAt: string;
          owner?: string | null;
        }>;
        nextToken?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt: string;
      owner?: string | null;
    } | null;
    name: string;
    file?: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    default?: boolean | null;
    createdAt?: string | null;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdateProfilePicsMutationVariables = {
  input: UpdateProfilePicsInput;
  condition?: ModelProfilePicsConditionInput | null;
};

export type UpdateProfilePicsMutation = {
  updateProfilePics?: {
    __typename: 'ProfilePics';
    id: string;
    appUserId: string;
    appUser?: {
      __typename: 'AppUser';
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      role?: Roles | null;
      userStatus?: UserStatus | null;
      iAgree?: boolean | null;
      profilePics?: {
        __typename: 'ModelProfilePicsConnection';
        items: Array<{
          __typename: 'ProfilePics';
          id: string;
          appUserId: string;
          name: string;
          default?: boolean | null;
          createdAt?: string | null;
          updatedAt: string;
          owner?: string | null;
        }>;
        nextToken?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt: string;
      owner?: string | null;
    } | null;
    name: string;
    file?: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    default?: boolean | null;
    createdAt?: string | null;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeleteProfilePicsMutationVariables = {
  input: DeleteProfilePicsInput;
  condition?: ModelProfilePicsConditionInput | null;
};

export type DeleteProfilePicsMutation = {
  deleteProfilePics?: {
    __typename: 'ProfilePics';
    id: string;
    appUserId: string;
    appUser?: {
      __typename: 'AppUser';
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      role?: Roles | null;
      userStatus?: UserStatus | null;
      iAgree?: boolean | null;
      profilePics?: {
        __typename: 'ModelProfilePicsConnection';
        items: Array<{
          __typename: 'ProfilePics';
          id: string;
          appUserId: string;
          name: string;
          default?: boolean | null;
          createdAt?: string | null;
          updatedAt: string;
          owner?: string | null;
        }>;
        nextToken?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt: string;
      owner?: string | null;
    } | null;
    name: string;
    file?: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    default?: boolean | null;
    createdAt?: string | null;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type GetAppUserQueryVariables = {
  id: string;
};

export type GetAppUserQuery = {
  getAppUser?: {
    __typename: 'AppUser';
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    role?: Roles | null;
    userStatus?: UserStatus | null;
    iAgree?: boolean | null;
    profilePics?: {
      __typename: 'ModelProfilePicsConnection';
      items: Array<{
        __typename: 'ProfilePics';
        id: string;
        appUserId: string;
        appUser?: {
          __typename: 'AppUser';
          id: string;
          firstName?: string | null;
          lastName?: string | null;
          email: string;
          phone?: string | null;
          role?: Roles | null;
          userStatus?: UserStatus | null;
          iAgree?: boolean | null;
          createdAt?: string | null;
          updatedAt: string;
          owner?: string | null;
        } | null;
        name: string;
        file?: {
          __typename: 'S3Object';
          bucket: string;
          region: string;
          key: string;
        } | null;
        default?: boolean | null;
        createdAt?: string | null;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListAppUsersQueryVariables = {
  filter?: ModelAppUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListAppUsersQuery = {
  listAppUsers?: {
    __typename: 'ModelAppUserConnection';
    items: Array<{
      __typename: 'AppUser';
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      role?: Roles | null;
      userStatus?: UserStatus | null;
      iAgree?: boolean | null;
      profilePics?: {
        __typename: 'ModelProfilePicsConnection';
        items: Array<{
          __typename: 'ProfilePics';
          id: string;
          appUserId: string;
          name: string;
          default?: boolean | null;
          createdAt?: string | null;
          updatedAt: string;
          owner?: string | null;
        }>;
        nextToken?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt: string;
      owner?: string | null;
    }>;
    nextToken?: string | null;
  } | null;
};

export type GetProfilePicsQueryVariables = {
  id: string;
};

export type GetProfilePicsQuery = {
  getProfilePics?: {
    __typename: 'ProfilePics';
    id: string;
    appUserId: string;
    appUser?: {
      __typename: 'AppUser';
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      role?: Roles | null;
      userStatus?: UserStatus | null;
      iAgree?: boolean | null;
      profilePics?: {
        __typename: 'ModelProfilePicsConnection';
        items: Array<{
          __typename: 'ProfilePics';
          id: string;
          appUserId: string;
          name: string;
          default?: boolean | null;
          createdAt?: string | null;
          updatedAt: string;
          owner?: string | null;
        }>;
        nextToken?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt: string;
      owner?: string | null;
    } | null;
    name: string;
    file?: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    default?: boolean | null;
    createdAt?: string | null;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListProfilePicsQueryVariables = {
  filter?: ModelProfilePicsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListProfilePicsQuery = {
  listProfilePics?: {
    __typename: 'ModelProfilePicsConnection';
    items: Array<{
      __typename: 'ProfilePics';
      id: string;
      appUserId: string;
      appUser?: {
        __typename: 'AppUser';
        id: string;
        firstName?: string | null;
        lastName?: string | null;
        email: string;
        phone?: string | null;
        role?: Roles | null;
        userStatus?: UserStatus | null;
        iAgree?: boolean | null;
        profilePics?: {
          __typename: 'ModelProfilePicsConnection';
          nextToken?: string | null;
        } | null;
        createdAt?: string | null;
        updatedAt: string;
        owner?: string | null;
      } | null;
      name: string;
      file?: {
        __typename: 'S3Object';
        bucket: string;
        region: string;
        key: string;
      } | null;
      default?: boolean | null;
      createdAt?: string | null;
      updatedAt: string;
      owner?: string | null;
    }>;
    nextToken?: string | null;
  } | null;
};

export type GetRequestAccessQueryVariables = {
  id: string;
};

export type GetRequestAccessQuery = {
  getRequestAccess?: {
    __typename: 'RequestAccess';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    companyName?: string | null;
    iPolicy?: boolean | null;
    iNews?: boolean | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type ListRequestAccessesQueryVariables = {
  filter?: ModelRequestAccessFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListRequestAccessesQuery = {
  listRequestAccesses?: {
    __typename: 'ModelRequestAccessConnection';
    items: Array<{
      __typename: 'RequestAccess';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      companyName?: string | null;
      iPolicy?: boolean | null;
      iNews?: boolean | null;
      createdAt?: string | null;
      updatedAt: string;
    }>;
    nextToken?: string | null;
  } | null;
};

export type GetWebContactUsQueryVariables = {
  id: string;
};

export type GetWebContactUsQuery = {
  getWebContactUs?: {
    __typename: 'WebContactUs';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    service?: string | null;
    message?: string | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type ListWebContactusesQueryVariables = {
  filter?: ModelWebContactUsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListWebContactusesQuery = {
  listWebContactuses?: {
    __typename: 'ModelWebContactUsConnection';
    items: Array<{
      __typename: 'WebContactUs';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      service?: string | null;
      message?: string | null;
      createdAt?: string | null;
      updatedAt: string;
    }>;
    nextToken?: string | null;
  } | null;
};

export type GetBusinessAnglesContactUsQueryVariables = {
  id: string;
};

export type GetBusinessAnglesContactUsQuery = {
  getBusinessAnglesContactUs?: {
    __typename: 'BusinessAnglesContactUs';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    startUpName?: string | null;
    aboutCompany?: string | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type ListBusinessAnglesContactusesQueryVariables = {
  filter?: ModelBusinessAnglesContactUsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListBusinessAnglesContactusesQuery = {
  listBusinessAnglesContactuses?: {
    __typename: 'ModelBusinessAnglesContactUsConnection';
    items: Array<{
      __typename: 'BusinessAnglesContactUs';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      startUpName?: string | null;
      aboutCompany?: string | null;
      createdAt?: string | null;
      updatedAt: string;
    }>;
    nextToken?: string | null;
  } | null;
};

export type GetCandidateLeadQueryVariables = {
  id: string;
};

export type GetCandidateLeadQuery = {
  getCandidateLead?: {
    __typename: 'CandidateLead';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    address?: string | null;
    country?: string | null;
    positionTitle?: string | null;
    position?: JobPositions | null;
    positionType?: JobTypes | null;
    positionLevel?: PositionLevels | null;
    heardAboutOffer?: string | null;
    resume?: {
      __typename: 'ModelCandidateResumeConnection';
      items: Array<{
        __typename: 'CandidateResume';
        id: string;
        candidateId: string;
        candidate?: {
          __typename: 'CandidateLead';
          id?: string | null;
          firstName?: string | null;
          lastName?: string | null;
          email: string;
          phone?: string | null;
          address?: string | null;
          country?: string | null;
          positionTitle?: string | null;
          position?: JobPositions | null;
          positionType?: JobTypes | null;
          positionLevel?: PositionLevels | null;
          heardAboutOffer?: string | null;
          createdAt?: string | null;
          updatedAt: string;
        } | null;
        name: string;
        file?: {
          __typename: 'S3Object';
          bucket: string;
          region: string;
          key: string;
        } | null;
        createdAt?: string | null;
        updatedAt: string;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type ListCandidateLeadsQueryVariables = {
  filter?: ModelCandidateLeadFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCandidateLeadsQuery = {
  listCandidateLeads?: {
    __typename: 'ModelCandidateLeadConnection';
    items: Array<{
      __typename: 'CandidateLead';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      address?: string | null;
      country?: string | null;
      positionTitle?: string | null;
      position?: JobPositions | null;
      positionType?: JobTypes | null;
      positionLevel?: PositionLevels | null;
      heardAboutOffer?: string | null;
      resume?: {
        __typename: 'ModelCandidateResumeConnection';
        items: Array<{
          __typename: 'CandidateResume';
          id: string;
          candidateId: string;
          name: string;
          createdAt?: string | null;
          updatedAt: string;
        }>;
        nextToken?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt: string;
    }>;
    nextToken?: string | null;
  } | null;
};

export type GetCandidateResumeQueryVariables = {
  id: string;
};

export type GetCandidateResumeQuery = {
  getCandidateResume?: {
    __typename: 'CandidateResume';
    id: string;
    candidateId: string;
    candidate?: {
      __typename: 'CandidateLead';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      address?: string | null;
      country?: string | null;
      positionTitle?: string | null;
      position?: JobPositions | null;
      positionType?: JobTypes | null;
      positionLevel?: PositionLevels | null;
      heardAboutOffer?: string | null;
      resume?: {
        __typename: 'ModelCandidateResumeConnection';
        items: Array<{
          __typename: 'CandidateResume';
          id: string;
          candidateId: string;
          name: string;
          createdAt?: string | null;
          updatedAt: string;
        }>;
        nextToken?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt: string;
    } | null;
    name: string;
    file?: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type ListCandidateResumesQueryVariables = {
  filter?: ModelCandidateResumeFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCandidateResumesQuery = {
  listCandidateResumes?: {
    __typename: 'ModelCandidateResumeConnection';
    items: Array<{
      __typename: 'CandidateResume';
      id: string;
      candidateId: string;
      candidate?: {
        __typename: 'CandidateLead';
        id?: string | null;
        firstName?: string | null;
        lastName?: string | null;
        email: string;
        phone?: string | null;
        address?: string | null;
        country?: string | null;
        positionTitle?: string | null;
        position?: JobPositions | null;
        positionType?: JobTypes | null;
        positionLevel?: PositionLevels | null;
        heardAboutOffer?: string | null;
        resume?: {
          __typename: 'ModelCandidateResumeConnection';
          nextToken?: string | null;
        } | null;
        createdAt?: string | null;
        updatedAt: string;
      } | null;
      name: string;
      file?: {
        __typename: 'S3Object';
        bucket: string;
        region: string;
        key: string;
      } | null;
      createdAt?: string | null;
      updatedAt: string;
    }>;
    nextToken?: string | null;
  } | null;
};

export type AppUserByEmailQueryVariables = {
  email?: string | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelAppUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type AppUserByEmailQuery = {
  appUserByEmail?: {
    __typename: 'ModelAppUserConnection';
    items: Array<{
      __typename: 'AppUser';
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      role?: Roles | null;
      userStatus?: UserStatus | null;
      iAgree?: boolean | null;
      profilePics?: {
        __typename: 'ModelProfilePicsConnection';
        items: Array<{
          __typename: 'ProfilePics';
          id: string;
          appUserId: string;
          name: string;
          default?: boolean | null;
          createdAt?: string | null;
          updatedAt: string;
          owner?: string | null;
        }>;
        nextToken?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt: string;
      owner?: string | null;
    }>;
    nextToken?: string | null;
  } | null;
};

export type RequestAccessByEmailQueryVariables = {
  email?: string | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelRequestAccessFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type RequestAccessByEmailQuery = {
  requestAccessByEmail?: {
    __typename: 'ModelRequestAccessConnection';
    items: Array<{
      __typename: 'RequestAccess';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      companyName?: string | null;
      iPolicy?: boolean | null;
      iNews?: boolean | null;
      createdAt?: string | null;
      updatedAt: string;
    }>;
    nextToken?: string | null;
  } | null;
};

export type ContactUsByEmailQueryVariables = {
  email?: string | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelWebContactUsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ContactUsByEmailQuery = {
  contactUsByEmail?: {
    __typename: 'ModelWebContactUsConnection';
    items: Array<{
      __typename: 'WebContactUs';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      service?: string | null;
      message?: string | null;
      createdAt?: string | null;
      updatedAt: string;
    }>;
    nextToken?: string | null;
  } | null;
};

export type BusinessAnglesByEmailQueryVariables = {
  email?: string | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelBusinessAnglesContactUsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type BusinessAnglesByEmailQuery = {
  businessAnglesByEmail?: {
    __typename: 'ModelBusinessAnglesContactUsConnection';
    items: Array<{
      __typename: 'BusinessAnglesContactUs';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      startUpName?: string | null;
      aboutCompany?: string | null;
      createdAt?: string | null;
      updatedAt: string;
    }>;
    nextToken?: string | null;
  } | null;
};

export type CandidateLeadByEmailQueryVariables = {
  email?: string | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelCandidateLeadFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type CandidateLeadByEmailQuery = {
  candidateLeadByEmail?: {
    __typename: 'ModelCandidateLeadConnection';
    items: Array<{
      __typename: 'CandidateLead';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      address?: string | null;
      country?: string | null;
      positionTitle?: string | null;
      position?: JobPositions | null;
      positionType?: JobTypes | null;
      positionLevel?: PositionLevels | null;
      heardAboutOffer?: string | null;
      resume?: {
        __typename: 'ModelCandidateResumeConnection';
        items: Array<{
          __typename: 'CandidateResume';
          id: string;
          candidateId: string;
          name: string;
          createdAt?: string | null;
          updatedAt: string;
        }>;
        nextToken?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt: string;
    }>;
    nextToken?: string | null;
  } | null;
};

export type CandidateLeadByPositionQueryVariables = {
  position?: JobPositions | null;
  createdAt?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelCandidateLeadFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type CandidateLeadByPositionQuery = {
  candidateLeadByPosition?: {
    __typename: 'ModelCandidateLeadConnection';
    items: Array<{
      __typename: 'CandidateLead';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      address?: string | null;
      country?: string | null;
      positionTitle?: string | null;
      position?: JobPositions | null;
      positionType?: JobTypes | null;
      positionLevel?: PositionLevels | null;
      heardAboutOffer?: string | null;
      resume?: {
        __typename: 'ModelCandidateResumeConnection';
        items: Array<{
          __typename: 'CandidateResume';
          id: string;
          candidateId: string;
          name: string;
          createdAt?: string | null;
          updatedAt: string;
        }>;
        nextToken?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt: string;
    }>;
    nextToken?: string | null;
  } | null;
};

export type CandidateLeadByTypeQueryVariables = {
  positionType?: JobTypes | null;
  createdAt?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelCandidateLeadFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type CandidateLeadByTypeQuery = {
  candidateLeadByType?: {
    __typename: 'ModelCandidateLeadConnection';
    items: Array<{
      __typename: 'CandidateLead';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      address?: string | null;
      country?: string | null;
      positionTitle?: string | null;
      position?: JobPositions | null;
      positionType?: JobTypes | null;
      positionLevel?: PositionLevels | null;
      heardAboutOffer?: string | null;
      resume?: {
        __typename: 'ModelCandidateResumeConnection';
        items: Array<{
          __typename: 'CandidateResume';
          id: string;
          candidateId: string;
          name: string;
          createdAt?: string | null;
          updatedAt: string;
        }>;
        nextToken?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt: string;
    }>;
    nextToken?: string | null;
  } | null;
};

export type CandidateLeadByLevelQueryVariables = {
  positionLevel?: PositionLevels | null;
  createdAt?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelCandidateLeadFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type CandidateLeadByLevelQuery = {
  candidateLeadByLevel?: {
    __typename: 'ModelCandidateLeadConnection';
    items: Array<{
      __typename: 'CandidateLead';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      address?: string | null;
      country?: string | null;
      positionTitle?: string | null;
      position?: JobPositions | null;
      positionType?: JobTypes | null;
      positionLevel?: PositionLevels | null;
      heardAboutOffer?: string | null;
      resume?: {
        __typename: 'ModelCandidateResumeConnection';
        items: Array<{
          __typename: 'CandidateResume';
          id: string;
          candidateId: string;
          name: string;
          createdAt?: string | null;
          updatedAt: string;
        }>;
        nextToken?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt: string;
    }>;
    nextToken?: string | null;
  } | null;
};

export type OnCreateAppUserSubscription = {
  onCreateAppUser?: {
    __typename: 'AppUser';
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    role?: Roles | null;
    userStatus?: UserStatus | null;
    iAgree?: boolean | null;
    profilePics?: {
      __typename: 'ModelProfilePicsConnection';
      items: Array<{
        __typename: 'ProfilePics';
        id: string;
        appUserId: string;
        appUser?: {
          __typename: 'AppUser';
          id: string;
          firstName?: string | null;
          lastName?: string | null;
          email: string;
          phone?: string | null;
          role?: Roles | null;
          userStatus?: UserStatus | null;
          iAgree?: boolean | null;
          createdAt?: string | null;
          updatedAt: string;
          owner?: string | null;
        } | null;
        name: string;
        file?: {
          __typename: 'S3Object';
          bucket: string;
          region: string;
          key: string;
        } | null;
        default?: boolean | null;
        createdAt?: string | null;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateAppUserSubscription = {
  onUpdateAppUser?: {
    __typename: 'AppUser';
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    role?: Roles | null;
    userStatus?: UserStatus | null;
    iAgree?: boolean | null;
    profilePics?: {
      __typename: 'ModelProfilePicsConnection';
      items: Array<{
        __typename: 'ProfilePics';
        id: string;
        appUserId: string;
        appUser?: {
          __typename: 'AppUser';
          id: string;
          firstName?: string | null;
          lastName?: string | null;
          email: string;
          phone?: string | null;
          role?: Roles | null;
          userStatus?: UserStatus | null;
          iAgree?: boolean | null;
          createdAt?: string | null;
          updatedAt: string;
          owner?: string | null;
        } | null;
        name: string;
        file?: {
          __typename: 'S3Object';
          bucket: string;
          region: string;
          key: string;
        } | null;
        default?: boolean | null;
        createdAt?: string | null;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteAppUserSubscription = {
  onDeleteAppUser?: {
    __typename: 'AppUser';
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    role?: Roles | null;
    userStatus?: UserStatus | null;
    iAgree?: boolean | null;
    profilePics?: {
      __typename: 'ModelProfilePicsConnection';
      items: Array<{
        __typename: 'ProfilePics';
        id: string;
        appUserId: string;
        appUser?: {
          __typename: 'AppUser';
          id: string;
          firstName?: string | null;
          lastName?: string | null;
          email: string;
          phone?: string | null;
          role?: Roles | null;
          userStatus?: UserStatus | null;
          iAgree?: boolean | null;
          createdAt?: string | null;
          updatedAt: string;
          owner?: string | null;
        } | null;
        name: string;
        file?: {
          __typename: 'S3Object';
          bucket: string;
          region: string;
          key: string;
        } | null;
        default?: boolean | null;
        createdAt?: string | null;
        updatedAt: string;
        owner?: string | null;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnCreateProfilePicsSubscription = {
  onCreateProfilePics?: {
    __typename: 'ProfilePics';
    id: string;
    appUserId: string;
    appUser?: {
      __typename: 'AppUser';
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      role?: Roles | null;
      userStatus?: UserStatus | null;
      iAgree?: boolean | null;
      profilePics?: {
        __typename: 'ModelProfilePicsConnection';
        items: Array<{
          __typename: 'ProfilePics';
          id: string;
          appUserId: string;
          name: string;
          default?: boolean | null;
          createdAt?: string | null;
          updatedAt: string;
          owner?: string | null;
        }>;
        nextToken?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt: string;
      owner?: string | null;
    } | null;
    name: string;
    file?: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    default?: boolean | null;
    createdAt?: string | null;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateProfilePicsSubscription = {
  onUpdateProfilePics?: {
    __typename: 'ProfilePics';
    id: string;
    appUserId: string;
    appUser?: {
      __typename: 'AppUser';
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      role?: Roles | null;
      userStatus?: UserStatus | null;
      iAgree?: boolean | null;
      profilePics?: {
        __typename: 'ModelProfilePicsConnection';
        items: Array<{
          __typename: 'ProfilePics';
          id: string;
          appUserId: string;
          name: string;
          default?: boolean | null;
          createdAt?: string | null;
          updatedAt: string;
          owner?: string | null;
        }>;
        nextToken?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt: string;
      owner?: string | null;
    } | null;
    name: string;
    file?: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    default?: boolean | null;
    createdAt?: string | null;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteProfilePicsSubscription = {
  onDeleteProfilePics?: {
    __typename: 'ProfilePics';
    id: string;
    appUserId: string;
    appUser?: {
      __typename: 'AppUser';
      id: string;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      role?: Roles | null;
      userStatus?: UserStatus | null;
      iAgree?: boolean | null;
      profilePics?: {
        __typename: 'ModelProfilePicsConnection';
        items: Array<{
          __typename: 'ProfilePics';
          id: string;
          appUserId: string;
          name: string;
          default?: boolean | null;
          createdAt?: string | null;
          updatedAt: string;
          owner?: string | null;
        }>;
        nextToken?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt: string;
      owner?: string | null;
    } | null;
    name: string;
    file?: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    default?: boolean | null;
    createdAt?: string | null;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnCreateRequestAccessSubscription = {
  onCreateRequestAccess?: {
    __typename: 'RequestAccess';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    companyName?: string | null;
    iPolicy?: boolean | null;
    iNews?: boolean | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type OnUpdateRequestAccessSubscription = {
  onUpdateRequestAccess?: {
    __typename: 'RequestAccess';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    companyName?: string | null;
    iPolicy?: boolean | null;
    iNews?: boolean | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type OnDeleteRequestAccessSubscription = {
  onDeleteRequestAccess?: {
    __typename: 'RequestAccess';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    companyName?: string | null;
    iPolicy?: boolean | null;
    iNews?: boolean | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type OnCreateWebContactUsSubscription = {
  onCreateWebContactUs?: {
    __typename: 'WebContactUs';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    service?: string | null;
    message?: string | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type OnUpdateWebContactUsSubscription = {
  onUpdateWebContactUs?: {
    __typename: 'WebContactUs';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    service?: string | null;
    message?: string | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type OnDeleteWebContactUsSubscription = {
  onDeleteWebContactUs?: {
    __typename: 'WebContactUs';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    service?: string | null;
    message?: string | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type OnCreateBusinessAnglesContactUsSubscription = {
  onCreateBusinessAnglesContactUs?: {
    __typename: 'BusinessAnglesContactUs';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    startUpName?: string | null;
    aboutCompany?: string | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type OnUpdateBusinessAnglesContactUsSubscription = {
  onUpdateBusinessAnglesContactUs?: {
    __typename: 'BusinessAnglesContactUs';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    startUpName?: string | null;
    aboutCompany?: string | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type OnDeleteBusinessAnglesContactUsSubscription = {
  onDeleteBusinessAnglesContactUs?: {
    __typename: 'BusinessAnglesContactUs';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    startUpName?: string | null;
    aboutCompany?: string | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type OnCreateCandidateLeadSubscription = {
  onCreateCandidateLead?: {
    __typename: 'CandidateLead';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    address?: string | null;
    country?: string | null;
    positionTitle?: string | null;
    position?: JobPositions | null;
    positionType?: JobTypes | null;
    positionLevel?: PositionLevels | null;
    heardAboutOffer?: string | null;
    resume?: {
      __typename: 'ModelCandidateResumeConnection';
      items: Array<{
        __typename: 'CandidateResume';
        id: string;
        candidateId: string;
        candidate?: {
          __typename: 'CandidateLead';
          id?: string | null;
          firstName?: string | null;
          lastName?: string | null;
          email: string;
          phone?: string | null;
          address?: string | null;
          country?: string | null;
          positionTitle?: string | null;
          position?: JobPositions | null;
          positionType?: JobTypes | null;
          positionLevel?: PositionLevels | null;
          heardAboutOffer?: string | null;
          createdAt?: string | null;
          updatedAt: string;
        } | null;
        name: string;
        file?: {
          __typename: 'S3Object';
          bucket: string;
          region: string;
          key: string;
        } | null;
        createdAt?: string | null;
        updatedAt: string;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type OnUpdateCandidateLeadSubscription = {
  onUpdateCandidateLead?: {
    __typename: 'CandidateLead';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    address?: string | null;
    country?: string | null;
    positionTitle?: string | null;
    position?: JobPositions | null;
    positionType?: JobTypes | null;
    positionLevel?: PositionLevels | null;
    heardAboutOffer?: string | null;
    resume?: {
      __typename: 'ModelCandidateResumeConnection';
      items: Array<{
        __typename: 'CandidateResume';
        id: string;
        candidateId: string;
        candidate?: {
          __typename: 'CandidateLead';
          id?: string | null;
          firstName?: string | null;
          lastName?: string | null;
          email: string;
          phone?: string | null;
          address?: string | null;
          country?: string | null;
          positionTitle?: string | null;
          position?: JobPositions | null;
          positionType?: JobTypes | null;
          positionLevel?: PositionLevels | null;
          heardAboutOffer?: string | null;
          createdAt?: string | null;
          updatedAt: string;
        } | null;
        name: string;
        file?: {
          __typename: 'S3Object';
          bucket: string;
          region: string;
          key: string;
        } | null;
        createdAt?: string | null;
        updatedAt: string;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type OnDeleteCandidateLeadSubscription = {
  onDeleteCandidateLead?: {
    __typename: 'CandidateLead';
    id?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    phone?: string | null;
    address?: string | null;
    country?: string | null;
    positionTitle?: string | null;
    position?: JobPositions | null;
    positionType?: JobTypes | null;
    positionLevel?: PositionLevels | null;
    heardAboutOffer?: string | null;
    resume?: {
      __typename: 'ModelCandidateResumeConnection';
      items: Array<{
        __typename: 'CandidateResume';
        id: string;
        candidateId: string;
        candidate?: {
          __typename: 'CandidateLead';
          id?: string | null;
          firstName?: string | null;
          lastName?: string | null;
          email: string;
          phone?: string | null;
          address?: string | null;
          country?: string | null;
          positionTitle?: string | null;
          position?: JobPositions | null;
          positionType?: JobTypes | null;
          positionLevel?: PositionLevels | null;
          heardAboutOffer?: string | null;
          createdAt?: string | null;
          updatedAt: string;
        } | null;
        name: string;
        file?: {
          __typename: 'S3Object';
          bucket: string;
          region: string;
          key: string;
        } | null;
        createdAt?: string | null;
        updatedAt: string;
      }>;
      nextToken?: string | null;
    } | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type OnCreateCandidateResumeSubscription = {
  onCreateCandidateResume?: {
    __typename: 'CandidateResume';
    id: string;
    candidateId: string;
    candidate?: {
      __typename: 'CandidateLead';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      address?: string | null;
      country?: string | null;
      positionTitle?: string | null;
      position?: JobPositions | null;
      positionType?: JobTypes | null;
      positionLevel?: PositionLevels | null;
      heardAboutOffer?: string | null;
      resume?: {
        __typename: 'ModelCandidateResumeConnection';
        items: Array<{
          __typename: 'CandidateResume';
          id: string;
          candidateId: string;
          name: string;
          createdAt?: string | null;
          updatedAt: string;
        }>;
        nextToken?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt: string;
    } | null;
    name: string;
    file?: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type OnUpdateCandidateResumeSubscription = {
  onUpdateCandidateResume?: {
    __typename: 'CandidateResume';
    id: string;
    candidateId: string;
    candidate?: {
      __typename: 'CandidateLead';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      address?: string | null;
      country?: string | null;
      positionTitle?: string | null;
      position?: JobPositions | null;
      positionType?: JobTypes | null;
      positionLevel?: PositionLevels | null;
      heardAboutOffer?: string | null;
      resume?: {
        __typename: 'ModelCandidateResumeConnection';
        items: Array<{
          __typename: 'CandidateResume';
          id: string;
          candidateId: string;
          name: string;
          createdAt?: string | null;
          updatedAt: string;
        }>;
        nextToken?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt: string;
    } | null;
    name: string;
    file?: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};

export type OnDeleteCandidateResumeSubscription = {
  onDeleteCandidateResume?: {
    __typename: 'CandidateResume';
    id: string;
    candidateId: string;
    candidate?: {
      __typename: 'CandidateLead';
      id?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      email: string;
      phone?: string | null;
      address?: string | null;
      country?: string | null;
      positionTitle?: string | null;
      position?: JobPositions | null;
      positionType?: JobTypes | null;
      positionLevel?: PositionLevels | null;
      heardAboutOffer?: string | null;
      resume?: {
        __typename: 'ModelCandidateResumeConnection';
        items: Array<{
          __typename: 'CandidateResume';
          id: string;
          candidateId: string;
          name: string;
          createdAt?: string | null;
          updatedAt: string;
        }>;
        nextToken?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt: string;
    } | null;
    name: string;
    file?: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt?: string | null;
    updatedAt: string;
  } | null;
};
