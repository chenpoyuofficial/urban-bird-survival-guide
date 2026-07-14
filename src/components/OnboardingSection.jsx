function OnboardingSection({ title, subtitles, description, illustration, illustrationAlt, id }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-start px-6 pt-[calc(80px+env(safe-area-inset-top))] pb-0 text-center bg-[#F9F6F0]"
    >
      <div className="flex flex-col items-center gap-[40px]">
        <h1 className="h-[52px] font-['Noto_Sans_TC'] text-[40px] font-bold text-[#2B221A] leading-[130%]">
          {title}
        </h1>

        <div style={{ height: `${subtitles.length * 31.2}px` }}>
          {subtitles.map((line, index) => (
            <h2
              key={index}
              className="font-['Noto_Sans_TC'] text-[24px] font-medium text-[#2B221A] text-center leading-[130%]"
            >
              {line}
            </h2>
          ))}
        </div>

        <p className="font-['Noto_Sans_TC'] text-[16px] font-normal text-[#2B221A] leading-[130%] tracking-[0.32px] max-w-xs whitespace-pre-line">
          {description}
        </p>
      </div>

      {illustration ? (
        <img
          src={illustration}
          alt={illustrationAlt}
          className="w-[130%] max-w-none -mx-[15%] mt-[24px]"
        />
      ) : (
        <div className="w-[120%] max-w-none -mx-[10%] h-48 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm mt-[24px]">
          插畫放這裡
        </div>
      )}
    </section>
  )
}

export default OnboardingSection