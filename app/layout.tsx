import './globals.css';

export const metadata = {
  title: 'BizTrip | 경영진 출장 일정 관리',
  description: 'Executive business trip schedule management system',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
