'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import { PageWrapper } from '@/src/components/major'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {}, [error])
 
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
        >کاش اینطوری نمیشد، ولی انگار یه مشکل ریزی پیش اومده :(</h2>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          style={{
            backgroundColor: "var(--primary-main)",
            borderRadius: 5,
            fontSize:"0.8rem",
            padding: "5px 10px",
            color: "var(--primary-contrast-text)",
            cursor: "pointer"
          }}
        >
          تلاش مجدد
        </button>
      </div>
    </PageWrapper>
  )
}