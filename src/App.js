import React, {useEffect, useState} from "react";

import classes from "./App.module.css";
import diceImg from "./images/icon-dice.svg";
import getAPIdata from "./logic/getAPIdata";

import CenteredCard from "./components/CenteredCard";
import ContributionBar from "./components/ContributionBar";


const App = () => {
  const [adviceData, setAdviceData] = useState(null);
  const [disabledBtn, setDisabledBtn] = useState(false);

  const getAPIdataHandler = () => {
    getAPIdata("https://api.adviceslip.com/advice").then(data => setAdviceData(data));
    
    setDisabledBtn(true);
    setTimeout(() => {
      setDisabledBtn(false);
    }, 2000);
  }

  useEffect(() => {
    getAPIdataHandler();
  }, [])

  return(
    <div className={classes["app-container"]}>
      <CenteredCard data={adviceData}/>
      <button className={classes["load-btn"]} aria-label="načti další radu" onClick={getAPIdataHandler} disabled={disabledBtn}><img src={diceImg} alt="obrázek hrací kostky"/></button>
      <ContributionBar />
    </div>
  )
}

export default App;