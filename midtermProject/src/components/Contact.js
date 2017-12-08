/**
 * Created by Mitch on 2017-11-28.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";


export default class Contact extends Component {
    render(){
        return(

            <li key={this.props.key} className={"contact"} id={this.props.id}>
                <a href = {"#contact/"+ this.props.id}>
                <div className = {"row"}>
                    <div className ={"column pic"}>
                        <img src={this.props.image}/>
                    </div>
                    <div className={"column data"}>
                        {this.props.name}<br></br>{this.props.dob}
                    </div>
                </div>
                </a>
            </li>



        )
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onContactClick: PropTypes.func
}