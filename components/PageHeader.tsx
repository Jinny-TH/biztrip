export default function PageHeader({ title, sub, action }: { title: string; sub?: string; action?: React.ReactNode }) {
  return <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,marginBottom:22}}>
    <div><h1 className="pageTitle">{title}</h1>{sub && <p className="pageSub">{sub}</p>}</div>{action}
  </div>;
}
