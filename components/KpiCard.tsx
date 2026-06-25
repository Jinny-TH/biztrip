export default function KpiCard({ title, value, sub, icon }: { title:string; value:string|number; sub:string; icon:React.ReactNode }) {
 return <div className="card cardPad"><div className="kpi"><div className="kpiIcon">{icon}</div><div><div className="muted" style={{fontWeight:700}}>{title}</div><div className="kpiValue">{value}</div><div className="muted">{sub}</div></div></div></div>;
}
