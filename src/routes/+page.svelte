<script lang="ts">
  import type { PrayersData } from "$lib/models/models";
  import type { PageData } from "./$types";
  import { formatStandradTime } from "$lib/utils/timeUtils";

  export let data: PageData;
  const prayersData: PrayersData = data.prayersData;
  const hijriDate = prayersData.HijriDate;

  const arHijriDate = `${hijriDate.weekday.ar}، ${hijriDate.day} ${hijriDate.month.ar} ${hijriDate.year}`;
  // const enHijriDate = `${hijriDate.weekday.en}، ${hijriDate.day} ${hijriDate.month.en} ${hijriDate.year}`;

  const formattedTimes = prayersData.PrayerTimings.map(formatStandradTime);
</script>

<div
  class="h-screen grid justify-items-center grid-rows-2 bg-neutral-900 text-violet-50"
>
  <main
    class="content row-span-2 flex flex-col justify-center gap-14 items-center"
  >
    <section class="date">
      <h1 class="font-bold text-2xl">
        {arHijriDate}
        <!-- {arHijriDate} -->
      </h1>
    </section>

    <section class="times">
      <ul class="flex flex-col gap-2">
        {#each formattedTimes as { name, value, designation }}
          <li
            class="flex justify-between gap-36 p-2 shadow-sm text-xl border border-neutral-600"
          >
            <div class="time-value flex gap-1 justify-end">
              <div class="designation">
                {designation.ar.long}
              </div>
              <div class="value">
                {value}
              </div>
            </div>
            <div class="time-name font-bold">
              {name.ar}
            </div>
          </li>
        {/each}
      </ul>
    </section>
  </main>
  <footer class="flex flex-col justify-end py-4 text-slate-300">
    Made by Muhammad Yasser @ the 2022
  </footer>
</div>

<style>
</style>
