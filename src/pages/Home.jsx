import { useNavigate } from "react-router-dom"
import { onboardingPages, finalPage } from "../data/onboardingData"
import OnboardingSection from "../components/OnboardingSection"
import FinalSection from "../components/FinalSection"
import Header from "../components/Header"
import BottomNav from "../components/BottomNav"

function Home() {
  const navigate = useNavigate()
  const goToApp = () => navigate("/app")

  return (
    <div className="max-w-md mx-auto overflow-x-hidden">
      <Header onRightClick={goToApp} />
      {onboardingPages.map((page) => (
        <OnboardingSection key={page.id} {...page} />
      ))}
      <FinalSection {...finalPage} onRegisterClick={goToApp} />
      <BottomNav onRegisterClick={goToApp} />
    </div>
  )
}

export default Home
