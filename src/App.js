import React, {useEffect, useState} from "react";

import classes from "./App.module.css";
import getAPIdata from "./logic/getAPIdata";

import CenteredCard from "./components/CenteredCard";
import ContributionBar from "./components/ContributionBar";


const App = () => {
  const [adviceData, setAdviceData] = useState(null);

  useEffect(() => {
    getAPIdata("https://api.adviceslip.com/advice").then(data => setAdviceData(data));
  }, [])

  return(
    <div className={classes["app-container"]}>
      <CenteredCard data={adviceData}/>
      <ContributionBar />
    </div>
  )
}

export default App;