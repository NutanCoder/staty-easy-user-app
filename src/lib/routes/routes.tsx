export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  REGISTER: "/auth/register",
  FORGET_PASSWORD: "/auth/forget-password",
  LOGIN: "/auth/login",
  PROFILE: "/profile",
  ACCOUNT: "/account",
  PROPERTIES: "/properties",
  ABOUT: "/about",
};

export const protectedRoutes = [
  ROUTES.DASHBOARD,
  ROUTES.PROFILE,
  ROUTES.ACCOUNT,
];

export const onlyForUnAuthUser = [
  ROUTES.LOGIN,
  ROUTES.REGISTER,
  ROUTES.FORGET_PASSWORD,
];
