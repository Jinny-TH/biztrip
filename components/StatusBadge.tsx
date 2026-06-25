import { statusColor } from '@/lib/data';

export default function StatusBadge({ children }: { children: React.ReactNode }) {
  const key = String(children);
  const color = statusColor[key] || 'gray';
  return <span className={`badge badge-${color}`}>{children}</span>;
}
