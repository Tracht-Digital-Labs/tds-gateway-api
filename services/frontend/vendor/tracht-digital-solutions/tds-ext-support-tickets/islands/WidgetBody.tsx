import { SummaryMetric } from "@tracht-digital-labs/tds-shared/components";

/** "Offene Tickets" widget body — the open-ticket count from `/tickets/summary`. */
export default function OpenTicketsCount() {
  return <SummaryMetric<{ open?: number }> endpoint="/tickets/summary" value={(d) => Number(d.open ?? 0)} />;
}
