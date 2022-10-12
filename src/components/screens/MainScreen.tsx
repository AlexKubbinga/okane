import { useAppSelector } from "../../redux/hooks";
import { SidebarMenu } from "../widgets/SidebarMenu";
import { AnalysisScreen } from "./AnalysisScreen";
import { LoginScreen } from "./LoginScreen";
import { SummaryScreen } from "./SummaryScreen"

export const MainScreen = () => {

  const authState = useAppSelector(state => state.authentication);

  return (
    <div className="h-[calc(100vh_-_4rem_-_5.3mm)] w-full">
      <div className="h-full relative  overflow-auto">
        { authState.isAuthenticated
        ? 
        <>
          <div className="h-full relative">
            <AnalysisScreen />
          </div>
          <div className="absolute z-20 h-full top-0 left-0">
            <SidebarMenu />
          </div>
        </>
        : <LoginScreen /> }
      </div>
    </div>
  )
}