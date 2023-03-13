/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRequestAccess = /* GraphQL */ `
  mutation CreateRequestAccess(
    $input: CreateRequestAccessInput!
    $condition: ModelRequestAccessConditionInput
  ) {
    createRequestAccess(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      phone
      companyName
      iPolicy
      iNews
      createdAt
      updatedAt
    }
  }
`;
export const updateRequestAccess = /* GraphQL */ `
  mutation UpdateRequestAccess(
    $input: UpdateRequestAccessInput!
    $condition: ModelRequestAccessConditionInput
  ) {
    updateRequestAccess(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      phone
      companyName
      iPolicy
      iNews
      createdAt
      updatedAt
    }
  }
`;
export const deleteRequestAccess = /* GraphQL */ `
  mutation DeleteRequestAccess(
    $input: DeleteRequestAccessInput!
    $condition: ModelRequestAccessConditionInput
  ) {
    deleteRequestAccess(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      phone
      companyName
      iPolicy
      iNews
      createdAt
      updatedAt
    }
  }
`;
export const createWebContactUs = /* GraphQL */ `
  mutation CreateWebContactUs(
    $input: CreateWebContactUsInput!
    $condition: ModelWebContactUsConditionInput
  ) {
    createWebContactUs(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      phone
      service
      message
      createdAt
      updatedAt
    }
  }
`;
export const updateWebContactUs = /* GraphQL */ `
  mutation UpdateWebContactUs(
    $input: UpdateWebContactUsInput!
    $condition: ModelWebContactUsConditionInput
  ) {
    updateWebContactUs(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      phone
      service
      message
      createdAt
      updatedAt
    }
  }
`;
export const deleteWebContactUs = /* GraphQL */ `
  mutation DeleteWebContactUs(
    $input: DeleteWebContactUsInput!
    $condition: ModelWebContactUsConditionInput
  ) {
    deleteWebContactUs(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      phone
      service
      message
      createdAt
      updatedAt
    }
  }
`;
export const createBusinessAnglesContactUs = /* GraphQL */ `
  mutation CreateBusinessAnglesContactUs(
    $input: CreateBusinessAnglesContactUsInput!
    $condition: ModelBusinessAnglesContactUsConditionInput
  ) {
    createBusinessAnglesContactUs(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      phone
      startUpName
      aboutCompany
      createdAt
      updatedAt
    }
  }
`;
export const updateBusinessAnglesContactUs = /* GraphQL */ `
  mutation UpdateBusinessAnglesContactUs(
    $input: UpdateBusinessAnglesContactUsInput!
    $condition: ModelBusinessAnglesContactUsConditionInput
  ) {
    updateBusinessAnglesContactUs(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      phone
      startUpName
      aboutCompany
      createdAt
      updatedAt
    }
  }
`;
export const deleteBusinessAnglesContactUs = /* GraphQL */ `
  mutation DeleteBusinessAnglesContactUs(
    $input: DeleteBusinessAnglesContactUsInput!
    $condition: ModelBusinessAnglesContactUsConditionInput
  ) {
    deleteBusinessAnglesContactUs(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      phone
      startUpName
      aboutCompany
      createdAt
      updatedAt
    }
  }
`;
export const createCandidateLead = /* GraphQL */ `
  mutation CreateCandidateLead(
    $input: CreateCandidateLeadInput!
    $condition: ModelCandidateLeadConditionInput
  ) {
    createCandidateLead(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      phone
      address
      country
      positionTitle
      position
      positionType
      positionLevel
      heardAboutOffer
      resume {
        items {
          id
          candidateId
          candidate {
            id
            firstName
            lastName
            email
            phone
            address
            country
            positionTitle
            position
            positionType
            positionLevel
            heardAboutOffer
            createdAt
            updatedAt
          }
          name
          file {
            bucket
            region
            key
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCandidateLead = /* GraphQL */ `
  mutation UpdateCandidateLead(
    $input: UpdateCandidateLeadInput!
    $condition: ModelCandidateLeadConditionInput
  ) {
    updateCandidateLead(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      phone
      address
      country
      positionTitle
      position
      positionType
      positionLevel
      heardAboutOffer
      resume {
        items {
          id
          candidateId
          candidate {
            id
            firstName
            lastName
            email
            phone
            address
            country
            positionTitle
            position
            positionType
            positionLevel
            heardAboutOffer
            createdAt
            updatedAt
          }
          name
          file {
            bucket
            region
            key
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCandidateLead = /* GraphQL */ `
  mutation DeleteCandidateLead(
    $input: DeleteCandidateLeadInput!
    $condition: ModelCandidateLeadConditionInput
  ) {
    deleteCandidateLead(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      phone
      address
      country
      positionTitle
      position
      positionType
      positionLevel
      heardAboutOffer
      resume {
        items {
          id
          candidateId
          candidate {
            id
            firstName
            lastName
            email
            phone
            address
            country
            positionTitle
            position
            positionType
            positionLevel
            heardAboutOffer
            createdAt
            updatedAt
          }
          name
          file {
            bucket
            region
            key
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCandidateResume = /* GraphQL */ `
  mutation CreateCandidateResume(
    $input: CreateCandidateResumeInput!
    $condition: ModelCandidateResumeConditionInput
  ) {
    createCandidateResume(input: $input, condition: $condition) {
      id
      candidateId
      candidate {
        id
        firstName
        lastName
        email
        phone
        address
        country
        positionTitle
        position
        positionType
        positionLevel
        heardAboutOffer
        resume {
          items {
            id
            candidateId
            name
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCandidateResume = /* GraphQL */ `
  mutation UpdateCandidateResume(
    $input: UpdateCandidateResumeInput!
    $condition: ModelCandidateResumeConditionInput
  ) {
    updateCandidateResume(input: $input, condition: $condition) {
      id
      candidateId
      candidate {
        id
        firstName
        lastName
        email
        phone
        address
        country
        positionTitle
        position
        positionType
        positionLevel
        heardAboutOffer
        resume {
          items {
            id
            candidateId
            name
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCandidateResume = /* GraphQL */ `
  mutation DeleteCandidateResume(
    $input: DeleteCandidateResumeInput!
    $condition: ModelCandidateResumeConditionInput
  ) {
    deleteCandidateResume(input: $input, condition: $condition) {
      id
      candidateId
      candidate {
        id
        firstName
        lastName
        email
        phone
        address
        country
        positionTitle
        position
        positionType
        positionLevel
        heardAboutOffer
        resume {
          items {
            id
            candidateId
            name
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAppUser = /* GraphQL */ `
  mutation CreateAppUser(
    $input: CreateAppUserInput!
    $condition: ModelAppUserConditionInput
  ) {
    createAppUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      phone
      role
      userStatus
      iAgree
      profilePics {
        items {
          id
          appUserId
          appUser {
            id
            firstName
            lastName
            email
            phone
            role
            userStatus
            iAgree
            createdAt
            updatedAt
            owner
          }
          name
          file {
            bucket
            region
            key
          }
          default
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateAppUser = /* GraphQL */ `
  mutation UpdateAppUser(
    $input: UpdateAppUserInput!
    $condition: ModelAppUserConditionInput
  ) {
    updateAppUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      phone
      role
      userStatus
      iAgree
      profilePics {
        items {
          id
          appUserId
          appUser {
            id
            firstName
            lastName
            email
            phone
            role
            userStatus
            iAgree
            createdAt
            updatedAt
            owner
          }
          name
          file {
            bucket
            region
            key
          }
          default
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteAppUser = /* GraphQL */ `
  mutation DeleteAppUser(
    $input: DeleteAppUserInput!
    $condition: ModelAppUserConditionInput
  ) {
    deleteAppUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      phone
      role
      userStatus
      iAgree
      profilePics {
        items {
          id
          appUserId
          appUser {
            id
            firstName
            lastName
            email
            phone
            role
            userStatus
            iAgree
            createdAt
            updatedAt
            owner
          }
          name
          file {
            bucket
            region
            key
          }
          default
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createProfilePics = /* GraphQL */ `
  mutation CreateProfilePics(
    $input: CreateProfilePicsInput!
    $condition: ModelProfilePicsConditionInput
  ) {
    createProfilePics(input: $input, condition: $condition) {
      id
      appUserId
      appUser {
        id
        firstName
        lastName
        email
        phone
        role
        userStatus
        iAgree
        profilePics {
          items {
            id
            appUserId
            name
            default
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      name
      file {
        bucket
        region
        key
      }
      default
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateProfilePics = /* GraphQL */ `
  mutation UpdateProfilePics(
    $input: UpdateProfilePicsInput!
    $condition: ModelProfilePicsConditionInput
  ) {
    updateProfilePics(input: $input, condition: $condition) {
      id
      appUserId
      appUser {
        id
        firstName
        lastName
        email
        phone
        role
        userStatus
        iAgree
        profilePics {
          items {
            id
            appUserId
            name
            default
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      name
      file {
        bucket
        region
        key
      }
      default
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteProfilePics = /* GraphQL */ `
  mutation DeleteProfilePics(
    $input: DeleteProfilePicsInput!
    $condition: ModelProfilePicsConditionInput
  ) {
    deleteProfilePics(input: $input, condition: $condition) {
      id
      appUserId
      appUser {
        id
        firstName
        lastName
        email
        phone
        role
        userStatus
        iAgree
        profilePics {
          items {
            id
            appUserId
            name
            default
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      name
      file {
        bucket
        region
        key
      }
      default
      createdAt
      updatedAt
      owner
    }
  }
`;
