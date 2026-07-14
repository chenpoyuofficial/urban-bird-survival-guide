import { MdMap, MdLogin } from "react-icons/md"
import HeaderButton from "./HeaderButton"

function Header({ rightIcon = MdLogin, rightLabel = "登入", onRightClick }) {
  return (
    <header className="fixed top-0 inset-x-0 z-10 flex justify-center">
      <div className="flex items-center w-full max-w-md pb-3 pt-[calc(12px+env(safe-area-inset-top))] bg-[#2E7D32]">
        <div className="w-6 shrink-[999]" />

        <div className="flex items-center gap-2 min-w-0 shrink-0">
          <MdMap size={24} className="text-[#F9F6F0]" />
          <h1 className="font-['Noto_Sans_TC'] text-[20px] font-bold text-[#F9F6F0] tracking-[1.6px] leading-none">
            城市鳥類的生存指南
          </h1>
        </div>

        <div className="flex-1" />

        <HeaderButton icon={rightIcon} label={rightLabel} onClick={onRightClick} />

        <div className="w-6 shrink-[999]" />
      </div>
    </header>
  )
}

export default Header
