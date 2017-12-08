require("./main.scss");

import React from "react";
import ReactDOM from "react-dom";
//import Contact from "./components/Contact";
import ContactList from "./components/ContactList";
import {contactDetail} from "./components/ContactList";
import SingleContact from "./components/SingleContact";
//import ContactInfo from "./components/ContactInfo";
//import Header from "./components/Header";
import {contacts} from "./data/contacts";


let state = {};

window.addEventListener("hashchange", () =>setState({location: location.hash}));

function setState(changes){
    state = Object.assign({}, state, changes);

    let location = state.location.replace(/^#\/?|\/$/g, "").split("/");
      let item;


    // Routing
    if (location[0] === "contact" ){

        item = state.items.find(item => item.id == location[1] ? true : false);
    }

    const mainDiv = (
        <div>
            <ContactList items = {state.items}/>
            <SingleContact item = {item}/>
        </div>
    );

    ReactDOM.render(mainDiv, document.getElementById("react-app"));
    //ReactDOM.render(React.createElement(mainDiv, state), document.getElementById("react-app"));
}

setState({
    items: contacts,
    location: location.hash
});

