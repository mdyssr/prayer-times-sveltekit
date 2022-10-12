import type { PrayerName } from "$lib/models/models";

export const PrayerNames: Map<string, PrayerName> = new Map();

PrayerNames.set("fajr", { ar: "الفجر", en: "fajr" });
PrayerNames.set("sunrise", { ar: "الشروق", en: "sunrise" });
PrayerNames.set("dhuhr", { ar: "الظهر", en: "dhuhr" });
PrayerNames.set("asr", { ar: "العصر", en: "asr" });
PrayerNames.set("sunset", { ar: "الغروب", en: "sunset" });
PrayerNames.set("maghrib", { ar: "المغرب", en: "maghrib" });
PrayerNames.set("isha", { ar: "العشاء", en: "isha" });
