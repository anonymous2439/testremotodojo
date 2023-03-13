/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAppUser = /* GraphQL */ `
  subscription OnCreateAppUser {
    onCreateAppUser {
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
export const onUpdateAppUser = /* GraphQL */ `
  subscription OnUpdateAppUser {
    onUpdateAppUser {
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
export const onDeleteAppUser = /* GraphQL */ `
  subscription OnDeleteAppUser {
    onDeleteAppUser {
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
export const onCreateProfilePics = /* GraphQL */ `
  subscription OnCreateProfilePics {
    onCreateProfilePics {
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
export const onUpdateProfilePics = /* GraphQL */ `
  subscription OnUpdateProfilePics {
    onUpdateProfilePics {
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
export const onDeleteProfilePics = /* GraphQL */ `
  subscription OnDeleteProfilePics {
    onDeleteProfilePics {
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
export const onCreateRequestAccess = /* GraphQL */ `
  subscription OnCreateRequestAccess {
    onCreateRequestAccess {
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
export const onUpdateRequestAccess = /* GraphQL */ `
  subscription OnUpdateRequestAccess {
    onUpdateRequestAccess {
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
export const onDeleteRequestAccess = /* GraphQL */ `
  subscription OnDeleteRequestAccess {
    onDeleteRequestAccess {
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
export const onCreateWebContactUs = /* GraphQL */ `
  subscription OnCreateWebContactUs {
    onCreateWebContactUs {
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
export const onUpdateWebContactUs = /* GraphQL */ `
  subscription OnUpdateWebContactUs {
    onUpdateWebContactUs {
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
export const onDeleteWebContactUs = /* GraphQL */ `
  subscription OnDeleteWebContactUs {
    onDeleteWebContactUs {
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
export const onCreateBusinessAnglesContactUs = /* GraphQL */ `
  subscription OnCreateBusinessAnglesContactUs {
    onCreateBusinessAnglesContactUs {
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
export const onUpdateBusinessAnglesContactUs = /* GraphQL */ `
  subscription OnUpdateBusinessAnglesContactUs {
    onUpdateBusinessAnglesContactUs {
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
export const onDeleteBusinessAnglesContactUs = /* GraphQL */ `
  subscription OnDeleteBusinessAnglesContactUs {
    onDeleteBusinessAnglesContactUs {
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
export const onCreateCandidateLead = /* GraphQL */ `
  subscription OnCreateCandidateLead {
    onCreateCandidateLead {
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
export const onUpdateCandidateLead = /* GraphQL */ `
  subscription OnUpdateCandidateLead {
    onUpdateCandidateLead {
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
export const onDeleteCandidateLead = /* GraphQL */ `
  subscription OnDeleteCandidateLead {
    onDeleteCandidateLead {
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
export const onCreateCandidateResume = /* GraphQL */ `
  subscription OnCreateCandidateResume {
    onCreateCandidateResume {
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
export const onUpdateCandidateResume = /* GraphQL */ `
  subscription OnUpdateCandidateResume {
    onUpdateCandidateResume {
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
export const onDeleteCandidateResume = /* GraphQL */ `
  subscription OnDeleteCandidateResume {
    onDeleteCandidateResume {
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
