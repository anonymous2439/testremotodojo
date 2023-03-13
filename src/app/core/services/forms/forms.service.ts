import API from '@aws-amplify/api';
import { graphqlOperation } from 'aws-amplify';
import {
  CreateBusinessAnglesContactUsInput,
  CreateCandidateLeadInput,
  CreateCandidateResumeInput,
  CreateRequestAccessInput,
  CreateWebContactUsInput,
} from 'src/API';
import {
  createBusinessAnglesContactUs,
  createCandidateLead,
  createCandidateResume,
  createRequestAccess,
  createWebContactUs,
} from 'src/graphql/mutations';

export const submitRequestAccessForm = async (
  form: CreateRequestAccessInput
) => {
  try {
    const newRequest = await API.graphql(
      graphqlOperation(createRequestAccess, { input: form })
    );

    if (!newRequest) return {};

    return newRequest;
  } catch (err) {
    console.error('@user.service::submitRequestAccessForm::error', err);
    throw err;
  }
};

export const submitContactUsForm = async (form: CreateWebContactUsInput) => {
  try {
    const newContact = await API.graphql(
      graphqlOperation(createWebContactUs, { input: form })
    );

    if (!newContact) return {};

    return newContact;
  } catch (err) {
    console.error('@user.service::submitContactUsForm::error', err);
    throw err;
  }
};

export const submitBusinessAnglesForms = async (
  form: CreateBusinessAnglesContactUsInput
) => {
  try {
    const newBAContact = await API.graphql(
      graphqlOperation(createBusinessAnglesContactUs, { input: form })
    );

    if (!newBAContact) return {};

    return newBAContact;
  } catch (err) {
    console.error('@user.service::submitBusinessAnglesForms::error', err);
    throw err;
  }
};

export const uploadResume = async (resumeFile: CreateCandidateResumeInput) => {
  try {
    const newUpload = await API.graphql(
      graphqlOperation(createCandidateResume, { input: resumeFile })
    );

    if (!newUpload) {
    }

    return newUpload;
  } catch (err) {
    console.error('@user.service::submitBusinessAnglesForms::error', err);
    throw err;
  }
};

export const submitJobApplicationForm = async (
  form: CreateCandidateLeadInput
) => {
  try {
    const newApplication = await API.graphql(
      graphqlOperation(createCandidateLead, { input: form })
    );

    if (!newApplication) return {};

    return newApplication;
  } catch (err) {
    console.error('@user.service::submitJobApplicationForm::error', err);
    throw err;
  }
};
