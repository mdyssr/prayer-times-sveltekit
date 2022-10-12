import type {
  FormattedPrayerTiming,
  PrettyPrayerTime,
  PrayerName,
} from "$lib/models/models";

import { PrayerNames } from "$lib/data/prayerNames";

function getPrayerName(name: string): PrayerName | undefined {
  const lowerCaseName = name.toLowerCase();
  return PrayerNames.get(lowerCaseName);
}

export function formatStandradTime(
  time: FormattedPrayerTiming
): PrettyPrayerTime {
  let pretty: PrettyPrayerTime = {
    name: getPrayerName(time.Name)!,
    value: time.Time.Standard.Value,
    designation: {
      ar: {
        short: time.Time.Standard.Designation.Ar.Abbreviated,
        long: time.Time.Standard.Designation.Ar.Expanded,
      },
      en: {
        short: time.Time.Standard.Designation.En.Abbreviated,
        long: time.Time.Standard.Designation.En.Expanded,
      },
    },
  };
  return pretty;
}
