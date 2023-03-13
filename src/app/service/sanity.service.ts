import { Injectable } from '@angular/core';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { Management } from './management';
import { Sales } from './sales';
import { Staff } from './staff';

@Injectable({
  providedIn: 'root',
})
export class SanityService {
  constructor() {}

  sanityClientCredentials = {
    option: sanityClient({
      projectId: '8d091uxq',
      dataset: 'production',
    }),
  };

  urlFor = (source: any) =>
    imageUrlBuilder(this.sanityClientCredentials.option).image(source);

  async getManagement(): Promise<Management[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == 'management'] | order(id asc){
        _id,
        name,
        mainImage,
        position,
        quote
      }`
    );
  }

  async getSales(): Promise<Sales[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == 'sales'] | order(id asc){
        _id,
        name,
        mainImage,
        position,
        quote
      }`
    );
  }

  async getStaff(): Promise<Staff[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == 'staff'] | order(id asc){
        _id,
        name,
        mainImage,
        position,
        quote
      }`
    );
  }
}
