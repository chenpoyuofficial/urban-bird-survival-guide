function FinalSection({ title, subtitles, illustration, illustrationAlt, id, onRegisterClick }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center px-6 pt-[calc(80px+env(safe-area-inset-top))] pb-[120px] text-center bg-[#F9F6F0]"
    >
      <h1 className="h-[52px] font-['Noto_Sans_TC'] text-[40px] font-bold text-[#2B221A] leading-[130%]">
        {title}
      </h1>

      <div className="mt-[51px]" style={{ height: `${subtitles.length * 31.2}px` }}>
        {subtitles.map((line, index) => (
          <h2
            key={index}
            className="font-['Noto_Sans_TC'] text-[24px] font-medium text-[#2B221A] text-center leading-[130%]"
          >
            {line}
          </h2>
        ))}
      </div>

      <div className="relative w-[160%] -mx-[30%] mt-[78px]">
        {illustration ? (
          <img src={illustration} alt={illustrationAlt} className="w-full" />
        ) : (
          <div className="w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm">
            插畫放這裡
          </div>
        )}

        <button
          type="button"
          onClick={onRegisterClick}
          className="absolute left-1/2 top-[65%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[120px] h-[120px] pt-[2px] rounded-full bg-[#FF9800] shadow-[0_2px_8px_0_rgba(43,34,26,0.35)]"
        >
          <span className="font-['Noto_Sans_TC'] text-[24px] font-bold leading-[125%] text-white">
            立即註冊
          </span>
        </button>
      </div>
    </section>
  )
}

export default FinalSection
