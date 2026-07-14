function PageDots({ total, activeIndex, onSelect }) {
  const items = []

  for (let page = 1; page <= total; page++) {
    items.push(
      <button
        key={`dot-${page}`}
        type="button"
        onClick={() => onSelect(page)}
        aria-label={`前往第 ${page} 頁`}
        className="flex items-center justify-center w-10 h-10 shrink-0 pointer-events-auto"
      >
        {page === activeIndex ? (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2E7D32] shadow-[0_2px_4px_0_rgba(43,34,26,0.25)]">
            <span className="font-['Inter'] text-[20px] font-bold text-white">{page}</span>
          </div>
        ) : (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border-[3px] border-[#2E7D32] shadow-[0_2px_4px_0_rgba(43,34,26,0.25)]">
            <span className="font-['Inter'] text-[16px] font-bold text-[#2E7D32]">{page}</span>
          </div>
        )}
      </button>
    )

    if (page < total) {
      items.push(
        <div key={`line-${page}`} className="w-[28px] h-[2px] rounded-full bg-[#2E7D32] shrink-0" />
      )
    }
  }

  return <div className="flex items-center gap-1">{items}</div>
}

export default PageDots
