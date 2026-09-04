import { sortedBlogPosts, type BlogPost } from "./blogPosts";

export type BlogListingItem = BlogPost & {
  listingHrefDE?: string;
  listingHrefTR?: string;
  listingHrefEN?: string;
  listingPriority?: number;
};

export const sortedBlogListingItems: BlogListingItem[] = sortedBlogPosts;
