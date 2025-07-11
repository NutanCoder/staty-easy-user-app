export const ROUTES = {
  HOME: "/",
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
  },
  DASHBOARD: "/dashboard",
  CHAT: {
    LIST: "/chat",
    DETAIL: (id: string) => `/chat/${id}`,
  },
  PROPERTIES: {
    LIST: "/properties",
    DETAIL: (id: string) => `/properties/${id}`,
  },
  PG: "/pg",
} as const;

// Type for route parameters
export type RouteParams = {
  "properties/:id": { id: string };
};

// Helper function to generate route with params
export function generateRoute(
  route: string,
  params: Record<string, string>
): string {
  return Object.entries(params).reduce(
    (path, [key, value]) => path.replace(`:${key}`, value),
    route
  );
}

// Navigation guard types
export type AuthRequirement = "AUTH_REQUIRED" | "NO_AUTH_REQUIRED" | "OPTIONAL";

// Route metadata
export const ROUTE_META: Record<
  string,
  {
    authRequired: AuthRequirement;
    title: string;
  }
> = {
  [ROUTES.HOME]: {
    authRequired: "OPTIONAL",
    title: "Home",
  },
  [ROUTES.AUTH.LOGIN]: {
    authRequired: "NO_AUTH_REQUIRED",
    title: "Login",
  },
  [ROUTES.AUTH.REGISTER]: {
    authRequired: "NO_AUTH_REQUIRED",
    title: "Register",
  },
  [ROUTES.DASHBOARD]: {
    authRequired: "AUTH_REQUIRED",
    title: "Dashboard",
  },
  [ROUTES.PROPERTIES.LIST]: {
    authRequired: "OPTIONAL",
    title: "Properties",
  },
  [ROUTES.PG]: {
    authRequired: "OPTIONAL",
    title: "PG Accommodations",
  },
};
