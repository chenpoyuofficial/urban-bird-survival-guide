function HeaderButton({ icon: Icon, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center gap-1 h-7 px-2.5 min-w-[96px] rounded-full bg-[#F9F6F0] shrink-0"
    >
      <Icon size={20} className="text-[#2B221A] shrink-0" />
      <span className="font-['Noto_Sans_TC'] text-[16px] font-medium text-[#2B221A] leading-none whitespace-nowrap">
        {label}
      </span>
    </button>
  )
}

export default HeaderButton
