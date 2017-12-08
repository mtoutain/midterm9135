/**
 * Created by Mitch on 2017-11-28.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";


export default class ContactInfo extends Component {
    render() {

        return (
            <div className="details">
            <h1>
                {this.props.name}
            </h1>
                <p>
                    <div>
                        {this.props.gender}
                    </div>
                    <div>
                        {this.props.dob}
                    </div>
                </p>
                <hr></hr>
                    <address>
                        {this.props.location}
                    </address>
               <hr></hr>
                <p>
                    <div><a>{this.props.email}</a></div>
                    <div>{this.props.phone}</div>
                </p>
                <img src={this.props.image}/>
            </div>
    )}
}
ContactInfo.propTypes = {
    name: PropTypes.string,
    dob: PropTypes.string,
    image: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    location: PropTypes.string,
    gender: PropTypes.string
}
