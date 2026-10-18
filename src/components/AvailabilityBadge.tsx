export default function AvailabilityBadge({ available }: { available: boolean }) {
  return (
    <span className={`badge ${available ? "badge--ok" : "badge--out"}`}>
      {available ? "In stock" : "Out of stock"}
    </span>
  );
}
