export type SocialPlatform = "github" | "linkedin" | "email";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export interface StackCategory {
  title: string;
  items: readonly string[];
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  tagline: string;
  summary: string;
  availability: string;
  githubUsername: string;
  /** Repos a mostrar primero, por nombre exacto. Si está vacío se usan los más recientes. */
  featuredRepos: readonly string[];
  socials: readonly SocialLink[];
  stack: readonly StackCategory[];
}
