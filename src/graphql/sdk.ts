import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BlockScalar: any;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
  JsonScalar: any;
};

export type Alternate = {
  __typename?: 'Alternate';
  fullSlug: Scalars['String'];
  id: Scalars['Int'];
  isFolder?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  parentId?: Maybe<Scalars['Int']>;
  published: Scalars['Boolean'];
  slug: Scalars['String'];
};

export type Asset = {
  __typename?: 'Asset';
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  filename: Scalars['String'];
  focus?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type BlogoverviewComponent = {
  __typename?: 'BlogoverviewComponent';
  _editable?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  featured_post?: Maybe<Story>;
  newsletter?: Maybe<Story>;
  seo?: Maybe<Scalars['JsonScalar']>;
  subtitle?: Maybe<Scalars['JsonScalar']>;
  title?: Maybe<Scalars['String']>;
};

export type BlogoverviewComponentFeatured_PostArgs = {
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  language?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
};

export type BlogoverviewComponentNewsletterArgs = {
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  language?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
};

export type BlogoverviewFilterQuery = {
  title?: Maybe<FilterQueryOperations>;
  featured_post?: Maybe<FilterQueryOperations>;
  newsletter?: Maybe<FilterQueryOperations>;
};

export type BlogoverviewItem = {
  __typename?: 'BlogoverviewItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<BlogoverviewComponent>;
  created_at?: Maybe<Scalars['String']>;
  default_full_slug?: Maybe<Scalars['String']>;
  first_published_at?: Maybe<Scalars['String']>;
  full_slug?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_startpage?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  meta_data?: Maybe<Scalars['JsonScalar']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['String']>;
  release_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sort_by_date?: Maybe<Scalars['String']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']>;
};

export type BlogoverviewItems = {
  __typename?: 'BlogoverviewItems';
  items?: Maybe<Array<Maybe<BlogoverviewItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type BlogpostComponent = {
  __typename?: 'BlogpostComponent';
  _editable?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['BlockScalar']>;
  component?: Maybe<Scalars['String']>;
  read_duration?: Maybe<Scalars['String']>;
  seo?: Maybe<Scalars['JsonScalar']>;
  synopsis?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Asset>;
  title?: Maybe<Scalars['String']>;
};

export type BlogpostFilterQuery = {
  title?: Maybe<FilterQueryOperations>;
  synopsis?: Maybe<FilterQueryOperations>;
  read_duration?: Maybe<FilterQueryOperations>;
};

export type BlogpostItem = {
  __typename?: 'BlogpostItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<BlogpostComponent>;
  created_at?: Maybe<Scalars['String']>;
  default_full_slug?: Maybe<Scalars['String']>;
  first_published_at?: Maybe<Scalars['String']>;
  full_slug?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_startpage?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  meta_data?: Maybe<Scalars['JsonScalar']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['String']>;
  release_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sort_by_date?: Maybe<Scalars['String']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']>;
};

export type BlogpostItems = {
  __typename?: 'BlogpostItems';
  items?: Maybe<Array<Maybe<BlogpostItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type ContentItem = {
  __typename?: 'ContentItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<Scalars['JsonScalar']>;
  content_string?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  default_full_slug?: Maybe<Scalars['String']>;
  first_published_at?: Maybe<Scalars['String']>;
  full_slug?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_startpage?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  meta_data?: Maybe<Scalars['JsonScalar']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['String']>;
  release_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sort_by_date?: Maybe<Scalars['String']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']>;
};

export type ContentItems = {
  __typename?: 'ContentItems';
  items?: Maybe<Array<Maybe<ContentItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type Datasource = {
  __typename?: 'Datasource';
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type DatasourceEntries = {
  __typename?: 'DatasourceEntries';
  items: Array<DatasourceEntry>;
  total: Scalars['Int'];
};

export type DatasourceEntry = {
  __typename?: 'DatasourceEntry';
  dimensionValue?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type Datasources = {
  __typename?: 'Datasources';
  items: Array<Datasource>;
};

export type FilterQueryOperations = {
  /** Matches exactly one value */
  in?: Maybe<Scalars['String']>;
  /** Matches all without the given value */
  not_in?: Maybe<Scalars['String']>;
  /** Matches exactly one value with a wildcard search using * */
  like?: Maybe<Scalars['String']>;
  /** Matches all without the given value */
  not_like?: Maybe<Scalars['String']>;
  /** Matches any value of given array */
  in_array?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Must match all values of given array */
  all_in_array?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Greater than date (Exmples: 2019-03-03 or 2020-03-03T03:03:03) */
  gt_date?: Maybe<Scalars['ISO8601DateTime']>;
  /** Less than date (Format: 2019-03-03 or 2020-03-03T03:03:03) */
  lt_date?: Maybe<Scalars['ISO8601DateTime']>;
  /** Greater than integer value */
  gt_int?: Maybe<Scalars['Int']>;
  /** Less than integer value */
  lt_int?: Maybe<Scalars['Int']>;
  /** Matches exactly one integer value */
  in_int?: Maybe<Scalars['Int']>;
  /** Greater than float value */
  gt_float?: Maybe<Scalars['Float']>;
  /** Less than float value */
  lt_float?: Maybe<Scalars['Float']>;
};

export type FooterComponent = {
  __typename?: 'FooterComponent';
  _editable?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['String']>;
  button_1_label?: Maybe<Scalars['String']>;
  button_1_url?: Maybe<Link>;
  button_2_label?: Maybe<Scalars['String']>;
  button_2_url?: Maybe<Link>;
  component?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  links?: Maybe<Scalars['BlockScalar']>;
  shopify_plus_logo?: Maybe<Scalars['Boolean']>;
};

export type FooterFilterQuery = {
  button_1_label?: Maybe<FilterQueryOperations>;
  button_2_label?: Maybe<FilterQueryOperations>;
  description?: Maybe<FilterQueryOperations>;
  shopify_plus_logo?: Maybe<FilterQueryOperations>;
};

export type FooterItem = {
  __typename?: 'FooterItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<FooterComponent>;
  created_at?: Maybe<Scalars['String']>;
  default_full_slug?: Maybe<Scalars['String']>;
  first_published_at?: Maybe<Scalars['String']>;
  full_slug?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_startpage?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  meta_data?: Maybe<Scalars['JsonScalar']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['String']>;
  release_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sort_by_date?: Maybe<Scalars['String']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']>;
};

export type FooterItems = {
  __typename?: 'FooterItems';
  items?: Maybe<Array<Maybe<FooterItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type Link = {
  __typename?: 'Link';
  cachedUrl: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  fieldtype: Scalars['String'];
  id: Scalars['String'];
  linktype: Scalars['String'];
  story?: Maybe<Story>;
  url: Scalars['String'];
};

export type LinkEntries = {
  __typename?: 'LinkEntries';
  items: Array<LinkEntry>;
};

export type LinkEntry = {
  __typename?: 'LinkEntry';
  id?: Maybe<Scalars['Int']>;
  isFolder?: Maybe<Scalars['Boolean']>;
  isStartpage?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

export type NavigationComponent = {
  __typename?: 'NavigationComponent';
  _editable?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['String']>;
  button_1_label?: Maybe<Scalars['String']>;
  button_1_url?: Maybe<Link>;
  button_2_label?: Maybe<Scalars['String']>;
  button_2_url?: Maybe<Link>;
  component?: Maybe<Scalars['String']>;
  links?: Maybe<Scalars['BlockScalar']>;
};

export type NavigationFilterQuery = {
  button_1_label?: Maybe<FilterQueryOperations>;
  button_2_label?: Maybe<FilterQueryOperations>;
};

export type NavigationItem = {
  __typename?: 'NavigationItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<NavigationComponent>;
  created_at?: Maybe<Scalars['String']>;
  default_full_slug?: Maybe<Scalars['String']>;
  first_published_at?: Maybe<Scalars['String']>;
  full_slug?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_startpage?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  meta_data?: Maybe<Scalars['JsonScalar']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['String']>;
  release_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sort_by_date?: Maybe<Scalars['String']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']>;
};

export type NavigationItems = {
  __typename?: 'NavigationItems';
  items?: Maybe<Array<Maybe<NavigationItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type NewsletterComponent = {
  __typename?: 'NewsletterComponent';
  _editable?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['String']>;
  button_label?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type NewsletterFilterQuery = {
  title?: Maybe<FilterQueryOperations>;
  subtitle?: Maybe<FilterQueryOperations>;
  button_label?: Maybe<FilterQueryOperations>;
};

export type NewsletterItem = {
  __typename?: 'NewsletterItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<NewsletterComponent>;
  created_at?: Maybe<Scalars['String']>;
  default_full_slug?: Maybe<Scalars['String']>;
  first_published_at?: Maybe<Scalars['String']>;
  full_slug?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_startpage?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  meta_data?: Maybe<Scalars['JsonScalar']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['String']>;
  release_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sort_by_date?: Maybe<Scalars['String']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']>;
};

export type NewsletterItems = {
  __typename?: 'NewsletterItems';
  items?: Maybe<Array<Maybe<NewsletterItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type PageComponent = {
  __typename?: 'PageComponent';
  _editable?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['BlockScalar']>;
  component?: Maybe<Scalars['String']>;
  seo?: Maybe<Scalars['JsonScalar']>;
};

export type PageItem = {
  __typename?: 'PageItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<PageComponent>;
  created_at?: Maybe<Scalars['String']>;
  default_full_slug?: Maybe<Scalars['String']>;
  first_published_at?: Maybe<Scalars['String']>;
  full_slug?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_startpage?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  meta_data?: Maybe<Scalars['JsonScalar']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['String']>;
  release_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sort_by_date?: Maybe<Scalars['String']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']>;
};

export type PageItems = {
  __typename?: 'PageItems';
  items?: Maybe<Array<Maybe<PageItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type PriceComponent = {
  __typename?: 'PriceComponent';
  _editable?: Maybe<Scalars['String']>;
  _uid?: Maybe<Scalars['String']>;
  component?: Maybe<Scalars['String']>;
  list?: Maybe<Scalars['BlockScalar']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
};

export type PriceFilterQuery = {
  name?: Maybe<FilterQueryOperations>;
  price?: Maybe<FilterQueryOperations>;
};

export type PriceItem = {
  __typename?: 'PriceItem';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<PriceComponent>;
  created_at?: Maybe<Scalars['String']>;
  default_full_slug?: Maybe<Scalars['String']>;
  first_published_at?: Maybe<Scalars['String']>;
  full_slug?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_startpage?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  meta_data?: Maybe<Scalars['JsonScalar']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['String']>;
  release_id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sort_by_date?: Maybe<Scalars['String']>;
  tag_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']>;
};

export type PriceItems = {
  __typename?: 'PriceItems';
  items?: Maybe<Array<Maybe<PriceItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type QueryType = {
  __typename?: 'QueryType';
  BlogoverviewItem?: Maybe<BlogoverviewItem>;
  BlogoverviewItems?: Maybe<BlogoverviewItems>;
  BlogpostItem?: Maybe<BlogpostItem>;
  BlogpostItems?: Maybe<BlogpostItems>;
  ContentNode?: Maybe<ContentItem>;
  ContentNodes?: Maybe<ContentItems>;
  DatasourceEntries?: Maybe<DatasourceEntries>;
  Datasources?: Maybe<Datasources>;
  FooterItem?: Maybe<FooterItem>;
  FooterItems?: Maybe<FooterItems>;
  Links?: Maybe<LinkEntries>;
  NavigationItem?: Maybe<NavigationItem>;
  NavigationItems?: Maybe<NavigationItems>;
  NewsletterItem?: Maybe<NewsletterItem>;
  NewsletterItems?: Maybe<NewsletterItems>;
  PageItem?: Maybe<PageItem>;
  PageItems?: Maybe<PageItems>;
  PriceItem?: Maybe<PriceItem>;
  PriceItems?: Maybe<PriceItems>;
  Space?: Maybe<Space>;
  Tags?: Maybe<Tags>;
};

export type QueryTypeBlogoverviewItemArgs = {
  id: Scalars['ID'];
  find_by?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['Int']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
};

export type QueryTypeBlogoverviewItemsArgs = {
  first_published_at_gt?: Maybe<Scalars['String']>;
  first_published_at_lt?: Maybe<Scalars['String']>;
  published_at_gt?: Maybe<Scalars['String']>;
  published_at_lt?: Maybe<Scalars['String']>;
  starts_with?: Maybe<Scalars['String']>;
  by_slugs?: Maybe<Scalars['String']>;
  excluding_slugs?: Maybe<Scalars['String']>;
  fallback_lang?: Maybe<Scalars['String']>;
  by_uuids?: Maybe<Scalars['String']>;
  by_uuids_ordered?: Maybe<Scalars['String']>;
  excluding_ids?: Maybe<Scalars['String']>;
  excluding_fields?: Maybe<Scalars['String']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['String']>;
  sort_by?: Maybe<Scalars['String']>;
  search_term?: Maybe<Scalars['String']>;
  is_startpage?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  with_tag?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  per_page?: Maybe<Scalars['Int']>;
  filter_query?: Maybe<Scalars['JsonScalar']>;
  filter_query_v2?: Maybe<BlogoverviewFilterQuery>;
};

export type QueryTypeBlogpostItemArgs = {
  id: Scalars['ID'];
  find_by?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['Int']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
};

export type QueryTypeBlogpostItemsArgs = {
  first_published_at_gt?: Maybe<Scalars['String']>;
  first_published_at_lt?: Maybe<Scalars['String']>;
  published_at_gt?: Maybe<Scalars['String']>;
  published_at_lt?: Maybe<Scalars['String']>;
  starts_with?: Maybe<Scalars['String']>;
  by_slugs?: Maybe<Scalars['String']>;
  excluding_slugs?: Maybe<Scalars['String']>;
  fallback_lang?: Maybe<Scalars['String']>;
  by_uuids?: Maybe<Scalars['String']>;
  by_uuids_ordered?: Maybe<Scalars['String']>;
  excluding_ids?: Maybe<Scalars['String']>;
  excluding_fields?: Maybe<Scalars['String']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['String']>;
  sort_by?: Maybe<Scalars['String']>;
  search_term?: Maybe<Scalars['String']>;
  is_startpage?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  with_tag?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  per_page?: Maybe<Scalars['Int']>;
  filter_query?: Maybe<Scalars['JsonScalar']>;
  filter_query_v2?: Maybe<BlogpostFilterQuery>;
};

export type QueryTypeContentNodeArgs = {
  id: Scalars['ID'];
  find_by?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['Int']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
};

export type QueryTypeContentNodesArgs = {
  first_published_at_gt?: Maybe<Scalars['String']>;
  first_published_at_lt?: Maybe<Scalars['String']>;
  published_at_gt?: Maybe<Scalars['String']>;
  published_at_lt?: Maybe<Scalars['String']>;
  starts_with?: Maybe<Scalars['String']>;
  by_slugs?: Maybe<Scalars['String']>;
  excluding_slugs?: Maybe<Scalars['String']>;
  fallback_lang?: Maybe<Scalars['String']>;
  by_uuids?: Maybe<Scalars['String']>;
  by_uuids_ordered?: Maybe<Scalars['String']>;
  excluding_ids?: Maybe<Scalars['String']>;
  excluding_fields?: Maybe<Scalars['String']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['String']>;
  sort_by?: Maybe<Scalars['String']>;
  search_term?: Maybe<Scalars['String']>;
  is_startpage?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  with_tag?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  per_page?: Maybe<Scalars['Int']>;
  filter_query?: Maybe<Scalars['JsonScalar']>;
};

export type QueryTypeDatasourceEntriesArgs = {
  datasource?: Maybe<Scalars['String']>;
  dimension?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  per_page?: Maybe<Scalars['Int']>;
};

export type QueryTypeDatasourcesArgs = {
  search?: Maybe<Scalars['String']>;
  by_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QueryTypeFooterItemArgs = {
  id: Scalars['ID'];
  find_by?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['Int']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
};

export type QueryTypeFooterItemsArgs = {
  first_published_at_gt?: Maybe<Scalars['String']>;
  first_published_at_lt?: Maybe<Scalars['String']>;
  published_at_gt?: Maybe<Scalars['String']>;
  published_at_lt?: Maybe<Scalars['String']>;
  starts_with?: Maybe<Scalars['String']>;
  by_slugs?: Maybe<Scalars['String']>;
  excluding_slugs?: Maybe<Scalars['String']>;
  fallback_lang?: Maybe<Scalars['String']>;
  by_uuids?: Maybe<Scalars['String']>;
  by_uuids_ordered?: Maybe<Scalars['String']>;
  excluding_ids?: Maybe<Scalars['String']>;
  excluding_fields?: Maybe<Scalars['String']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['String']>;
  sort_by?: Maybe<Scalars['String']>;
  search_term?: Maybe<Scalars['String']>;
  is_startpage?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  with_tag?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  per_page?: Maybe<Scalars['Int']>;
  filter_query?: Maybe<Scalars['JsonScalar']>;
  filter_query_v2?: Maybe<FooterFilterQuery>;
};

export type QueryTypeLinksArgs = {
  starts_with?: Maybe<Scalars['String']>;
  paginated?: Maybe<Scalars['Boolean']>;
};

export type QueryTypeNavigationItemArgs = {
  id: Scalars['ID'];
  find_by?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['Int']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
};

export type QueryTypeNavigationItemsArgs = {
  first_published_at_gt?: Maybe<Scalars['String']>;
  first_published_at_lt?: Maybe<Scalars['String']>;
  published_at_gt?: Maybe<Scalars['String']>;
  published_at_lt?: Maybe<Scalars['String']>;
  starts_with?: Maybe<Scalars['String']>;
  by_slugs?: Maybe<Scalars['String']>;
  excluding_slugs?: Maybe<Scalars['String']>;
  fallback_lang?: Maybe<Scalars['String']>;
  by_uuids?: Maybe<Scalars['String']>;
  by_uuids_ordered?: Maybe<Scalars['String']>;
  excluding_ids?: Maybe<Scalars['String']>;
  excluding_fields?: Maybe<Scalars['String']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['String']>;
  sort_by?: Maybe<Scalars['String']>;
  search_term?: Maybe<Scalars['String']>;
  is_startpage?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  with_tag?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  per_page?: Maybe<Scalars['Int']>;
  filter_query?: Maybe<Scalars['JsonScalar']>;
  filter_query_v2?: Maybe<NavigationFilterQuery>;
};

export type QueryTypeNewsletterItemArgs = {
  id: Scalars['ID'];
  find_by?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['Int']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
};

export type QueryTypeNewsletterItemsArgs = {
  first_published_at_gt?: Maybe<Scalars['String']>;
  first_published_at_lt?: Maybe<Scalars['String']>;
  published_at_gt?: Maybe<Scalars['String']>;
  published_at_lt?: Maybe<Scalars['String']>;
  starts_with?: Maybe<Scalars['String']>;
  by_slugs?: Maybe<Scalars['String']>;
  excluding_slugs?: Maybe<Scalars['String']>;
  fallback_lang?: Maybe<Scalars['String']>;
  by_uuids?: Maybe<Scalars['String']>;
  by_uuids_ordered?: Maybe<Scalars['String']>;
  excluding_ids?: Maybe<Scalars['String']>;
  excluding_fields?: Maybe<Scalars['String']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['String']>;
  sort_by?: Maybe<Scalars['String']>;
  search_term?: Maybe<Scalars['String']>;
  is_startpage?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  with_tag?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  per_page?: Maybe<Scalars['Int']>;
  filter_query?: Maybe<Scalars['JsonScalar']>;
  filter_query_v2?: Maybe<NewsletterFilterQuery>;
};

export type QueryTypePageItemArgs = {
  id: Scalars['ID'];
  find_by?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['Int']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
};

export type QueryTypePageItemsArgs = {
  first_published_at_gt?: Maybe<Scalars['String']>;
  first_published_at_lt?: Maybe<Scalars['String']>;
  published_at_gt?: Maybe<Scalars['String']>;
  published_at_lt?: Maybe<Scalars['String']>;
  starts_with?: Maybe<Scalars['String']>;
  by_slugs?: Maybe<Scalars['String']>;
  excluding_slugs?: Maybe<Scalars['String']>;
  fallback_lang?: Maybe<Scalars['String']>;
  by_uuids?: Maybe<Scalars['String']>;
  by_uuids_ordered?: Maybe<Scalars['String']>;
  excluding_ids?: Maybe<Scalars['String']>;
  excluding_fields?: Maybe<Scalars['String']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['String']>;
  sort_by?: Maybe<Scalars['String']>;
  search_term?: Maybe<Scalars['String']>;
  is_startpage?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  with_tag?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  per_page?: Maybe<Scalars['Int']>;
  filter_query?: Maybe<Scalars['JsonScalar']>;
};

export type QueryTypePriceItemArgs = {
  id: Scalars['ID'];
  find_by?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['Int']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
};

export type QueryTypePriceItemsArgs = {
  first_published_at_gt?: Maybe<Scalars['String']>;
  first_published_at_lt?: Maybe<Scalars['String']>;
  published_at_gt?: Maybe<Scalars['String']>;
  published_at_lt?: Maybe<Scalars['String']>;
  starts_with?: Maybe<Scalars['String']>;
  by_slugs?: Maybe<Scalars['String']>;
  excluding_slugs?: Maybe<Scalars['String']>;
  fallback_lang?: Maybe<Scalars['String']>;
  by_uuids?: Maybe<Scalars['String']>;
  by_uuids_ordered?: Maybe<Scalars['String']>;
  excluding_ids?: Maybe<Scalars['String']>;
  excluding_fields?: Maybe<Scalars['String']>;
  resolve_links?: Maybe<Scalars['String']>;
  resolve_relations?: Maybe<Scalars['String']>;
  from_release?: Maybe<Scalars['String']>;
  sort_by?: Maybe<Scalars['String']>;
  search_term?: Maybe<Scalars['String']>;
  is_startpage?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  with_tag?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  per_page?: Maybe<Scalars['Int']>;
  filter_query?: Maybe<Scalars['JsonScalar']>;
  filter_query_v2?: Maybe<PriceFilterQuery>;
};

export type QueryTypeTagsArgs = {
  starts_with?: Maybe<Scalars['String']>;
};

export type Space = {
  __typename?: 'Space';
  domain: Scalars['String'];
  id: Scalars['Int'];
  languageCodes: Array<Maybe<Scalars['String']>>;
  name: Scalars['String'];
  version: Scalars['Int'];
};

export type Story = {
  __typename?: 'Story';
  alternates?: Maybe<Array<Maybe<Alternate>>>;
  content?: Maybe<Scalars['JsonScalar']>;
  createdAt?: Maybe<Scalars['String']>;
  firstPublishedAt?: Maybe<Scalars['String']>;
  fullSlug?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isStartpage?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  metaData?: Maybe<Scalars['JsonScalar']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  publishedAt?: Maybe<Scalars['String']>;
  releaseId?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  sortByDate?: Maybe<Scalars['String']>;
  tagList?: Maybe<Array<Maybe<Scalars['String']>>>;
  translatedSlugs?: Maybe<Array<Maybe<TranslatedSlug>>>;
  uuid?: Maybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String'];
  taggingsCount: Scalars['Int'];
};

export type Tags = {
  __typename?: 'Tags';
  items: Array<Tag>;
};

export type TranslatedSlug = {
  __typename?: 'TranslatedSlug';
  lang: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type ImageFragmentFragment = { __typename?: 'Asset' } & Pick<
  Asset,
  'alt' | 'filename'
>;

export type BlogOverviewItemQueryVariables = Exact<{
  slug: Scalars['ID'];
}>;

export type BlogOverviewItemQuery = { __typename?: 'QueryType' } & {
  BlogoverviewItem?: Maybe<
    { __typename?: 'BlogoverviewItem' } & Pick<BlogoverviewItem, 'uuid'> & {
        content?: Maybe<
          { __typename?: 'BlogoverviewComponent' } & Pick<
            BlogoverviewComponent,
            '_editable' | '_uid' | 'subtitle' | 'title'
          > & {
              featured_post?: Maybe<
                { __typename?: 'Story' } & Pick<
                  Story,
                  'content' | 'firstPublishedAt' | 'slug' | 'id'
                >
              >;
              newsletter?: Maybe<
                { __typename?: 'Story' } & Pick<Story, 'content'>
              >;
            }
        >;
      }
  >;
};

export type BlogPostItemQueryVariables = Exact<{
  slug: Scalars['ID'];
}>;

export type BlogPostItemQuery = { __typename?: 'QueryType' } & {
  BlogpostItem?: Maybe<
    { __typename?: 'BlogpostItem' } & Pick<BlogpostItem, 'uuid'> & {
        content?: Maybe<
          { __typename?: 'BlogpostComponent' } & Pick<
            BlogpostComponent,
            'seo' | 'body' | '_uid' | '_editable'
          >
        >;
      }
  >;
};

export type BlogPostItemsQueryVariables = Exact<{
  filterId?: Maybe<Scalars['String']>;
}>;

export type BlogPostItemsQuery = { __typename?: 'QueryType' } & {
  BlogpostItems?: Maybe<
    { __typename?: 'BlogpostItems' } & {
      items?: Maybe<
        Array<
          Maybe<
            { __typename?: 'BlogpostItem' } & Pick<
              BlogpostItem,
              'slug' | 'full_slug' | 'uuid' | 'first_published_at'
            > & {
                content?: Maybe<
                  { __typename?: 'BlogpostComponent' } & Pick<
                    BlogpostComponent,
                    'title' | 'read_duration' | 'seo' | '_uid' | '_editable'
                  > & {
                      thumbnail?: Maybe<
                        { __typename?: 'Asset' } & ImageFragmentFragment
                      >;
                    }
                >;
              }
          >
        >
      >;
    }
  >;
};

export type FooterItemQueryVariables = Exact<{
  slug: Scalars['ID'];
}>;

export type FooterItemQuery = { __typename?: 'QueryType' } & {
  FooterItem?: Maybe<
    { __typename?: 'FooterItem' } & Pick<FooterItem, 'uuid'> & {
        content?: Maybe<
          { __typename?: 'FooterComponent' } & Pick<
            FooterComponent,
            | '_editable'
            | '_uid'
            | 'button_1_label'
            | 'button_2_label'
            | 'component'
            | 'description'
            | 'links'
            | 'shopify_plus_logo'
          > & {
              button_1_url?: Maybe<
                { __typename?: 'Link' } & Pick<Link, 'url'> & {
                    story?: Maybe<
                      { __typename?: 'Story' } & Pick<Story, 'fullSlug'>
                    >;
                  }
              >;
              button_2_url?: Maybe<
                { __typename?: 'Link' } & Pick<Link, 'url'> & {
                    story?: Maybe<
                      { __typename?: 'Story' } & Pick<Story, 'fullSlug'>
                    >;
                  }
              >;
            }
        >;
      }
  >;
};

export type NavigationItemQueryVariables = Exact<{
  slug: Scalars['ID'];
}>;

export type NavigationItemQuery = { __typename?: 'QueryType' } & {
  NavigationItem?: Maybe<
    { __typename?: 'NavigationItem' } & Pick<NavigationItem, 'uuid'> & {
        content?: Maybe<
          { __typename?: 'NavigationComponent' } & Pick<
            NavigationComponent,
            | 'button_1_label'
            | 'button_2_label'
            | 'links'
            | 'component'
            | '_editable'
            | '_uid'
          > & {
              button_1_url?: Maybe<
                { __typename?: 'Link' } & Pick<Link, 'url' | 'linktype'> & {
                    story?: Maybe<
                      { __typename?: 'Story' } & Pick<Story, 'fullSlug'>
                    >;
                  }
              >;
              button_2_url?: Maybe<
                { __typename?: 'Link' } & Pick<Link, 'url' | 'linktype'> & {
                    story?: Maybe<
                      { __typename?: 'Story' } & Pick<Story, 'fullSlug'>
                    >;
                  }
              >;
            }
        >;
      }
  >;
};

export type PageItemQueryVariables = Exact<{
  slug: Scalars['ID'];
}>;

export type PageItemQuery = { __typename?: 'QueryType' } & {
  PageItem?: Maybe<
    { __typename?: 'PageItem' } & Pick<PageItem, 'uuid'> & {
        content?: Maybe<
          { __typename?: 'PageComponent' } & Pick<
            PageComponent,
            'seo' | 'body' | 'component' | '_editable' | '_uid'
          >
        >;
      }
  >;
};

export type PageItemsQueryVariables = Exact<{ [key: string]: never }>;

export type PageItemsQuery = { __typename?: 'QueryType' } & {
  PageItems?: Maybe<
    { __typename?: 'PageItems' } & {
      items?: Maybe<
        Array<
          Maybe<
            { __typename?: 'PageItem' } & Pick<PageItem, 'slug' | 'full_slug'>
          >
        >
      >;
    }
  >;
};

export const ImageFragmentFragmentDoc = gql`
  fragment ImageFragment on Asset {
    alt
    filename
  }
`;
export const BlogOverviewItemDocument = gql`
  query blogOverviewItem($slug: ID!) {
    BlogoverviewItem(id: $slug, resolve_links: "url") {
      content {
        _editable
        _uid
        featured_post {
          content
          firstPublishedAt
          slug
          id
        }
        newsletter {
          content
        }
        subtitle
        title
      }
      uuid
    }
  }
`;
export const BlogPostItemDocument = gql`
  query blogPostItem($slug: ID!) {
    BlogpostItem(
      id: $slug
      resolve_relations: "price_selector.price,newsletter_component.newsletter"
      resolve_links: "url"
    ) {
      content {
        seo
        body
        _uid
        _editable
      }
      uuid
    }
  }
`;
export const BlogPostItemsDocument = gql`
  query blogPostItems($filterId: String) {
    BlogpostItems(
      per_page: 100
      sort_by: "first_published_at:desc"
      excluding_ids: $filterId
    ) {
      items {
        content {
          title
          thumbnail {
            ...ImageFragment
          }
          read_duration
          seo
          _uid
          _editable
        }
        slug
        full_slug
        uuid
        first_published_at
      }
    }
  }
  ${ImageFragmentFragmentDoc}
`;
export const FooterItemDocument = gql`
  query footerItem($slug: ID!) {
    FooterItem(id: $slug, resolve_links: "url") {
      uuid
      content {
        _editable
        _uid
        button_1_label
        button_1_url {
          story {
            fullSlug
          }
          url
        }
        button_2_label
        button_2_url {
          story {
            fullSlug
          }
          url
        }
        component
        description
        links
        shopify_plus_logo
      }
    }
  }
`;
export const NavigationItemDocument = gql`
  query navigationItem($slug: ID!) {
    NavigationItem(id: $slug, resolve_links: "url") {
      uuid
      content {
        button_1_label
        button_1_url {
          story {
            fullSlug
          }
          url
          linktype
        }
        button_2_label
        button_2_url {
          story {
            fullSlug
          }
          url
          linktype
        }
        links
        component
        _editable
        _uid
      }
    }
  }
`;
export const PageItemDocument = gql`
  query pageItem($slug: ID!) {
    PageItem(
      id: $slug
      resolve_relations: "price_selector.price,newsletter_component.newsletter"
      resolve_links: "url"
    ) {
      content {
        seo
        body
        component
        _editable
        _uid
      }
      uuid
    }
  }
`;
export const PageItemsDocument = gql`
  query pageItems {
    PageItems(per_page: 100) {
      items {
        slug
        full_slug
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (sdkFunction) => sdkFunction();
export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    blogOverviewItem(
      variables: BlogOverviewItemQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<BlogOverviewItemQuery> {
      return withWrapper(() =>
        client.request<BlogOverviewItemQuery>(
          BlogOverviewItemDocument,
          variables,
          requestHeaders,
        ),
      );
    },
    blogPostItem(
      variables: BlogPostItemQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<BlogPostItemQuery> {
      return withWrapper(() =>
        client.request<BlogPostItemQuery>(
          BlogPostItemDocument,
          variables,
          requestHeaders,
        ),
      );
    },
    blogPostItems(
      variables?: BlogPostItemsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<BlogPostItemsQuery> {
      return withWrapper(() =>
        client.request<BlogPostItemsQuery>(
          BlogPostItemsDocument,
          variables,
          requestHeaders,
        ),
      );
    },
    footerItem(
      variables: FooterItemQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<FooterItemQuery> {
      return withWrapper(() =>
        client.request<FooterItemQuery>(
          FooterItemDocument,
          variables,
          requestHeaders,
        ),
      );
    },
    navigationItem(
      variables: NavigationItemQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<NavigationItemQuery> {
      return withWrapper(() =>
        client.request<NavigationItemQuery>(
          NavigationItemDocument,
          variables,
          requestHeaders,
        ),
      );
    },
    pageItem(
      variables: PageItemQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<PageItemQuery> {
      return withWrapper(() =>
        client.request<PageItemQuery>(
          PageItemDocument,
          variables,
          requestHeaders,
        ),
      );
    },
    pageItems(
      variables?: PageItemsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<PageItemsQuery> {
      return withWrapper(() =>
        client.request<PageItemsQuery>(
          PageItemsDocument,
          variables,
          requestHeaders,
        ),
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
