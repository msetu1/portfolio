import { cookies } from "next/headers";
export const setAccessTokenInToCoockie = async (token: string) => {
  const cookieResponse = await cookies();

  cookieResponse.set("accessToken", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    maxAge:60*60*24*7
  });
};
