import "./App.css";
import Header from "./components/header/header";
import Mainarea from "./components/main_area/main-area";
import Sidearea from "./components/sidebar/sidebar";
// import Storycard from "./components/storycard/storycard";

const App = () => {
  return(
    <div>
      <Header />
      <div className="app-body">
        <Mainarea />
        
        <Sidearea />
      </div>
    </div>
  )
}

export default App;