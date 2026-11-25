export const ROUTES = {
  home: "/",
  dashboard: "/dashboard",
  profile: "/profile/:username",
  myProfile: "/profile/me",
} as const;

export const profilePath = (username: string) =>
  `/profile/${encodeURIComponent(username)}`;
