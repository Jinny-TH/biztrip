import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BizTrip - Executive Trip Manager',
  description: '경영진 출장 일정 관리 시스템'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body>{children}</body></html>;
}
