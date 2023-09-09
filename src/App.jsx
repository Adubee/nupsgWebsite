import MainPage from "./Components/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Subgroups from "./Components/Subgroups/Subgroups";
import subgroups from "./Components/Subgroups/data";
import Halls from "./Components/Halls/Halls";
import halls from "./Components/Halls/dataHalls";
import CoreExecutives from "./Components/CoreExecutives/CoreExecutives";
import coreExecutiveData from "./Components/CoreExecutives/dataCore";
import { Route, Routes } from "react-router-dom";
import Wings from "./Components/Wings/Wings";
import wingsData from "./Components/Wings/wingsData";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainPage/>}/>
				<Route path="/km" element={<Subgroups data={subgroups[0].kM}/>}/>
				<Route path="/pcc" element={<Subgroups data={subgroups[0].pcc}/>}/>
				<Route path="/technical" element={<Subgroups data={subgroups[0].technical}/>}/>
				<Route path="/joc" element={<Subgroups data={subgroups[0].joc}/>}/>
				<Route path="/counselling" element={<Subgroups data={subgroups[0].counselling}/>}/>
				<Route path="/levites" element={<Subgroups data={subgroups[0].levites}/>}/>
				<Route path="/ushering" element={<Subgroups data={subgroups[0].ushering}/>}/>
				<Route path="/prayer" element={<Subgroups data={subgroups[0].prayer}/>}/>
				<Route path="/evangelism" element={<Subgroups data={subgroups[0].evangelism}/>}/>
				<Route path="/bible" element={<Subgroups data={subgroups[0].bible}/>}/>
				<Route path="/transport" element={<Subgroups data={subgroups[0].transport}/>}/>
				<Route path="/sb" element={<Subgroups data={subgroups[0].sb}/>}/>


				<Route path="/nelson" element={<Halls data={halls[0].nelson}/>} />
				<Route path="/sey" element={<Halls data={halls[0].sey}/>} />
				<Route path="/liman" element={<Halls data={halls[0].liman}/>} />
				<Route path="/kwapong" element={<Halls data={halls[0].kwapong}/>} />
				<Route path="/jubilee" element={<Halls data={halls[0].jubilee}/>} />
				<Route path="/sarbah" element={<Halls data={halls[0].sarbah}/>} />
				<Route path="/vikings" element={<Halls data={halls[0].vikings}/>} />
				<Route path="/legon" element={<Halls data={halls[0].legon}/>} />
				<Route path="/akuafo" element={<Halls data={halls[0].akuafo}/>} />
				<Route path="/commonwealth" element={<Halls data={halls[0].commonwealth}/>} />
				<Route path="/volta" element={<Halls data={halls[0].volta}/>} />
				<Route path="/pent" element={<Halls data={halls[0].pent}/>} />
				<Route path="/evandy" element={<Halls data={halls[0].evandy}/>} />
				<Route path="/bani" element={<Halls data={halls[0].bani}/>} />
				<Route path="/tf" element={<Halls data={halls[0].tf}/>} />


			<Route path="/president" element={<CoreExecutives data={coreExecutiveData[0].president}/>}/>
			<Route path="/vice" element={<CoreExecutives data={coreExecutiveData[0].vice}/>}/>
			<Route path="/gsec" element={<CoreExecutives data={coreExecutiveData[0].gsec}/>}/>
			<Route path="/agsec" element={<CoreExecutives data={coreExecutiveData[0].agsec}/>}/>
			<Route path="/welfare" element={<CoreExecutives data={coreExecutiveData[0].welfare}/>}/>
			<Route path="/awelfare" element={<CoreExecutives data={coreExecutiveData[0].awelfare}/>}/>
			<Route path="/organa" element={<CoreExecutives data={coreExecutiveData[0].organa}/>}/>
			<Route path="/aorgana" element={<CoreExecutives data={coreExecutiveData[0].aorgana}/>}/>
			<Route path="/fina" element={<CoreExecutives data={coreExecutiveData[0].fina}/>}/>
			<Route path="/president" element={<CoreExecutives data={coreExecutiveData[0].president}/>}/>
			<Route path="/treasurer" element={<CoreExecutives data={coreExecutiveData[0].treasurer}/>}/>
			<Route path="/advisor" element={<CoreExecutives data={coreExecutiveData[0].advisor}/>}/>
			<Route path="/cordi" element={<CoreExecutives data={coreExecutiveData[0].cordi}/>}/>
			<Route path="/alumni" element={<CoreExecutives data={coreExecutiveData[0].alumni}/>}/>
			<Route path="/prayor" element={<CoreExecutives data={coreExecutiveData[0].prayor}/>}/>


			<Route path="/doz" element={<Wings data={wingsData[0].doz}/>}/>

		</Routes>
		</>
	);
}

export default App;
