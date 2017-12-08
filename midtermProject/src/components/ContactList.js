/**
 * Created by Mitch on 2017-11-28.
 */

import React, {Component} from "react";
import PropTypes from "prop-types";
import {contacts} from "../data/contacts";
import Contact from "./Contact";



export default class ContactList extends Component {
    constructor(props){
        super(props);

        this.state={
            contact: contacts
        }
    }


    render(){


        return(
            <div className="row">
                <div className="column title">Contact List</div>

            <div className="column list">
                <ul>
                    {this.state.contact.map(function (item, i) {
                       return(
                            <Contact key={i} id={contacts[i].id} name={contacts[i].name.first + " " + contacts[i].name.last} dob={contacts[i].dob} image={contacts[i].picture.thumbnail}/>
                       )

                    })}

                </ul>
            </div>
            </div>
    )
    }
}

ContactList.propTypes = {
    currentContact: PropTypes.string
};
