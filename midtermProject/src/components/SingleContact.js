/**
 * Created by Mitch on 2017-11-28.
 */

import React, {Component} from "react";
import PropTypes from "prop-types";
import ContactInfo from "./ContactInfo";
import {getAge} from "../format"


export default class SingleContact extends Component {

    render() {


        if (!this.props.item) {
            return (
                <div className="details">Click on a contact to the left</div>
            )
        } else {

            return (

                <ContactInfo
                    name={this.props.item.name.first + " " + this.props.item.name.last}
                    dob={getAge(this.props.item.dob) + " years old"}
                    image={this.props.item.picture.large}
                    email={this.props.item.email}
                    phone={this.props.item.cell}
                    gender={this.props.item.gender}
                    location={this.props.item.location.street + "" + this.props.item.location.city + " " + this.props.item.location.state + " " + this.props.item.location.postcode }/>


            )
        }
    }
}


SingleContact.propTypes = {
    item: PropTypes.object
}
