export default function KpiCard({ icon, label, value, hint }: { icon: string; label: string; value: string | number; hint: string }) {
  return <div className="kpi"><span className="kpi-icon">{icon}</span><div><p>{label}</p><strong>{value}</strong><small>{hint}</small></div></div>;
}
