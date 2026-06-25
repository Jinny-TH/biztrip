const label: Record<string,string> = { approved:'승인완료', pending:'승인대기', draft:'작성중', completed:'완료', cancelled:'취소' };
export default function StatusBadge({ status }: { status: string }) { return <span className={`badge ${status}`}>{label[status] || status}</span>; }
