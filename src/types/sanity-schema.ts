// TypeScript type definitions

interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    _type: 'sanity.imageHotspot';
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    _type: 'sanity.imageCrop';
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

interface SiteSettings {
  _id: string;
  _type: 'siteSettings';
  title: string;
  description?: string;
  logo?: SanityImage;
  mainNavigation?: Page[];
  footerText?: string;
}

interface Page {
  _id: string;
  _type: 'page';
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  body?: any[]; // Assuming 'block' is a Sanity block type, replace 'any' with a more specific type if needed
}

interface Test {
  _id: string;
  _type: 'test';
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  description?: string;
  content?: any[]; // Assuming 'block' is a Sanity block type, replace 'any' with a more specific type if needed
}

type SanityDocument = SiteSettings | Page | Test;
