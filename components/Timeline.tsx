import { ScheduleItem } from '@/lib/data';
import StatusBadge from './StatusBadge';

export default function Timeline({ items }: { items: ScheduleItem[] }) {
  return <div className="timeline">{items.map((s) => <div className="timeitem" key={s.id}><b>{s.start}</b><div><strong>{s.title}</strong><p>{s.location || s.owner || '-'}{s.memo ? ` · ${s.memo}` : ''}</p></div><StatusBadge>{s.type}</StatusBadge></div>)}</div>;
}
