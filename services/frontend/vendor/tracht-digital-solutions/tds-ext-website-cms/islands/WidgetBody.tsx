import { SummaryMetric } from "@tracht-digital-labs/tds-shared/components";

/** "Websites" widget body — the count of managed sites, from `/cms/summary`. */
export default function ManagedSitesCount() {
  return <SummaryMetric<{ sites?: number }> endpoint="/cms/summary" value={(d) => Number(d.sites ?? 0)} />;
}
