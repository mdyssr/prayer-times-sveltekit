export interface PrayerName {
  ar: string;
  en: string;
}

interface StandardPrayerTimeDesignation {
  Abbreviated: string;
  Expanded: string;
}

interface PrayerTimeLanguageDesignation {
  Ar: StandardPrayerTimeDesignation;
  En: StandardPrayerTimeDesignation;
}

interface StandardPrayerTime {
  Value: string;
  Designation: PrayerTimeLanguageDesignation;
}

interface PrayerTimeDetails {
  Military: string;
  Standard: StandardPrayerTime;
}

export interface FormattedPrayerTiming {
  Name: string;
  Time: PrayerTimeDetails;
}

interface HijriDate {
  day: string;
  weekday: {
    en: string;
    ar: string;
  };
  month: {
    number: number;
    en: string;
    ar: string;
  };
  year: string;
}

export interface PrayersData {
  PrayerTimings: Array<FormattedPrayerTiming>;
  HijriDate: HijriDate;
}

export interface PrettyPrayerTime {
  name: {
    ar: string;
    en: string;
  };
  value: string;
  designation: {
    ar: {
      short: string;
      long: string;
    };
    en: {
      short: string;
      long: string;
    };
  };
  // isNextPrayer: boolean;
}
