/**
 * Created by Mitch on 2017-12-07.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Header extends Component{
    render(){


        return(
            <div className="column title">Contact List</div>
        )
    }

}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
