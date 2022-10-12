import type { PageServerLoad } from "./$types";
import type { PrayersData } from "$lib/models/models";

// const url = "http://localhost:8080/api/times";
const url = "https://prayer-times-api.onrender.com/api/times";

export const load: PageServerLoad = async ({ fetch }) => {
  const response = await fetch(url);
  const prayersData: PrayersData = await response.json();

  return {
    prayersData,
  };
};
