export type SocialLinks = {
  instagram: string;
  youtube: string;
  linkedin: string;
  x: string;
};

export type SocialMediaFields = {
  key: keyof SocialLinks;
  label: string;
  placeholder: string;
  badge: string;
};
