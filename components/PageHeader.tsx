export default function PageHeader({ title, desc, action }: { title: string; desc?: string; action?: string }) {
  return <div className="page-header"><div><h2>{title}</h2>{desc && <p>{desc}</p>}</div>{action && <button>{action}</button>}</div>;
}
