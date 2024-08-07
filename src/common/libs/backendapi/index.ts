import { getAuth } from "@clerk/nextjs/server";
import { ApplicationsApi, Configuration } from "./client";

export async function getClientsInSSR(req: any) {
  const { getToken } = getAuth(req);
  const token = await getToken();

  return {
    Applications: new ApplicationsApi(new Configuration({ accessToken: token || "" })),
  };
}
