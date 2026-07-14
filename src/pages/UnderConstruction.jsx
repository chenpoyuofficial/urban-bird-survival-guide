import { useNavigate } from "react-router-dom"
import { MdKeyboardReturn } from "react-icons/md"
import Header from "../components/Header"
import birdImage from "../assets/bird.png"

function UnderConstruction() {
  const navigate = useNavigate()

  return (
    <div className="max-w-md mx-auto overflow-x-hidden min-h-screen bg-[#F9F6F0]">
      <Header
        rightIcon={MdKeyboardReturn}
        rightLabel="上一頁"
        onRightClick={() => navigate("/")}
      />
      <div className="flex flex-col items-center justify-center gap-6 min-h-screen px-6 pt-[calc(56px+env(safe-area-inset-top))]">
        <h1 className="font-['Noto_Sans_TC'] text-[40px] font-bold text-[#2B221A]">
          製作中
        </h1>
        <img src={birdImage} alt="鳥類插畫" className="w-full max-w-xs" />
      </div>
    </div>
  )
}

export default UnderConstruction
