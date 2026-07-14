import { useEffect, useState } from "react"
import PageDots from "./PageDots"

const TOTAL_PAGES = 5

function BottomNav({ onRegisterClick }) {
  const [activePage, setActivePage] = useState(1)

  useEffect(() => {
    const sections = Array.from({ length: TOTAL_PAGES }, (_, i) =>
      document.getElementById(`page-${i + 1}`)
    ).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (mostVisible) {
          setActivePage(Number(mostVisible.target.id.replace("page-", "")))
        }
      },
      { threshold: 0.5 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const isLastPage = activePage === TOTAL_PAGES

  const handleSelect = (page) => {
    document.getElementById(`page-${page}`)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-[47px] inset-x-0 z-10 flex justify-center pointer-events-none">
      <div className="flex flex-col items-center gap-4 w-full max-w-md">
        {!isLastPage && (
          <button
            type="button"
            onClick={onRegisterClick}
            className="flex items-center justify-center w-[112px] py-2 rounded-[52px] border-[3px] border-[#FF9800] bg-white shadow-[0_2px_4px_0_rgba(43,34,26,0.25)] pointer-events-auto"
          >
            <span className="font-['Noto_Sans_TC'] text-[16px] font-medium text-[#FF9800]">
              立即註冊
            </span>
          </button>
        )}

        <PageDots total={TOTAL_PAGES} activeIndex={activePage} onSelect={handleSelect} />
      </div>
    </div>
  )
}

export default BottomNav
