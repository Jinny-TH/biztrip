import type { Schedule } from '@/types';
export default function Timeline({ items }: { items: Schedule[] }) {
 return <div className="timeline">{items.map(i => <div className="timeRow" key={i.id}><div className="time">{i.start_time}</div><div className="eventLine"><span className="dot"/><div><b>{i.title}</b><div className="muted">장소: {i.location || '-'}</div></div></div></div>)}</div>;
}
