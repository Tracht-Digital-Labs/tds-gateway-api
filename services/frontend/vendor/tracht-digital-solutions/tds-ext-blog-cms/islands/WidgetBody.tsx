import { SummaryMetric } from "@tracht-digital-labs/tds-shared/components";

/** "Blog-Beiträge" widget body — the total post count, from `/blog/summary`. */
export default function PostsCount() {
  return <SummaryMetric<{ posts?: number }> endpoint="/blog/summary" value={(d) => Number(d.posts ?? 0)} />;
}
