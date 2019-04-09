import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";

import Header from './component/header'

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Ertebat from "./component/Ertebat";
import Search from "./component/Search";
import SignUp from "./SabetName/SignUp";
import Login from "./SabetName/Login";
import KiBoodyAkhe from "./ahang/KiBoodyAkhe";
import Rafigh from "./ahang/Rafigh";
import Older from "./ahang/Older";
import EyMahBebin from "./ahang/EyMahBebin";
import Tardast from "./ahang/Tardast";
import Maghroor from "./ahang/Maghroor";
import AserKhoob from "./ahang/AserKhoob";
import Daryab from "./ahang/Daryab";
import Darya from "./ahang/Darya";
import HaminHast from "./Top/HaminHast";
import Pashimun from "./Top/Pashimun";
import ZibayBeTab from "./Top/ZibayBeTab";
import FanusMah from "./Top/FanusMah";
import ShamMahtab from "./Top/ShamMahtab";
import DelamMilarze from "./Arshive/DelamMilarze";
import Shal from "./Arshive/Shal";
import FekershoKon from "./Arshive/FekershoKon";
import Mordab from "./Arshive/Mordab";
import ShabBehrane from "./Arshive/ShabBehrane";
import Zendgyjunam from "./Arshive/Zendgyjunam";
import Parizad from "./Edame/Parizad";
import ShirnoFarhad from "./Edame/ShirnoFarhad";
import Delbar from "./Edame/Delbar";
import Farangiz from "./Edame/Farangiz";
import Shabha from "./Edame/Shabha";
import Lily from "./Edame/Lily";
import Bala from "./Edame/Bala";
import Khoshbakhty from "./Edame/Khoshbakhty";
import Shadmehr from "./Edame/Shadmehr";
import ShahGhalbam from "./Edame/ShahGhalbam";
import JanJanan from "./Edame/JanJanan";

import Site from "./component/Site";

const routing = (
    <Router>
        <Header/>
        <div style={{}}>
            <Route exact path="/" component={App} />
            <Route exact path="/site" component={Site} />

            <Route exact path="/ertebat" component={Ertebat} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/kiBoodyAkhe" component={KiBoodyAkhe} />
            <Route exact path='/ashegh' compoent={Rafigh}/>
            <Route exact path='/older' component={Older}/>
            <Route exact path='/eyMahBebin' component={EyMahBebin}/>
            <Route exact path='/tardast' component={Tardast}/>
            <Route exact path='/maghroor' component={Maghroor}/>
            <Route exact path='/aserKhoob' component={AserKhoob}/>
            <Route exact path='/daryab' component={Daryab}/>
            <Route exact path='/darya' component={Darya}/>
            <Route exact path='/rafigh' component={Rafigh}/>
            <Route exact path='/haminKeHast' component={HaminHast}/>
            <Route exact path='/pashimun' component={Pashimun}/>
            <Route exact path='/zibayBeTab' component={ZibayBeTab}/>
            <Route exact path='/fanoosMah' component={FanusMah}/>
            <Route exact path='/shamMahtab' component={ShamMahtab}/>
            <Route exact path='/delamMilarze' component={DelamMilarze}/>
            <Route exact path='/shal' component={Shal}/>
            <Route exact path='/fekershoKon' component={FekershoKon}/>
            <Route exact path='/mordab' component={Mordab}/>
            <Route exact path='/shabBerahne' component={ShabBehrane}/>
            <Route exact path='/zendeghyJunam' component={Zendgyjunam}/>
            <Route exact path='/parizad' component={Parizad}/>
            <Route exact path='/shrinoFarhad' component={ShirnoFarhad}/>
            <Route exact path='/delbar' component={Delbar}/>
            <Route exact path='/farangiz' component={Farangiz}/>
            <Route exact path='/shabha' component={Shabha}/>
            <Route exact path='/lily' component={Lily}/>
            <Route exact path='/bala' component={Bala}/>
            <Route exact path='/khoshbakhty' component={Khoshbakhty}/>
            <Route exact path='/shadmehr' component={Shadmehr}/>
            <Route exact path='/shahGalbam' component={ShahGhalbam}/>
            <Route exact path='/janJanan' component={JanJanan}/>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();