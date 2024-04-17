/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: unknown; output: unknown; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: unknown; output: unknown; }
};

export type Access = {
  canAccessAdmin: Scalars['Boolean']['output'];
  media?: Maybe<MediaAccess>;
  orderItems?: Maybe<OrderItemsAccess>;
  orders?: Maybe<OrdersAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  products?: Maybe<ProductsAccess>;
  reviews?: Maybe<ReviewsAccess>;
  users?: Maybe<UsersAccess>;
};

export type Color = {
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Array<Color_Color>>;
  id?: Maybe<Scalars['String']['output']>;
};

export type Color_Color =
  | 'coldWhite'
  | 'warmWhite';

export type Media = {
  alt?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  sizes?: Maybe<Media_Sizes>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type MediaCreateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDocAccessFields = {
  alt?: Maybe<MediaDocAccessFields_Alt>;
  caption?: Maybe<MediaDocAccessFields_Caption>;
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  sizes?: Maybe<MediaDocAccessFields_Sizes>;
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
  url?: Maybe<MediaDocAccessFields_Url>;
  width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Alt = {
  create?: Maybe<MediaDocAccessFields_Alt_Create>;
  delete?: Maybe<MediaDocAccessFields_Alt_Delete>;
  read?: Maybe<MediaDocAccessFields_Alt_Read>;
  update?: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Caption = {
  create?: Maybe<MediaDocAccessFields_Caption_Create>;
  delete?: Maybe<MediaDocAccessFields_Caption_Delete>;
  read?: Maybe<MediaDocAccessFields_Caption_Read>;
  update?: Maybe<MediaDocAccessFields_Caption_Update>;
};

export type MediaDocAccessFields_Caption_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Caption_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Caption_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Caption_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt = {
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename = {
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize = {
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height = {
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType = {
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes = {
  create?: Maybe<MediaDocAccessFields_Sizes_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Update>;
};

export type MediaDocAccessFields_Sizes_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Fields = {
  card?: Maybe<MediaDocAccessFields_Sizes_Card>;
  laptop?: Maybe<MediaDocAccessFields_Sizes_Laptop>;
  tablet?: Maybe<MediaDocAccessFields_Sizes_Tablet>;
  thumbnail?: Maybe<MediaDocAccessFields_Sizes_Thumbnail>;
};

export type MediaDocAccessFields_Sizes_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card = {
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Card_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Fields = {
  filename?: Maybe<MediaDocAccessFields_Sizes_Card_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Card_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Card_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Card_Width>;
};

export type MediaDocAccessFields_Sizes_Card_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename = {
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Filename_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize = {
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height = {
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Height_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType = {
  create?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url = {
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width = {
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Width_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop = {
  create?: Maybe<MediaDocAccessFields_Sizes_Laptop_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Laptop_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Laptop_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Laptop_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Laptop_Update>;
};

export type MediaDocAccessFields_Sizes_Laptop_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Fields = {
  filename?: Maybe<MediaDocAccessFields_Sizes_Laptop_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Laptop_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Laptop_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Laptop_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Laptop_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Laptop_Width>;
};

export type MediaDocAccessFields_Sizes_Laptop_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Filename = {
  create?: Maybe<MediaDocAccessFields_Sizes_Laptop_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Laptop_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Laptop_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Laptop_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Laptop_Filename_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Filename_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Filename_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Filename_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Filesize = {
  create?: Maybe<MediaDocAccessFields_Sizes_Laptop_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Laptop_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Laptop_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Laptop_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Laptop_Filesize_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Filesize_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Filesize_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Filesize_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Height = {
  create?: Maybe<MediaDocAccessFields_Sizes_Laptop_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Laptop_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Laptop_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Laptop_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Laptop_Height_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Height_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Height_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Height_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_MimeType = {
  create?: Maybe<MediaDocAccessFields_Sizes_Laptop_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Laptop_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Laptop_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Laptop_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Laptop_MimeType_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_MimeType_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_MimeType_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_MimeType_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Url = {
  create?: Maybe<MediaDocAccessFields_Sizes_Laptop_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Laptop_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Laptop_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Laptop_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Laptop_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Width = {
  create?: Maybe<MediaDocAccessFields_Sizes_Laptop_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Laptop_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Laptop_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Laptop_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Laptop_Width_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Width_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Width_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Laptop_Width_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet = {
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Tablet_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Fields = {
  filename?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Tablet_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Tablet_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Tablet_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Tablet_Width>;
};

export type MediaDocAccessFields_Sizes_Tablet_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filename = {
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Filename_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filename_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filename_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filename_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filesize = {
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Filesize_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filesize_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filesize_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Filesize_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Height = {
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Height_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Height_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Height_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Height_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_MimeType = {
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_MimeType_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_MimeType_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_MimeType_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_MimeType_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Url = {
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Width = {
  create?: Maybe<MediaDocAccessFields_Sizes_Tablet_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Tablet_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Tablet_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Tablet_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Tablet_Width_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Width_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Width_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Tablet_Width_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail = {
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Fields = {
  filename?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename = {
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize = {
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height = {
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType = {
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url = {
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width = {
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt = {
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url = {
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width = {
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields = {
  alt?: Maybe<MediaFields_Alt>;
  caption?: Maybe<MediaFields_Caption>;
  createdAt?: Maybe<MediaFields_CreatedAt>;
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  sizes?: Maybe<MediaFields_Sizes>;
  updatedAt?: Maybe<MediaFields_UpdatedAt>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
};

export type MediaFields_Alt = {
  create?: Maybe<MediaFields_Alt_Create>;
  delete?: Maybe<MediaFields_Alt_Delete>;
  read?: Maybe<MediaFields_Alt_Read>;
  update?: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Caption = {
  create?: Maybe<MediaFields_Caption_Create>;
  delete?: Maybe<MediaFields_Caption_Delete>;
  read?: Maybe<MediaFields_Caption_Read>;
  update?: Maybe<MediaFields_Caption_Update>;
};

export type MediaFields_Caption_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Caption_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Caption_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Caption_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt = {
  create?: Maybe<MediaFields_CreatedAt_Create>;
  delete?: Maybe<MediaFields_CreatedAt_Delete>;
  read?: Maybe<MediaFields_CreatedAt_Read>;
  update?: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename = {
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize = {
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height = {
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType = {
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes = {
  create?: Maybe<MediaFields_Sizes_Create>;
  delete?: Maybe<MediaFields_Sizes_Delete>;
  fields?: Maybe<MediaFields_Sizes_Fields>;
  read?: Maybe<MediaFields_Sizes_Read>;
  update?: Maybe<MediaFields_Sizes_Update>;
};

export type MediaFields_Sizes_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Fields = {
  card?: Maybe<MediaFields_Sizes_Card>;
  laptop?: Maybe<MediaFields_Sizes_Laptop>;
  tablet?: Maybe<MediaFields_Sizes_Tablet>;
  thumbnail?: Maybe<MediaFields_Sizes_Thumbnail>;
};

export type MediaFields_Sizes_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card = {
  create?: Maybe<MediaFields_Sizes_Card_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Delete>;
  fields?: Maybe<MediaFields_Sizes_Card_Fields>;
  read?: Maybe<MediaFields_Sizes_Card_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Update>;
};

export type MediaFields_Sizes_Card_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Fields = {
  filename?: Maybe<MediaFields_Sizes_Card_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Card_Filesize>;
  height?: Maybe<MediaFields_Sizes_Card_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Card_MimeType>;
  url?: Maybe<MediaFields_Sizes_Card_Url>;
  width?: Maybe<MediaFields_Sizes_Card_Width>;
};

export type MediaFields_Sizes_Card_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename = {
  create?: Maybe<MediaFields_Sizes_Card_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Filename_Update>;
};

export type MediaFields_Sizes_Card_Filename_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize = {
  create?: Maybe<MediaFields_Sizes_Card_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Filesize_Update>;
};

export type MediaFields_Sizes_Card_Filesize_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height = {
  create?: Maybe<MediaFields_Sizes_Card_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Height_Update>;
};

export type MediaFields_Sizes_Card_Height_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType = {
  create?: Maybe<MediaFields_Sizes_Card_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Card_MimeType_Update>;
};

export type MediaFields_Sizes_Card_MimeType_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url = {
  create?: Maybe<MediaFields_Sizes_Card_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Url_Update>;
};

export type MediaFields_Sizes_Card_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width = {
  create?: Maybe<MediaFields_Sizes_Card_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Width_Update>;
};

export type MediaFields_Sizes_Card_Width_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop = {
  create?: Maybe<MediaFields_Sizes_Laptop_Create>;
  delete?: Maybe<MediaFields_Sizes_Laptop_Delete>;
  fields?: Maybe<MediaFields_Sizes_Laptop_Fields>;
  read?: Maybe<MediaFields_Sizes_Laptop_Read>;
  update?: Maybe<MediaFields_Sizes_Laptop_Update>;
};

export type MediaFields_Sizes_Laptop_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Fields = {
  filename?: Maybe<MediaFields_Sizes_Laptop_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Laptop_Filesize>;
  height?: Maybe<MediaFields_Sizes_Laptop_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Laptop_MimeType>;
  url?: Maybe<MediaFields_Sizes_Laptop_Url>;
  width?: Maybe<MediaFields_Sizes_Laptop_Width>;
};

export type MediaFields_Sizes_Laptop_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Filename = {
  create?: Maybe<MediaFields_Sizes_Laptop_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Laptop_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Laptop_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Laptop_Filename_Update>;
};

export type MediaFields_Sizes_Laptop_Filename_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Filename_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Filename_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Filename_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Filesize = {
  create?: Maybe<MediaFields_Sizes_Laptop_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Laptop_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Laptop_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Laptop_Filesize_Update>;
};

export type MediaFields_Sizes_Laptop_Filesize_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Filesize_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Filesize_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Filesize_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Height = {
  create?: Maybe<MediaFields_Sizes_Laptop_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Laptop_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Laptop_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Laptop_Height_Update>;
};

export type MediaFields_Sizes_Laptop_Height_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Height_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Height_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Height_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_MimeType = {
  create?: Maybe<MediaFields_Sizes_Laptop_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Laptop_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Laptop_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Laptop_MimeType_Update>;
};

export type MediaFields_Sizes_Laptop_MimeType_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_MimeType_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_MimeType_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_MimeType_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Url = {
  create?: Maybe<MediaFields_Sizes_Laptop_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Laptop_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Laptop_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Laptop_Url_Update>;
};

export type MediaFields_Sizes_Laptop_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Width = {
  create?: Maybe<MediaFields_Sizes_Laptop_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Laptop_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Laptop_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Laptop_Width_Update>;
};

export type MediaFields_Sizes_Laptop_Width_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Width_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Width_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Laptop_Width_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet = {
  create?: Maybe<MediaFields_Sizes_Tablet_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Delete>;
  fields?: Maybe<MediaFields_Sizes_Tablet_Fields>;
  read?: Maybe<MediaFields_Sizes_Tablet_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Update>;
};

export type MediaFields_Sizes_Tablet_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Fields = {
  filename?: Maybe<MediaFields_Sizes_Tablet_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Tablet_Filesize>;
  height?: Maybe<MediaFields_Sizes_Tablet_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Tablet_MimeType>;
  url?: Maybe<MediaFields_Sizes_Tablet_Url>;
  width?: Maybe<MediaFields_Sizes_Tablet_Width>;
};

export type MediaFields_Sizes_Tablet_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filename = {
  create?: Maybe<MediaFields_Sizes_Tablet_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Filename_Update>;
};

export type MediaFields_Sizes_Tablet_Filename_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filename_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filename_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filename_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filesize = {
  create?: Maybe<MediaFields_Sizes_Tablet_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Filesize_Update>;
};

export type MediaFields_Sizes_Tablet_Filesize_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filesize_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filesize_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Filesize_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Height = {
  create?: Maybe<MediaFields_Sizes_Tablet_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Height_Update>;
};

export type MediaFields_Sizes_Tablet_Height_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Height_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Height_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Height_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_MimeType = {
  create?: Maybe<MediaFields_Sizes_Tablet_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_MimeType_Update>;
};

export type MediaFields_Sizes_Tablet_MimeType_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_MimeType_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_MimeType_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_MimeType_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Url = {
  create?: Maybe<MediaFields_Sizes_Tablet_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Url_Update>;
};

export type MediaFields_Sizes_Tablet_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Width = {
  create?: Maybe<MediaFields_Sizes_Tablet_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Width_Update>;
};

export type MediaFields_Sizes_Tablet_Width_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Width_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Width_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Tablet_Width_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail = {
  create?: Maybe<MediaFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<MediaFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Update>;
};

export type MediaFields_Sizes_Thumbnail_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Fields = {
  filename?: Maybe<MediaFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<MediaFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<MediaFields_Sizes_Thumbnail_Url>;
  width?: Maybe<MediaFields_Sizes_Thumbnail_Width>;
};

export type MediaFields_Sizes_Thumbnail_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename = {
  create?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filename_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize = {
  create?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filesize_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height = {
  create?: Maybe<MediaFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaFields_Sizes_Thumbnail_Height_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType = {
  create?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaFields_Sizes_Thumbnail_MimeType_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url = {
  create?: Maybe<MediaFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaFields_Sizes_Thumbnail_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width = {
  create?: Maybe<MediaFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaFields_Sizes_Thumbnail_Width_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt = {
  create?: Maybe<MediaFields_UpdatedAt_Create>;
  delete?: Maybe<MediaFields_UpdatedAt_Delete>;
  read?: Maybe<MediaFields_UpdatedAt_Read>;
  update?: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url = {
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width = {
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Read = {
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Update = {
  permission: Scalars['Boolean']['output'];
};

export type MediaReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media_Sizes = {
  card?: Maybe<Media_Sizes_Card>;
  laptop?: Maybe<Media_Sizes_Laptop>;
  tablet?: Maybe<Media_Sizes_Tablet>;
  thumbnail?: Maybe<Media_Sizes_Thumbnail>;
};

export type Media_Sizes_Card = {
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Laptop = {
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Tablet = {
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Thumbnail = {
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Caption_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Card__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Card__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Laptop__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Laptop__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Laptop__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Laptop__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Laptop__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Laptop__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Tablet__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Tablet__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Tablet__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Tablet__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Tablet__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Tablet__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  caption?: InputMaybe<Media_Caption_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__laptop__filename?: InputMaybe<Media_Sizes__Laptop__Filename_Operator>;
  sizes__laptop__filesize?: InputMaybe<Media_Sizes__Laptop__Filesize_Operator>;
  sizes__laptop__height?: InputMaybe<Media_Sizes__Laptop__Height_Operator>;
  sizes__laptop__mimeType?: InputMaybe<Media_Sizes__Laptop__MimeType_Operator>;
  sizes__laptop__url?: InputMaybe<Media_Sizes__Laptop__Url_Operator>;
  sizes__laptop__width?: InputMaybe<Media_Sizes__Laptop__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Media_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Media_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Media_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Media_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Media_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Media_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  caption?: InputMaybe<Media_Caption_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__laptop__filename?: InputMaybe<Media_Sizes__Laptop__Filename_Operator>;
  sizes__laptop__filesize?: InputMaybe<Media_Sizes__Laptop__Filesize_Operator>;
  sizes__laptop__height?: InputMaybe<Media_Sizes__Laptop__Height_Operator>;
  sizes__laptop__mimeType?: InputMaybe<Media_Sizes__Laptop__MimeType_Operator>;
  sizes__laptop__url?: InputMaybe<Media_Sizes__Laptop__Url_Operator>;
  sizes__laptop__width?: InputMaybe<Media_Sizes__Laptop__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Media_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Media_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Media_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Media_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Media_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Media_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  caption?: InputMaybe<Media_Caption_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__laptop__filename?: InputMaybe<Media_Sizes__Laptop__Filename_Operator>;
  sizes__laptop__filesize?: InputMaybe<Media_Sizes__Laptop__Filesize_Operator>;
  sizes__laptop__height?: InputMaybe<Media_Sizes__Laptop__Height_Operator>;
  sizes__laptop__mimeType?: InputMaybe<Media_Sizes__Laptop__MimeType_Operator>;
  sizes__laptop__url?: InputMaybe<Media_Sizes__Laptop__Url_Operator>;
  sizes__laptop__width?: InputMaybe<Media_Sizes__Laptop__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Media_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Media_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Media_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Media_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Media_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Media_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  createMedia?: Maybe<Media>;
  createOrder?: Maybe<Order>;
  createOrderItem?: Maybe<OrderItem>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createProduct?: Maybe<Product>;
  createReview?: Maybe<Review>;
  createUser?: Maybe<User>;
  deleteMedia?: Maybe<Media>;
  deleteOrder?: Maybe<Order>;
  deleteOrderItem?: Maybe<OrderItem>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deleteProduct?: Maybe<Product>;
  deleteReview?: Maybe<Review>;
  deleteUser?: Maybe<User>;
  forgotPasswordUser: Scalars['Boolean']['output'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars['String']['output']>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  unlockUser: Scalars['Boolean']['output'];
  updateMedia?: Maybe<Media>;
  updateOrder?: Maybe<Order>;
  updateOrderItem?: Maybe<OrderItem>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updateProduct?: Maybe<Product>;
  updateReview?: Maybe<Review>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOrderArgs = {
  data: MutationOrderInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOrderItemArgs = {
  data: MutationOrderItemInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateProductArgs = {
  data: MutationProductInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateReviewArgs = {
  data: MutationReviewInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteMediaArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteOrderItemArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteReviewArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  expiration?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRefreshTokenUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateOrderArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationOrderUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateOrderItemArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationOrderItemUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadPreferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateProductArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationProductUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateReviewArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationReviewUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type Order = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Order_Status>;
  stripeCheckoutID?: Maybe<Scalars['String']['output']>;
  totalAmount: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderItem = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  order: Order;
  product: Product;
  productVariantId: Scalars['String']['output'];
  quantity: Scalars['Float']['output'];
  totalAmount: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderItem_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderItem_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderItem_Order_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type OrderItem_ProductVariantId_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type OrderItem_Product_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type OrderItem_Quantity_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type OrderItem_TotalAmount_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type OrderItem_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderItem_Where = {
  AND?: InputMaybe<Array<InputMaybe<OrderItem_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<OrderItem_Where_Or>>>;
  createdAt?: InputMaybe<OrderItem_CreatedAt_Operator>;
  id?: InputMaybe<OrderItem_Id_Operator>;
  order?: InputMaybe<OrderItem_Order_Operator>;
  product?: InputMaybe<OrderItem_Product_Operator>;
  productVariantId?: InputMaybe<OrderItem_ProductVariantId_Operator>;
  quantity?: InputMaybe<OrderItem_Quantity_Operator>;
  totalAmount?: InputMaybe<OrderItem_TotalAmount_Operator>;
  updatedAt?: InputMaybe<OrderItem_UpdatedAt_Operator>;
};

export type OrderItem_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<OrderItem_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<OrderItem_Where_Or>>>;
  createdAt?: InputMaybe<OrderItem_CreatedAt_Operator>;
  id?: InputMaybe<OrderItem_Id_Operator>;
  order?: InputMaybe<OrderItem_Order_Operator>;
  product?: InputMaybe<OrderItem_Product_Operator>;
  productVariantId?: InputMaybe<OrderItem_ProductVariantId_Operator>;
  quantity?: InputMaybe<OrderItem_Quantity_Operator>;
  totalAmount?: InputMaybe<OrderItem_TotalAmount_Operator>;
  updatedAt?: InputMaybe<OrderItem_UpdatedAt_Operator>;
};

export type OrderItem_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<OrderItem_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<OrderItem_Where_Or>>>;
  createdAt?: InputMaybe<OrderItem_CreatedAt_Operator>;
  id?: InputMaybe<OrderItem_Id_Operator>;
  order?: InputMaybe<OrderItem_Order_Operator>;
  product?: InputMaybe<OrderItem_Product_Operator>;
  productVariantId?: InputMaybe<OrderItem_ProductVariantId_Operator>;
  quantity?: InputMaybe<OrderItem_Quantity_Operator>;
  totalAmount?: InputMaybe<OrderItem_TotalAmount_Operator>;
  updatedAt?: InputMaybe<OrderItem_UpdatedAt_Operator>;
};

export type OrderItems = {
  docs?: Maybe<Array<Maybe<OrderItem>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type OrderItemsCreateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrderItemsCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrderItemsDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrderItemsDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrderItemsDocAccessFields = {
  createdAt?: Maybe<OrderItemsDocAccessFields_CreatedAt>;
  order?: Maybe<OrderItemsDocAccessFields_Order>;
  product?: Maybe<OrderItemsDocAccessFields_Product>;
  productVariantId?: Maybe<OrderItemsDocAccessFields_ProductVariantId>;
  quantity?: Maybe<OrderItemsDocAccessFields_Quantity>;
  totalAmount?: Maybe<OrderItemsDocAccessFields_TotalAmount>;
  updatedAt?: Maybe<OrderItemsDocAccessFields_UpdatedAt>;
};

export type OrderItemsDocAccessFields_CreatedAt = {
  create?: Maybe<OrderItemsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<OrderItemsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<OrderItemsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<OrderItemsDocAccessFields_CreatedAt_Update>;
};

export type OrderItemsDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_Order = {
  create?: Maybe<OrderItemsDocAccessFields_Order_Create>;
  delete?: Maybe<OrderItemsDocAccessFields_Order_Delete>;
  read?: Maybe<OrderItemsDocAccessFields_Order_Read>;
  update?: Maybe<OrderItemsDocAccessFields_Order_Update>;
};

export type OrderItemsDocAccessFields_Order_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_Order_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_Order_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_Order_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_Product = {
  create?: Maybe<OrderItemsDocAccessFields_Product_Create>;
  delete?: Maybe<OrderItemsDocAccessFields_Product_Delete>;
  read?: Maybe<OrderItemsDocAccessFields_Product_Read>;
  update?: Maybe<OrderItemsDocAccessFields_Product_Update>;
};

export type OrderItemsDocAccessFields_ProductVariantId = {
  create?: Maybe<OrderItemsDocAccessFields_ProductVariantId_Create>;
  delete?: Maybe<OrderItemsDocAccessFields_ProductVariantId_Delete>;
  read?: Maybe<OrderItemsDocAccessFields_ProductVariantId_Read>;
  update?: Maybe<OrderItemsDocAccessFields_ProductVariantId_Update>;
};

export type OrderItemsDocAccessFields_ProductVariantId_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_ProductVariantId_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_ProductVariantId_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_ProductVariantId_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_Product_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_Product_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_Product_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_Product_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_Quantity = {
  create?: Maybe<OrderItemsDocAccessFields_Quantity_Create>;
  delete?: Maybe<OrderItemsDocAccessFields_Quantity_Delete>;
  read?: Maybe<OrderItemsDocAccessFields_Quantity_Read>;
  update?: Maybe<OrderItemsDocAccessFields_Quantity_Update>;
};

export type OrderItemsDocAccessFields_Quantity_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_Quantity_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_Quantity_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_Quantity_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_TotalAmount = {
  create?: Maybe<OrderItemsDocAccessFields_TotalAmount_Create>;
  delete?: Maybe<OrderItemsDocAccessFields_TotalAmount_Delete>;
  read?: Maybe<OrderItemsDocAccessFields_TotalAmount_Read>;
  update?: Maybe<OrderItemsDocAccessFields_TotalAmount_Update>;
};

export type OrderItemsDocAccessFields_TotalAmount_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_TotalAmount_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_TotalAmount_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_TotalAmount_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_UpdatedAt = {
  create?: Maybe<OrderItemsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<OrderItemsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<OrderItemsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<OrderItemsDocAccessFields_UpdatedAt_Update>;
};

export type OrderItemsDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields = {
  createdAt?: Maybe<OrderItemsFields_CreatedAt>;
  order?: Maybe<OrderItemsFields_Order>;
  product?: Maybe<OrderItemsFields_Product>;
  productVariantId?: Maybe<OrderItemsFields_ProductVariantId>;
  quantity?: Maybe<OrderItemsFields_Quantity>;
  totalAmount?: Maybe<OrderItemsFields_TotalAmount>;
  updatedAt?: Maybe<OrderItemsFields_UpdatedAt>;
};

export type OrderItemsFields_CreatedAt = {
  create?: Maybe<OrderItemsFields_CreatedAt_Create>;
  delete?: Maybe<OrderItemsFields_CreatedAt_Delete>;
  read?: Maybe<OrderItemsFields_CreatedAt_Read>;
  update?: Maybe<OrderItemsFields_CreatedAt_Update>;
};

export type OrderItemsFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_Order = {
  create?: Maybe<OrderItemsFields_Order_Create>;
  delete?: Maybe<OrderItemsFields_Order_Delete>;
  read?: Maybe<OrderItemsFields_Order_Read>;
  update?: Maybe<OrderItemsFields_Order_Update>;
};

export type OrderItemsFields_Order_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_Order_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_Order_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_Order_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_Product = {
  create?: Maybe<OrderItemsFields_Product_Create>;
  delete?: Maybe<OrderItemsFields_Product_Delete>;
  read?: Maybe<OrderItemsFields_Product_Read>;
  update?: Maybe<OrderItemsFields_Product_Update>;
};

export type OrderItemsFields_ProductVariantId = {
  create?: Maybe<OrderItemsFields_ProductVariantId_Create>;
  delete?: Maybe<OrderItemsFields_ProductVariantId_Delete>;
  read?: Maybe<OrderItemsFields_ProductVariantId_Read>;
  update?: Maybe<OrderItemsFields_ProductVariantId_Update>;
};

export type OrderItemsFields_ProductVariantId_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_ProductVariantId_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_ProductVariantId_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_ProductVariantId_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_Product_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_Product_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_Product_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_Product_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_Quantity = {
  create?: Maybe<OrderItemsFields_Quantity_Create>;
  delete?: Maybe<OrderItemsFields_Quantity_Delete>;
  read?: Maybe<OrderItemsFields_Quantity_Read>;
  update?: Maybe<OrderItemsFields_Quantity_Update>;
};

export type OrderItemsFields_Quantity_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_Quantity_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_Quantity_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_Quantity_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_TotalAmount = {
  create?: Maybe<OrderItemsFields_TotalAmount_Create>;
  delete?: Maybe<OrderItemsFields_TotalAmount_Delete>;
  read?: Maybe<OrderItemsFields_TotalAmount_Read>;
  update?: Maybe<OrderItemsFields_TotalAmount_Update>;
};

export type OrderItemsFields_TotalAmount_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_TotalAmount_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_TotalAmount_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_TotalAmount_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_UpdatedAt = {
  create?: Maybe<OrderItemsFields_UpdatedAt_Create>;
  delete?: Maybe<OrderItemsFields_UpdatedAt_Delete>;
  read?: Maybe<OrderItemsFields_UpdatedAt_Read>;
  update?: Maybe<OrderItemsFields_UpdatedAt_Update>;
};

export type OrderItemsFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrderItemsReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrderItemsReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrderItemsUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrderItemsUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Order_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Order_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Order_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Order_Status =
  | 'cancelled'
  | 'created'
  | 'fulfilled'
  | 'paid';

export type Order_Status_Input =
  | 'cancelled'
  | 'created'
  | 'fulfilled'
  | 'paid';

export type Order_Status_Operator = {
  contains?: InputMaybe<Order_Status_Input>;
  equals?: InputMaybe<Order_Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Order_Status_Input>;
  not_equals?: InputMaybe<Order_Status_Input>;
};

export type Order_StripeCheckoutId_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Order_TotalAmount_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Order_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Order_Where = {
  AND?: InputMaybe<Array<InputMaybe<Order_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Order_Where_Or>>>;
  createdAt?: InputMaybe<Order_CreatedAt_Operator>;
  email?: InputMaybe<Order_Email_Operator>;
  id?: InputMaybe<Order_Id_Operator>;
  status?: InputMaybe<Order_Status_Operator>;
  stripeCheckoutID?: InputMaybe<Order_StripeCheckoutId_Operator>;
  totalAmount?: InputMaybe<Order_TotalAmount_Operator>;
  updatedAt?: InputMaybe<Order_UpdatedAt_Operator>;
};

export type Order_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Order_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Order_Where_Or>>>;
  createdAt?: InputMaybe<Order_CreatedAt_Operator>;
  email?: InputMaybe<Order_Email_Operator>;
  id?: InputMaybe<Order_Id_Operator>;
  status?: InputMaybe<Order_Status_Operator>;
  stripeCheckoutID?: InputMaybe<Order_StripeCheckoutId_Operator>;
  totalAmount?: InputMaybe<Order_TotalAmount_Operator>;
  updatedAt?: InputMaybe<Order_UpdatedAt_Operator>;
};

export type Order_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Order_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Order_Where_Or>>>;
  createdAt?: InputMaybe<Order_CreatedAt_Operator>;
  email?: InputMaybe<Order_Email_Operator>;
  id?: InputMaybe<Order_Id_Operator>;
  status?: InputMaybe<Order_Status_Operator>;
  stripeCheckoutID?: InputMaybe<Order_StripeCheckoutId_Operator>;
  totalAmount?: InputMaybe<Order_TotalAmount_Operator>;
  updatedAt?: InputMaybe<Order_UpdatedAt_Operator>;
};

export type Orders = {
  docs?: Maybe<Array<Maybe<Order>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type OrdersCreateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersDocAccessFields = {
  createdAt?: Maybe<OrdersDocAccessFields_CreatedAt>;
  email?: Maybe<OrdersDocAccessFields_Email>;
  status?: Maybe<OrdersDocAccessFields_Status>;
  stripeCheckoutID?: Maybe<OrdersDocAccessFields_StripeCheckoutId>;
  totalAmount?: Maybe<OrdersDocAccessFields_TotalAmount>;
  updatedAt?: Maybe<OrdersDocAccessFields_UpdatedAt>;
};

export type OrdersDocAccessFields_CreatedAt = {
  create?: Maybe<OrdersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<OrdersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<OrdersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<OrdersDocAccessFields_CreatedAt_Update>;
};

export type OrdersDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Email = {
  create?: Maybe<OrdersDocAccessFields_Email_Create>;
  delete?: Maybe<OrdersDocAccessFields_Email_Delete>;
  read?: Maybe<OrdersDocAccessFields_Email_Read>;
  update?: Maybe<OrdersDocAccessFields_Email_Update>;
};

export type OrdersDocAccessFields_Email_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Email_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Email_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Email_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Status = {
  create?: Maybe<OrdersDocAccessFields_Status_Create>;
  delete?: Maybe<OrdersDocAccessFields_Status_Delete>;
  read?: Maybe<OrdersDocAccessFields_Status_Read>;
  update?: Maybe<OrdersDocAccessFields_Status_Update>;
};

export type OrdersDocAccessFields_Status_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Status_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Status_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Status_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_StripeCheckoutId = {
  create?: Maybe<OrdersDocAccessFields_StripeCheckoutId_Create>;
  delete?: Maybe<OrdersDocAccessFields_StripeCheckoutId_Delete>;
  read?: Maybe<OrdersDocAccessFields_StripeCheckoutId_Read>;
  update?: Maybe<OrdersDocAccessFields_StripeCheckoutId_Update>;
};

export type OrdersDocAccessFields_StripeCheckoutId_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_StripeCheckoutId_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_StripeCheckoutId_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_StripeCheckoutId_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_TotalAmount = {
  create?: Maybe<OrdersDocAccessFields_TotalAmount_Create>;
  delete?: Maybe<OrdersDocAccessFields_TotalAmount_Delete>;
  read?: Maybe<OrdersDocAccessFields_TotalAmount_Read>;
  update?: Maybe<OrdersDocAccessFields_TotalAmount_Update>;
};

export type OrdersDocAccessFields_TotalAmount_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_TotalAmount_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_TotalAmount_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_TotalAmount_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_UpdatedAt = {
  create?: Maybe<OrdersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<OrdersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<OrdersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<OrdersDocAccessFields_UpdatedAt_Update>;
};

export type OrdersDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields = {
  createdAt?: Maybe<OrdersFields_CreatedAt>;
  email?: Maybe<OrdersFields_Email>;
  status?: Maybe<OrdersFields_Status>;
  stripeCheckoutID?: Maybe<OrdersFields_StripeCheckoutId>;
  totalAmount?: Maybe<OrdersFields_TotalAmount>;
  updatedAt?: Maybe<OrdersFields_UpdatedAt>;
};

export type OrdersFields_CreatedAt = {
  create?: Maybe<OrdersFields_CreatedAt_Create>;
  delete?: Maybe<OrdersFields_CreatedAt_Delete>;
  read?: Maybe<OrdersFields_CreatedAt_Read>;
  update?: Maybe<OrdersFields_CreatedAt_Update>;
};

export type OrdersFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Email = {
  create?: Maybe<OrdersFields_Email_Create>;
  delete?: Maybe<OrdersFields_Email_Delete>;
  read?: Maybe<OrdersFields_Email_Read>;
  update?: Maybe<OrdersFields_Email_Update>;
};

export type OrdersFields_Email_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Email_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Email_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Email_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Status = {
  create?: Maybe<OrdersFields_Status_Create>;
  delete?: Maybe<OrdersFields_Status_Delete>;
  read?: Maybe<OrdersFields_Status_Read>;
  update?: Maybe<OrdersFields_Status_Update>;
};

export type OrdersFields_Status_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Status_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Status_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Status_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_StripeCheckoutId = {
  create?: Maybe<OrdersFields_StripeCheckoutId_Create>;
  delete?: Maybe<OrdersFields_StripeCheckoutId_Delete>;
  read?: Maybe<OrdersFields_StripeCheckoutId_Read>;
  update?: Maybe<OrdersFields_StripeCheckoutId_Update>;
};

export type OrdersFields_StripeCheckoutId_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_StripeCheckoutId_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_StripeCheckoutId_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_StripeCheckoutId_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_TotalAmount = {
  create?: Maybe<OrdersFields_TotalAmount_Create>;
  delete?: Maybe<OrdersFields_TotalAmount_Delete>;
  read?: Maybe<OrdersFields_TotalAmount_Read>;
  update?: Maybe<OrdersFields_TotalAmount_Update>;
};

export type OrdersFields_TotalAmount_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_TotalAmount_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_TotalAmount_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_TotalAmount_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_UpdatedAt = {
  create?: Maybe<OrdersFields_UpdatedAt_Create>;
  delete?: Maybe<OrdersFields_UpdatedAt_Delete>;
  read?: Maybe<OrdersFields_UpdatedAt_Read>;
  update?: Maybe<OrdersFields_UpdatedAt_Update>;
};

export type OrdersFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type OrdersReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreference = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: PayloadPreference_User_Relationship;
  value?: Maybe<Scalars['JSON']['output']>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreferenceUpdate_UserRelationshipInputRelationTo =
  | 'users';

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_UserRelationshipInputRelationTo =
  | 'users';

export type PayloadPreference_User_RelationTo =
  | 'users';

export type PayloadPreference_User_Relationship = {
  relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  value?: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type PayloadPreference_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_User_Relation = {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_User_Relation_RelationTo =
  | 'users';

export type PayloadPreference_Value_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  docs?: Maybe<Array<Maybe<PayloadPreference>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PayloadPreferencesCreateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDocAccessFields = {
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_User>;
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User = {
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields = {
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesFields_User>;
  value?: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key = {
  create?: Maybe<PayloadPreferencesFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesFields_Key_Read>;
  update?: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User = {
  create?: Maybe<PayloadPreferencesFields_User_Create>;
  delete?: Maybe<PayloadPreferencesFields_User_Delete>;
  read?: Maybe<PayloadPreferencesFields_User_Read>;
  update?: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value = {
  create?: Maybe<PayloadPreferencesFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesFields_Value_Read>;
  update?: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Read = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Update = {
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Product = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['JSON']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  image: Media;
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  variants: Array<Product_Variants>;
};


export type ProductDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductImageArgs = {
  where?: InputMaybe<Product_Image_Where>;
};

export type Product_Image_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Image_Caption_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Image_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Product_Image_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Image_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Product_Image_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Product_Image_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Image_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Image_Sizes__Card__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Image_Sizes__Card__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Product_Image_Sizes__Card__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Product_Image_Sizes__Card__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Image_Sizes__Card__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Image_Sizes__Card__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Product_Image_Sizes__Laptop__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Image_Sizes__Laptop__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Product_Image_Sizes__Laptop__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Product_Image_Sizes__Laptop__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Image_Sizes__Laptop__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Image_Sizes__Laptop__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Product_Image_Sizes__Tablet__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Image_Sizes__Tablet__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Product_Image_Sizes__Tablet__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Product_Image_Sizes__Tablet__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Image_Sizes__Tablet__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Image_Sizes__Tablet__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Product_Image_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Image_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Product_Image_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Product_Image_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Image_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Image_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Product_Image_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Product_Image_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Image_Where = {
  AND?: InputMaybe<Array<InputMaybe<Product_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Product_Image_Where_Or>>>;
  alt?: InputMaybe<Product_Image_Alt_Operator>;
  caption?: InputMaybe<Product_Image_Caption_Operator>;
  createdAt?: InputMaybe<Product_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Product_Image_Filename_Operator>;
  filesize?: InputMaybe<Product_Image_Filesize_Operator>;
  height?: InputMaybe<Product_Image_Height_Operator>;
  id?: InputMaybe<Product_Image_Id_Operator>;
  mimeType?: InputMaybe<Product_Image_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Product_Image_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Product_Image_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Product_Image_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Product_Image_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Product_Image_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Product_Image_Sizes__Card__Width_Operator>;
  sizes__laptop__filename?: InputMaybe<Product_Image_Sizes__Laptop__Filename_Operator>;
  sizes__laptop__filesize?: InputMaybe<Product_Image_Sizes__Laptop__Filesize_Operator>;
  sizes__laptop__height?: InputMaybe<Product_Image_Sizes__Laptop__Height_Operator>;
  sizes__laptop__mimeType?: InputMaybe<Product_Image_Sizes__Laptop__MimeType_Operator>;
  sizes__laptop__url?: InputMaybe<Product_Image_Sizes__Laptop__Url_Operator>;
  sizes__laptop__width?: InputMaybe<Product_Image_Sizes__Laptop__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Product_Image_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Product_Image_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Product_Image_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Product_Image_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Product_Image_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Product_Image_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Product_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Product_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Product_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Product_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Product_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Product_Image_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Product_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Product_Image_Url_Operator>;
  width?: InputMaybe<Product_Image_Width_Operator>;
};

export type Product_Image_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Product_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Product_Image_Where_Or>>>;
  alt?: InputMaybe<Product_Image_Alt_Operator>;
  caption?: InputMaybe<Product_Image_Caption_Operator>;
  createdAt?: InputMaybe<Product_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Product_Image_Filename_Operator>;
  filesize?: InputMaybe<Product_Image_Filesize_Operator>;
  height?: InputMaybe<Product_Image_Height_Operator>;
  id?: InputMaybe<Product_Image_Id_Operator>;
  mimeType?: InputMaybe<Product_Image_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Product_Image_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Product_Image_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Product_Image_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Product_Image_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Product_Image_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Product_Image_Sizes__Card__Width_Operator>;
  sizes__laptop__filename?: InputMaybe<Product_Image_Sizes__Laptop__Filename_Operator>;
  sizes__laptop__filesize?: InputMaybe<Product_Image_Sizes__Laptop__Filesize_Operator>;
  sizes__laptop__height?: InputMaybe<Product_Image_Sizes__Laptop__Height_Operator>;
  sizes__laptop__mimeType?: InputMaybe<Product_Image_Sizes__Laptop__MimeType_Operator>;
  sizes__laptop__url?: InputMaybe<Product_Image_Sizes__Laptop__Url_Operator>;
  sizes__laptop__width?: InputMaybe<Product_Image_Sizes__Laptop__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Product_Image_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Product_Image_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Product_Image_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Product_Image_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Product_Image_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Product_Image_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Product_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Product_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Product_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Product_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Product_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Product_Image_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Product_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Product_Image_Url_Operator>;
  width?: InputMaybe<Product_Image_Width_Operator>;
};

export type Product_Image_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Product_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Product_Image_Where_Or>>>;
  alt?: InputMaybe<Product_Image_Alt_Operator>;
  caption?: InputMaybe<Product_Image_Caption_Operator>;
  createdAt?: InputMaybe<Product_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Product_Image_Filename_Operator>;
  filesize?: InputMaybe<Product_Image_Filesize_Operator>;
  height?: InputMaybe<Product_Image_Height_Operator>;
  id?: InputMaybe<Product_Image_Id_Operator>;
  mimeType?: InputMaybe<Product_Image_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Product_Image_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Product_Image_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Product_Image_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Product_Image_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Product_Image_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Product_Image_Sizes__Card__Width_Operator>;
  sizes__laptop__filename?: InputMaybe<Product_Image_Sizes__Laptop__Filename_Operator>;
  sizes__laptop__filesize?: InputMaybe<Product_Image_Sizes__Laptop__Filesize_Operator>;
  sizes__laptop__height?: InputMaybe<Product_Image_Sizes__Laptop__Height_Operator>;
  sizes__laptop__mimeType?: InputMaybe<Product_Image_Sizes__Laptop__MimeType_Operator>;
  sizes__laptop__url?: InputMaybe<Product_Image_Sizes__Laptop__Url_Operator>;
  sizes__laptop__width?: InputMaybe<Product_Image_Sizes__Laptop__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Product_Image_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Product_Image_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Product_Image_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Product_Image_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Product_Image_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Product_Image_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Product_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Product_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Product_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Product_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Product_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Product_Image_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Product_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Product_Image_Url_Operator>;
  width?: InputMaybe<Product_Image_Width_Operator>;
};

export type Product_Image_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Product_Variants = Variant;

export type Product_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Product_Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Product_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Product_Image_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Product_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Price_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Product_Rating_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Product_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Product_Where = {
  AND?: InputMaybe<Array<InputMaybe<Product_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Product_Where_Or>>>;
  createdAt?: InputMaybe<Product_CreatedAt_Operator>;
  description?: InputMaybe<Product_Description_Operator>;
  id?: InputMaybe<Product_Id_Operator>;
  image?: InputMaybe<Product_Image_Operator>;
  name?: InputMaybe<Product_Name_Operator>;
  price?: InputMaybe<Product_Price_Operator>;
  rating?: InputMaybe<Product_Rating_Operator>;
  slug?: InputMaybe<Product_Slug_Operator>;
  updatedAt?: InputMaybe<Product_UpdatedAt_Operator>;
};

export type Product_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Product_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Product_Where_Or>>>;
  createdAt?: InputMaybe<Product_CreatedAt_Operator>;
  description?: InputMaybe<Product_Description_Operator>;
  id?: InputMaybe<Product_Id_Operator>;
  image?: InputMaybe<Product_Image_Operator>;
  name?: InputMaybe<Product_Name_Operator>;
  price?: InputMaybe<Product_Price_Operator>;
  rating?: InputMaybe<Product_Rating_Operator>;
  slug?: InputMaybe<Product_Slug_Operator>;
  updatedAt?: InputMaybe<Product_UpdatedAt_Operator>;
};

export type Product_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Product_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Product_Where_Or>>>;
  createdAt?: InputMaybe<Product_CreatedAt_Operator>;
  description?: InputMaybe<Product_Description_Operator>;
  id?: InputMaybe<Product_Id_Operator>;
  image?: InputMaybe<Product_Image_Operator>;
  name?: InputMaybe<Product_Name_Operator>;
  price?: InputMaybe<Product_Price_Operator>;
  rating?: InputMaybe<Product_Rating_Operator>;
  slug?: InputMaybe<Product_Slug_Operator>;
  updatedAt?: InputMaybe<Product_UpdatedAt_Operator>;
};

export type Products = {
  docs?: Maybe<Array<Maybe<Product>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ProductsCreateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsDocAccessFields = {
  createdAt?: Maybe<ProductsDocAccessFields_CreatedAt>;
  description?: Maybe<ProductsDocAccessFields_Description>;
  image?: Maybe<ProductsDocAccessFields_Image>;
  name?: Maybe<ProductsDocAccessFields_Name>;
  price?: Maybe<ProductsDocAccessFields_Price>;
  rating?: Maybe<ProductsDocAccessFields_Rating>;
  slug?: Maybe<ProductsDocAccessFields_Slug>;
  updatedAt?: Maybe<ProductsDocAccessFields_UpdatedAt>;
  variants?: Maybe<ProductsDocAccessFields_Variants>;
};

export type ProductsDocAccessFields_CreatedAt = {
  create?: Maybe<ProductsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ProductsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ProductsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ProductsDocAccessFields_CreatedAt_Update>;
};

export type ProductsDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Description = {
  create?: Maybe<ProductsDocAccessFields_Description_Create>;
  delete?: Maybe<ProductsDocAccessFields_Description_Delete>;
  read?: Maybe<ProductsDocAccessFields_Description_Read>;
  update?: Maybe<ProductsDocAccessFields_Description_Update>;
};

export type ProductsDocAccessFields_Description_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Description_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Description_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Description_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Image = {
  create?: Maybe<ProductsDocAccessFields_Image_Create>;
  delete?: Maybe<ProductsDocAccessFields_Image_Delete>;
  read?: Maybe<ProductsDocAccessFields_Image_Read>;
  update?: Maybe<ProductsDocAccessFields_Image_Update>;
};

export type ProductsDocAccessFields_Image_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Image_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Image_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Image_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Name = {
  create?: Maybe<ProductsDocAccessFields_Name_Create>;
  delete?: Maybe<ProductsDocAccessFields_Name_Delete>;
  read?: Maybe<ProductsDocAccessFields_Name_Read>;
  update?: Maybe<ProductsDocAccessFields_Name_Update>;
};

export type ProductsDocAccessFields_Name_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Name_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Name_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Name_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Price = {
  create?: Maybe<ProductsDocAccessFields_Price_Create>;
  delete?: Maybe<ProductsDocAccessFields_Price_Delete>;
  read?: Maybe<ProductsDocAccessFields_Price_Read>;
  update?: Maybe<ProductsDocAccessFields_Price_Update>;
};

export type ProductsDocAccessFields_Price_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Price_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Price_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Price_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Rating = {
  create?: Maybe<ProductsDocAccessFields_Rating_Create>;
  delete?: Maybe<ProductsDocAccessFields_Rating_Delete>;
  read?: Maybe<ProductsDocAccessFields_Rating_Read>;
  update?: Maybe<ProductsDocAccessFields_Rating_Update>;
};

export type ProductsDocAccessFields_Rating_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Rating_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Rating_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Rating_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Slug = {
  create?: Maybe<ProductsDocAccessFields_Slug_Create>;
  delete?: Maybe<ProductsDocAccessFields_Slug_Delete>;
  read?: Maybe<ProductsDocAccessFields_Slug_Read>;
  update?: Maybe<ProductsDocAccessFields_Slug_Update>;
};

export type ProductsDocAccessFields_Slug_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Slug_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Slug_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Slug_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_UpdatedAt = {
  create?: Maybe<ProductsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ProductsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ProductsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ProductsDocAccessFields_UpdatedAt_Update>;
};

export type ProductsDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Variants = {
  create?: Maybe<ProductsDocAccessFields_Variants_Create>;
  delete?: Maybe<ProductsDocAccessFields_Variants_Delete>;
  read?: Maybe<ProductsDocAccessFields_Variants_Read>;
  update?: Maybe<ProductsDocAccessFields_Variants_Update>;
};

export type ProductsDocAccessFields_Variants_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Variants_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Variants_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Variants_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields = {
  createdAt?: Maybe<ProductsFields_CreatedAt>;
  description?: Maybe<ProductsFields_Description>;
  image?: Maybe<ProductsFields_Image>;
  name?: Maybe<ProductsFields_Name>;
  price?: Maybe<ProductsFields_Price>;
  rating?: Maybe<ProductsFields_Rating>;
  slug?: Maybe<ProductsFields_Slug>;
  updatedAt?: Maybe<ProductsFields_UpdatedAt>;
  variants?: Maybe<ProductsFields_Variants>;
};

export type ProductsFields_CreatedAt = {
  create?: Maybe<ProductsFields_CreatedAt_Create>;
  delete?: Maybe<ProductsFields_CreatedAt_Delete>;
  read?: Maybe<ProductsFields_CreatedAt_Read>;
  update?: Maybe<ProductsFields_CreatedAt_Update>;
};

export type ProductsFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Description = {
  create?: Maybe<ProductsFields_Description_Create>;
  delete?: Maybe<ProductsFields_Description_Delete>;
  read?: Maybe<ProductsFields_Description_Read>;
  update?: Maybe<ProductsFields_Description_Update>;
};

export type ProductsFields_Description_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Description_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Description_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Description_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Image = {
  create?: Maybe<ProductsFields_Image_Create>;
  delete?: Maybe<ProductsFields_Image_Delete>;
  read?: Maybe<ProductsFields_Image_Read>;
  update?: Maybe<ProductsFields_Image_Update>;
};

export type ProductsFields_Image_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Image_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Image_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Image_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Name = {
  create?: Maybe<ProductsFields_Name_Create>;
  delete?: Maybe<ProductsFields_Name_Delete>;
  read?: Maybe<ProductsFields_Name_Read>;
  update?: Maybe<ProductsFields_Name_Update>;
};

export type ProductsFields_Name_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Name_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Name_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Name_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Price = {
  create?: Maybe<ProductsFields_Price_Create>;
  delete?: Maybe<ProductsFields_Price_Delete>;
  read?: Maybe<ProductsFields_Price_Read>;
  update?: Maybe<ProductsFields_Price_Update>;
};

export type ProductsFields_Price_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Price_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Price_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Price_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Rating = {
  create?: Maybe<ProductsFields_Rating_Create>;
  delete?: Maybe<ProductsFields_Rating_Delete>;
  read?: Maybe<ProductsFields_Rating_Read>;
  update?: Maybe<ProductsFields_Rating_Update>;
};

export type ProductsFields_Rating_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Rating_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Rating_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Rating_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Slug = {
  create?: Maybe<ProductsFields_Slug_Create>;
  delete?: Maybe<ProductsFields_Slug_Delete>;
  read?: Maybe<ProductsFields_Slug_Read>;
  update?: Maybe<ProductsFields_Slug_Update>;
};

export type ProductsFields_Slug_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Slug_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Slug_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Slug_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_UpdatedAt = {
  create?: Maybe<ProductsFields_UpdatedAt_Create>;
  delete?: Maybe<ProductsFields_UpdatedAt_Delete>;
  read?: Maybe<ProductsFields_UpdatedAt_Read>;
  update?: Maybe<ProductsFields_UpdatedAt_Update>;
};

export type ProductsFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Variants = {
  create?: Maybe<ProductsFields_Variants_Create>;
  delete?: Maybe<ProductsFields_Variants_Delete>;
  read?: Maybe<ProductsFields_Variants_Read>;
  update?: Maybe<ProductsFields_Variants_Update>;
};

export type ProductsFields_Variants_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Variants_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Variants_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Variants_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ProductsReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
  Access?: Maybe<Access>;
  Media?: Maybe<Media>;
  Order?: Maybe<Order>;
  OrderItem?: Maybe<OrderItem>;
  OrderItems?: Maybe<OrderItems>;
  Orders?: Maybe<Orders>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  Product?: Maybe<Product>;
  Products?: Maybe<Products>;
  Review?: Maybe<Review>;
  Reviews?: Maybe<Reviews>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  allMedia?: Maybe<AllMedia>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessOrder?: Maybe<OrdersDocAccess>;
  docAccessOrderItem?: Maybe<OrderItemsDocAccess>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  docAccessProduct?: Maybe<ProductsDocAccess>;
  docAccessReview?: Maybe<ReviewsDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']['output']>;
  meUser?: Maybe<UsersMe>;
};


export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryOrderArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryOrderItemArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryOrderItemsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<OrderItem_Where>;
};


export type QueryOrdersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Order_Where>;
};


export type QueryPayloadPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryProductArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryProductsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Product_Where>;
};


export type QueryReviewArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryReviewsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Review_Where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessOrderArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessOrderItemArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessProductArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessReviewArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['Int']['input'];
};

export type Review = {
  author: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['JSON']['output'];
  email: Scalars['EmailAddress']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  product: Product;
  rating: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ReviewDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Review_Author_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Review_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Review_Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Review_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type Review_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Review_Product_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Review_Rating_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Review_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Review_Where = {
  AND?: InputMaybe<Array<InputMaybe<Review_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Review_Where_Or>>>;
  author?: InputMaybe<Review_Author_Operator>;
  createdAt?: InputMaybe<Review_CreatedAt_Operator>;
  description?: InputMaybe<Review_Description_Operator>;
  email?: InputMaybe<Review_Email_Operator>;
  id?: InputMaybe<Review_Id_Operator>;
  product?: InputMaybe<Review_Product_Operator>;
  rating?: InputMaybe<Review_Rating_Operator>;
  updatedAt?: InputMaybe<Review_UpdatedAt_Operator>;
};

export type Review_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Review_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Review_Where_Or>>>;
  author?: InputMaybe<Review_Author_Operator>;
  createdAt?: InputMaybe<Review_CreatedAt_Operator>;
  description?: InputMaybe<Review_Description_Operator>;
  email?: InputMaybe<Review_Email_Operator>;
  id?: InputMaybe<Review_Id_Operator>;
  product?: InputMaybe<Review_Product_Operator>;
  rating?: InputMaybe<Review_Rating_Operator>;
  updatedAt?: InputMaybe<Review_UpdatedAt_Operator>;
};

export type Review_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Review_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Review_Where_Or>>>;
  author?: InputMaybe<Review_Author_Operator>;
  createdAt?: InputMaybe<Review_CreatedAt_Operator>;
  description?: InputMaybe<Review_Description_Operator>;
  email?: InputMaybe<Review_Email_Operator>;
  id?: InputMaybe<Review_Id_Operator>;
  product?: InputMaybe<Review_Product_Operator>;
  rating?: InputMaybe<Review_Rating_Operator>;
  updatedAt?: InputMaybe<Review_UpdatedAt_Operator>;
};

export type Reviews = {
  docs?: Maybe<Array<Maybe<Review>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ReviewsCreateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ReviewsCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ReviewsDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ReviewsDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ReviewsDocAccessFields = {
  author?: Maybe<ReviewsDocAccessFields_Author>;
  createdAt?: Maybe<ReviewsDocAccessFields_CreatedAt>;
  description?: Maybe<ReviewsDocAccessFields_Description>;
  email?: Maybe<ReviewsDocAccessFields_Email>;
  product?: Maybe<ReviewsDocAccessFields_Product>;
  rating?: Maybe<ReviewsDocAccessFields_Rating>;
  updatedAt?: Maybe<ReviewsDocAccessFields_UpdatedAt>;
};

export type ReviewsDocAccessFields_Author = {
  create?: Maybe<ReviewsDocAccessFields_Author_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Author_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Author_Read>;
  update?: Maybe<ReviewsDocAccessFields_Author_Update>;
};

export type ReviewsDocAccessFields_Author_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Author_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Author_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Author_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_CreatedAt = {
  create?: Maybe<ReviewsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ReviewsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ReviewsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ReviewsDocAccessFields_CreatedAt_Update>;
};

export type ReviewsDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Description = {
  create?: Maybe<ReviewsDocAccessFields_Description_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Description_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Description_Read>;
  update?: Maybe<ReviewsDocAccessFields_Description_Update>;
};

export type ReviewsDocAccessFields_Description_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Description_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Description_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Description_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Email = {
  create?: Maybe<ReviewsDocAccessFields_Email_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Email_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Email_Read>;
  update?: Maybe<ReviewsDocAccessFields_Email_Update>;
};

export type ReviewsDocAccessFields_Email_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Email_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Email_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Email_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Product = {
  create?: Maybe<ReviewsDocAccessFields_Product_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Product_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Product_Read>;
  update?: Maybe<ReviewsDocAccessFields_Product_Update>;
};

export type ReviewsDocAccessFields_Product_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Product_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Product_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Product_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Rating = {
  create?: Maybe<ReviewsDocAccessFields_Rating_Create>;
  delete?: Maybe<ReviewsDocAccessFields_Rating_Delete>;
  read?: Maybe<ReviewsDocAccessFields_Rating_Read>;
  update?: Maybe<ReviewsDocAccessFields_Rating_Update>;
};

export type ReviewsDocAccessFields_Rating_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Rating_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Rating_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Rating_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_UpdatedAt = {
  create?: Maybe<ReviewsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ReviewsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ReviewsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ReviewsDocAccessFields_UpdatedAt_Update>;
};

export type ReviewsDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields = {
  author?: Maybe<ReviewsFields_Author>;
  createdAt?: Maybe<ReviewsFields_CreatedAt>;
  description?: Maybe<ReviewsFields_Description>;
  email?: Maybe<ReviewsFields_Email>;
  product?: Maybe<ReviewsFields_Product>;
  rating?: Maybe<ReviewsFields_Rating>;
  updatedAt?: Maybe<ReviewsFields_UpdatedAt>;
};

export type ReviewsFields_Author = {
  create?: Maybe<ReviewsFields_Author_Create>;
  delete?: Maybe<ReviewsFields_Author_Delete>;
  read?: Maybe<ReviewsFields_Author_Read>;
  update?: Maybe<ReviewsFields_Author_Update>;
};

export type ReviewsFields_Author_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Author_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Author_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Author_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_CreatedAt = {
  create?: Maybe<ReviewsFields_CreatedAt_Create>;
  delete?: Maybe<ReviewsFields_CreatedAt_Delete>;
  read?: Maybe<ReviewsFields_CreatedAt_Read>;
  update?: Maybe<ReviewsFields_CreatedAt_Update>;
};

export type ReviewsFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Description = {
  create?: Maybe<ReviewsFields_Description_Create>;
  delete?: Maybe<ReviewsFields_Description_Delete>;
  read?: Maybe<ReviewsFields_Description_Read>;
  update?: Maybe<ReviewsFields_Description_Update>;
};

export type ReviewsFields_Description_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Description_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Description_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Description_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Email = {
  create?: Maybe<ReviewsFields_Email_Create>;
  delete?: Maybe<ReviewsFields_Email_Delete>;
  read?: Maybe<ReviewsFields_Email_Read>;
  update?: Maybe<ReviewsFields_Email_Update>;
};

export type ReviewsFields_Email_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Email_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Email_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Email_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Product = {
  create?: Maybe<ReviewsFields_Product_Create>;
  delete?: Maybe<ReviewsFields_Product_Delete>;
  read?: Maybe<ReviewsFields_Product_Read>;
  update?: Maybe<ReviewsFields_Product_Update>;
};

export type ReviewsFields_Product_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Product_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Product_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Product_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Rating = {
  create?: Maybe<ReviewsFields_Rating_Create>;
  delete?: Maybe<ReviewsFields_Rating_Delete>;
  read?: Maybe<ReviewsFields_Rating_Read>;
  update?: Maybe<ReviewsFields_Rating_Update>;
};

export type ReviewsFields_Rating_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Rating_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Rating_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Rating_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_UpdatedAt = {
  create?: Maybe<ReviewsFields_UpdatedAt_Create>;
  delete?: Maybe<ReviewsFields_UpdatedAt_Delete>;
  read?: Maybe<ReviewsFields_UpdatedAt_Read>;
  update?: Maybe<ReviewsFields_UpdatedAt_Update>;
};

export type ReviewsFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type ReviewsReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ReviewsReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ReviewsUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ReviewsUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Shape = {
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  shape?: Maybe<Shape_Shape>;
};

export type Shape_Shape =
  | 'circle'
  | 'rectangle'
  | 'square';

export type Size = {
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Size_Size>;
};

export type Size_Size =
  | '_30'
  | '_40'
  | '_50'
  | '_60'
  | '_70'
  | '_80';

export type User = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lockUntil?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts?: Maybe<Scalars['Float']['output']>;
  password: Scalars['String']['output'];
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  salt?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UsersCreateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
  createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
  email?: Maybe<UsersDocAccessFields_Email>;
  password?: Maybe<UsersDocAccessFields_Password>;
  updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields_CreatedAt = {
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password = {
  create?: Maybe<UsersDocAccessFields_Password_Create>;
  delete?: Maybe<UsersDocAccessFields_Password_Delete>;
  read?: Maybe<UsersDocAccessFields_Password_Read>;
  update?: Maybe<UsersDocAccessFields_Password_Update>;
};

export type UsersDocAccessFields_Password_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
  createdAt?: Maybe<UsersFields_CreatedAt>;
  email?: Maybe<UsersFields_Email>;
  password?: Maybe<UsersFields_Password>;
  updatedAt?: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields_CreatedAt = {
  create?: Maybe<UsersFields_CreatedAt_Create>;
  delete?: Maybe<UsersFields_CreatedAt_Delete>;
  read?: Maybe<UsersFields_CreatedAt_Read>;
  update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password = {
  create?: Maybe<UsersFields_Password_Create>;
  delete?: Maybe<UsersFields_Password_Delete>;
  read?: Maybe<UsersFields_Password_Read>;
  update?: Maybe<UsersFields_Password_Update>;
};

export type UsersFields_Password_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
  create?: Maybe<UsersFields_UpdatedAt_Create>;
  delete?: Maybe<UsersFields_UpdatedAt_Delete>;
  read?: Maybe<UsersFields_UpdatedAt_Read>;
  update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
  permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AllMedia = {
  docs?: Maybe<Array<Maybe<Media>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type MediaAccess = {
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

export type MutationMediaInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<MutationMedia_SizesInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<MutationMediaUpdate_SizesInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_SizesInput = {
  card?: InputMaybe<MutationMediaUpdate_Sizes_CardInput>;
  laptop?: InputMaybe<MutationMediaUpdate_Sizes_LaptopInput>;
  tablet?: InputMaybe<MutationMediaUpdate_Sizes_TabletInput>;
  thumbnail?: InputMaybe<MutationMediaUpdate_Sizes_ThumbnailInput>;
};

export type MutationMediaUpdate_Sizes_CardInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_LaptopInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_TabletInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_SizesInput = {
  card?: InputMaybe<MutationMedia_Sizes_CardInput>;
  laptop?: InputMaybe<MutationMedia_Sizes_LaptopInput>;
  tablet?: InputMaybe<MutationMedia_Sizes_TabletInput>;
  thumbnail?: InputMaybe<MutationMedia_Sizes_ThumbnailInput>;
};

export type MutationMedia_Sizes_CardInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_LaptopInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_TabletInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationOrderInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  stripeCheckoutID?: InputMaybe<Scalars['String']['input']>;
  totalAmount: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationOrderItemInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<Scalars['Int']['input']>;
  productVariantId: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
  totalAmount: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationOrderItemUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<Scalars['Int']['input']>;
  productVariantId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  totalAmount?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationOrderUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  stripeCheckoutID?: InputMaybe<Scalars['String']['input']>;
  totalAmount?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationProductInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['JSON']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  rating?: InputMaybe<Scalars['Float']['input']>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  variants?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationProductUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  variants?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationReviewInput = {
  author: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['JSON']['input'];
  email: Scalars['String']['input'];
  product?: InputMaybe<Scalars['Int']['input']>;
  rating: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationReviewUpdateInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password: Scalars['String']['input'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type OrderItemsAccess = {
  create?: Maybe<OrderItemsCreateAccess>;
  delete?: Maybe<OrderItemsDeleteAccess>;
  fields?: Maybe<OrderItemsFields>;
  read?: Maybe<OrderItemsReadAccess>;
  update?: Maybe<OrderItemsUpdateAccess>;
};

export type OrderItemsDocAccess = {
  create?: Maybe<OrderItemsCreateDocAccess>;
  delete?: Maybe<OrderItemsDeleteDocAccess>;
  fields?: Maybe<OrderItemsDocAccessFields>;
  read?: Maybe<OrderItemsReadDocAccess>;
  update?: Maybe<OrderItemsUpdateDocAccess>;
};

export type OrdersAccess = {
  create?: Maybe<OrdersCreateAccess>;
  delete?: Maybe<OrdersDeleteAccess>;
  fields?: Maybe<OrdersFields>;
  read?: Maybe<OrdersReadAccess>;
  update?: Maybe<OrdersUpdateAccess>;
};

export type OrdersDocAccess = {
  create?: Maybe<OrdersCreateDocAccess>;
  delete?: Maybe<OrdersDeleteDocAccess>;
  fields?: Maybe<OrdersDocAccessFields>;
  read?: Maybe<OrdersReadDocAccess>;
  update?: Maybe<OrdersUpdateDocAccess>;
};

export type Payload_PreferencesAccess = {
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type ProductsAccess = {
  create?: Maybe<ProductsCreateAccess>;
  delete?: Maybe<ProductsDeleteAccess>;
  fields?: Maybe<ProductsFields>;
  read?: Maybe<ProductsReadAccess>;
  update?: Maybe<ProductsUpdateAccess>;
};

export type ProductsDocAccess = {
  create?: Maybe<ProductsCreateDocAccess>;
  delete?: Maybe<ProductsDeleteDocAccess>;
  fields?: Maybe<ProductsDocAccessFields>;
  read?: Maybe<ProductsReadDocAccess>;
  update?: Maybe<ProductsUpdateDocAccess>;
};

export type ReviewsAccess = {
  create?: Maybe<ReviewsCreateAccess>;
  delete?: Maybe<ReviewsDeleteAccess>;
  fields?: Maybe<ReviewsFields>;
  read?: Maybe<ReviewsReadAccess>;
  update?: Maybe<ReviewsUpdateAccess>;
};

export type ReviewsDocAccess = {
  create?: Maybe<ReviewsCreateDocAccess>;
  delete?: Maybe<ReviewsDeleteDocAccess>;
  fields?: Maybe<ReviewsDocAccessFields>;
  read?: Maybe<ReviewsReadDocAccess>;
  update?: Maybe<ReviewsUpdateDocAccess>;
};

export type UsersAccess = {
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
};

export type UsersLoginResult = {
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Variant = {
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  items?: Maybe<Array<Variant_Items>>;
  sku: Scalars['String']['output'];
};

export type Variant_Items = Color | Shape | Size;

export type CartAddItemMutationVariables = Exact<{
  totalAmount: Scalars['Float']['input'];
  cartId: Scalars['Int']['input'];
  productId: Scalars['Int']['input'];
  productVariantId: Scalars['String']['input'];
}>;


export type CartAddItemMutation = { createOrderItem?: { id?: number | null } | null };

export type CartChangeItemQuantityMutationVariables = Exact<{
  itemId: Scalars['Int']['input'];
  quantity: Scalars['Float']['input'];
  totalAmount: Scalars['Float']['input'];
  cartId: Scalars['Int']['input'];
}>;


export type CartChangeItemQuantityMutation = { updateOrderItem?: { id?: number | null, quantity: number } | null };

export type CartCreateMutationVariables = Exact<{
  status?: InputMaybe<Scalars['String']['input']>;
}>;


export type CartCreateMutation = { createOrder?: { id?: number | null } | null };

export type CartGetByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type CartGetByIdQuery = { Order?: { id?: number | null, status?: Order_Status | null } | null };

export type CartGetItemsByCartIdQueryVariables = Exact<{
  cartId?: InputMaybe<Scalars['JSON']['input']>;
  productId?: InputMaybe<Scalars['JSON']['input']>;
  productVariantId?: InputMaybe<Scalars['String']['input']>;
}>;


export type CartGetItemsByCartIdQuery = { OrderItems?: { docs?: Array<{ id?: number | null, quantity: number, totalAmount: number, productVariantId: string, order: { id?: number | null, status?: Order_Status | null }, product: { id?: number | null, name: string, slug: string, price: number, image: { alt?: string | null, url?: string | null, height?: number | null, width?: number | null }, variants: Array<{ id?: string | null, isDefault?: boolean | null, sku: string, blockName?: string | null, blockType?: string | null, items?: Array<{ id?: string | null, color?: Array<Color_Color> | null, blockName?: string | null, blockType?: string | null } | { id?: string | null, shape?: Shape_Shape | null, blockName?: string | null, blockType?: string | null } | { id?: string | null, size?: Size_Size | null, blockName?: string | null, blockType?: string | null }> | null }> } } | null> | null } | null };

export type CartRemoveItemMutationVariables = Exact<{
  itemId: Scalars['Int']['input'];
}>;


export type CartRemoveItemMutation = { deleteOrderItem?: { id?: number | null } | null };

export type ProductContentFullFragment = { id?: number | null, name: string, slug: string, price: number, image: { alt?: string | null, url?: string | null, height?: number | null, width?: number | null }, variants: Array<{ id?: string | null, isDefault?: boolean | null, sku: string, blockName?: string | null, blockType?: string | null, items?: Array<{ id?: string | null, color?: Array<Color_Color> | null, blockName?: string | null, blockType?: string | null } | { id?: string | null, shape?: Shape_Shape | null, blockName?: string | null, blockType?: string | null } | { id?: string | null, size?: Size_Size | null, blockName?: string | null, blockType?: string | null }> | null }> };

export type ProductGetByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ProductGetByIdQuery = { Product?: { id?: number | null, name: string, slug: string, price: number, image: { alt?: string | null, url?: string | null, height?: number | null, width?: number | null }, variants: Array<{ id?: string | null, isDefault?: boolean | null, sku: string, blockName?: string | null, blockType?: string | null, items?: Array<{ id?: string | null, color?: Array<Color_Color> | null, blockName?: string | null, blockType?: string | null } | { id?: string | null, shape?: Shape_Shape | null, blockName?: string | null, blockType?: string | null } | { id?: string | null, size?: Size_Size | null, blockName?: string | null, blockType?: string | null }> | null }> } | null };

export type ProductGetMediaItemFragment = { alt?: string | null, url?: string | null, height?: number | null, width?: number | null };

export type ProductsGetListQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsGetListQuery = { Products?: { docs?: Array<{ id?: number | null, name: string, slug: string, price: number, image: { alt?: string | null, url?: string | null, height?: number | null, width?: number | null }, variants: Array<{ id?: string | null, isDefault?: boolean | null, sku: string, blockName?: string | null, blockType?: string | null, items?: Array<{ id?: string | null, color?: Array<Color_Color> | null, blockName?: string | null, blockType?: string | null } | { id?: string | null, shape?: Shape_Shape | null, blockName?: string | null, blockType?: string | null } | { id?: string | null, size?: Size_Size | null, blockName?: string | null, blockType?: string | null }> | null }> } | null> | null } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const ProductGetMediaItemFragmentDoc = new TypedDocumentString(`
    fragment ProductGetMediaItem on Media {
  alt
  url
  height
  width
}
    `, {"fragmentName":"ProductGetMediaItem"}) as unknown as TypedDocumentString<ProductGetMediaItemFragment, unknown>;
export const ProductContentFullFragmentDoc = new TypedDocumentString(`
    fragment ProductContentFull on Product {
  id
  name
  slug
  price
  image {
    ...ProductGetMediaItem
  }
  variants {
    ... on variant {
      id
      isDefault
      sku
      items {
        ... on Color {
          id
          color
          blockName
          blockType
        }
        ... on Shape {
          id
          shape
          blockName
          blockType
        }
        ... on Size {
          id
          size
          blockName
          blockType
        }
      }
      blockName
      blockType
    }
  }
}
    fragment ProductGetMediaItem on Media {
  alt
  url
  height
  width
}`, {"fragmentName":"ProductContentFull"}) as unknown as TypedDocumentString<ProductContentFullFragment, unknown>;
export const CartAddItemDocument = new TypedDocumentString(`
    mutation CartAddItem($totalAmount: Float!, $cartId: Int!, $productId: Int!, $productVariantId: String!) {
  createOrderItem(
    data: {quantity: 1, totalAmount: $totalAmount, order: $cartId, product: $productId, productVariantId: $productVariantId}
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartAddItemMutation, CartAddItemMutationVariables>;
export const CartChangeItemQuantityDocument = new TypedDocumentString(`
    mutation CartChangeItemQuantity($itemId: Int!, $quantity: Float!, $totalAmount: Float!, $cartId: Int!) {
  updateOrderItem(
    id: $itemId
    data: {order: $cartId, quantity: $quantity, totalAmount: $totalAmount}
  ) {
    id
    quantity
  }
}
    `) as unknown as TypedDocumentString<CartChangeItemQuantityMutation, CartChangeItemQuantityMutationVariables>;
export const CartCreateDocument = new TypedDocumentString(`
    mutation CartCreate($status: String = "created") {
  createOrder(data: {totalAmount: 0, status: $status}) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartCreateMutation, CartCreateMutationVariables>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($id: Int!) {
  Order(id: $id) {
    id
    status
  }
}
    `) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const CartGetItemsByCartIdDocument = new TypedDocumentString(`
    query CartGetItemsByCartId($cartId: JSON, $productId: JSON, $productVariantId: String) {
  OrderItems(
    where: {order: {equals: $cartId}, product: {equals: $productId}, productVariantId: {equals: $productVariantId}}
  ) {
    docs {
      id
      order {
        id
        status
      }
      quantity
      totalAmount
      productVariantId
      product {
        ...ProductContentFull
      }
    }
  }
}
    fragment ProductContentFull on Product {
  id
  name
  slug
  price
  image {
    ...ProductGetMediaItem
  }
  variants {
    ... on variant {
      id
      isDefault
      sku
      items {
        ... on Color {
          id
          color
          blockName
          blockType
        }
        ... on Shape {
          id
          shape
          blockName
          blockType
        }
        ... on Size {
          id
          size
          blockName
          blockType
        }
      }
      blockName
      blockType
    }
  }
}
fragment ProductGetMediaItem on Media {
  alt
  url
  height
  width
}`) as unknown as TypedDocumentString<CartGetItemsByCartIdQuery, CartGetItemsByCartIdQueryVariables>;
export const CartRemoveItemDocument = new TypedDocumentString(`
    mutation CartRemoveItem($itemId: Int!) {
  deleteOrderItem(id: $itemId) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartRemoveItemMutation, CartRemoveItemMutationVariables>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($id: Int!) {
  Product(id: $id) {
    ...ProductContentFull
  }
}
    fragment ProductContentFull on Product {
  id
  name
  slug
  price
  image {
    ...ProductGetMediaItem
  }
  variants {
    ... on variant {
      id
      isDefault
      sku
      items {
        ... on Color {
          id
          color
          blockName
          blockType
        }
        ... on Shape {
          id
          shape
          blockName
          blockType
        }
        ... on Size {
          id
          size
          blockName
          blockType
        }
      }
      blockName
      blockType
    }
  }
}
fragment ProductGetMediaItem on Media {
  alt
  url
  height
  width
}`) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($sort: String) {
  Products(sort: $sort) {
    docs {
      ...ProductContentFull
    }
  }
}
    fragment ProductContentFull on Product {
  id
  name
  slug
  price
  image {
    ...ProductGetMediaItem
  }
  variants {
    ... on variant {
      id
      isDefault
      sku
      items {
        ... on Color {
          id
          color
          blockName
          blockType
        }
        ... on Shape {
          id
          shape
          blockName
          blockType
        }
        ... on Size {
          id
          size
          blockName
          blockType
        }
      }
      blockName
      blockType
    }
  }
}
fragment ProductGetMediaItem on Media {
  alt
  url
  height
  width
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;