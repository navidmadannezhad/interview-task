import Link from 'next/link'
import { PageWrapper } from '../components/major'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: "یافت نشد",
  description: "چیزی یافت نشد!",
};

export default function NotFound() {
  return (
    <PageWrapper>
        <div
            style={{
                minHeight: "50vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                rowGap: 30
            }}
        >
            <h2
                style={{
                    color: "var(--primary-main)",
                    fontWeight: 600
                }}
            >
                نتیجه ای پیدا نشد :(
            </h2>
            <Link
                href="/"
                style={{
                    backgroundColor: "var(--primary-main)",
                    borderRadius: 5,
                    fontSize:"0.8rem",
                    padding: "5px 10px",
                    color: "var(--primary-contrast-text)",
                    cursor: "pointer"
                }}
            >
                بازگشت به صفحه اصلی
            </Link>
        </div>
    </PageWrapper>
  )
}