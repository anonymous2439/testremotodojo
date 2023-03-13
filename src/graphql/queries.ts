/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAppUser = /* GraphQL */ `
  query GetAppUser($id: ID!) {
    getAppUser(id: $id) {
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
export const listAppUsers = /* GraphQL */ `
  query ListAppUsers(
    $filter: ModelAppUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getProfilePics = /* GraphQL */ `
  query GetProfilePics($id: ID!) {
    getProfilePics(id: $id) {
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
export const listProfilePics = /* GraphQL */ `
  query ListProfilePics(
    $filter: ModelProfilePicsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfilePics(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          profilePics {
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
      nextToken
    }
  }
`;
export const getRequestAccess = /* GraphQL */ `
  query GetRequestAccess($id: ID!) {
    getRequestAccess(id: $id) {
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
export const listRequestAccesses = /* GraphQL */ `
  query ListRequestAccesses(
    $filter: ModelRequestAccessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequestAccesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getWebContactUs = /* GraphQL */ `
  query GetWebContactUs($id: ID!) {
    getWebContactUs(id: $id) {
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
export const listWebContactuses = /* GraphQL */ `
  query ListWebContactuses(
    $filter: ModelWebContactUsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWebContactuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getBusinessAnglesContactUs = /* GraphQL */ `
  query GetBusinessAnglesContactUs($id: ID!) {
    getBusinessAnglesContactUs(id: $id) {
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
export const listBusinessAnglesContactuses = /* GraphQL */ `
  query ListBusinessAnglesContactuses(
    $filter: ModelBusinessAnglesContactUsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinessAnglesContactuses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCandidateLead = /* GraphQL */ `
  query GetCandidateLead($id: ID!) {
    getCandidateLead(id: $id) {
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
export const listCandidateLeads = /* GraphQL */ `
  query ListCandidateLeads(
    $filter: ModelCandidateLeadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCandidateLeads(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCandidateResume = /* GraphQL */ `
  query GetCandidateResume($id: ID!) {
    getCandidateResume(id: $id) {
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
export const listCandidateResumes = /* GraphQL */ `
  query ListCandidateResumes(
    $filter: ModelCandidateResumeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCandidateResumes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          resume {
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
      nextToken
    }
  }
`;
export const appUserByEmail = /* GraphQL */ `
  query AppUserByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelAppUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    appUserByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const requestAccessByEmail = /* GraphQL */ `
  query RequestAccessByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelRequestAccessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    requestAccessByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const contactUsByEmail = /* GraphQL */ `
  query ContactUsByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelWebContactUsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contactUsByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const businessAnglesByEmail = /* GraphQL */ `
  query BusinessAnglesByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelBusinessAnglesContactUsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    businessAnglesByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const candidateLeadByEmail = /* GraphQL */ `
  query CandidateLeadByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelCandidateLeadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    candidateLeadByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const candidateLeadByPosition = /* GraphQL */ `
  query CandidateLeadByPosition(
    $position: JobPositions
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCandidateLeadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    candidateLeadByPosition(
      position: $position
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const candidateLeadByType = /* GraphQL */ `
  query CandidateLeadByType(
    $positionType: JobTypes
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCandidateLeadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    candidateLeadByType(
      positionType: $positionType
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const candidateLeadByLevel = /* GraphQL */ `
  query CandidateLeadByLevel(
    $positionLevel: PositionLevels
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCandidateLeadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    candidateLeadByLevel(
      positionLevel: $positionLevel
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
