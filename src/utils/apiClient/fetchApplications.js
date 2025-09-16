// lib/api.js
import { getSession } from "next-auth/react";
import apiClient from "./apiClient";


export const fetchApplications = async () => {
  const session = await getSession();
  if (!session) {
    throw new Error("Not authenticated");
  }
  const result = await apiClient.get("application/carrier", session.user.token);

  if (result?.error?.statusCode === 400) throw new Error("Bad request");
  if (result?.error?.statusCode === 403) throw new Error("Forbidden");
  if (result?.error?.statusCode === 401) throw new Error("Unauthorized");

  return result;
};
