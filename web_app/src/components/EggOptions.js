import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/breakfastStyle.css";
import "../styles/commonStyle.css";

class EggOptions extends Component {

    render() {
        return (
            <body>
            <div className="BreakfastPage" id="container">
                <img id="login_bg" />

                <h1 id="head">Breakfast Menu</h1>
                <h3 id="please_select">Please Select Options:</h3> <br />

                <form method="GET" name="BreakfastItem" class="order">

                <div id="egg_options">
                    <input type="checkbox" name="red_pep" id="red_pep" class="all_options" /> <label for="red_pep" class="option_label">Red Pepper</label><br />
                    <input type="checkbox" name="salt" id="salt" class="all_options" /> <label for="salt" class="option_label">Salt</label><br />
                    <input type="checkbox" name="sage" id="sage" class="all_options" /> <label for="sage" class="option_label">Sage</label><br />
                    <input type="checkbox" name="garlic" id="garlic" class="all_options" /> <label for="garlic" class="option_label">Garlic</label><br />
                </div> <br />

                <Link to="/orderConfirmation"><input type="submit" id="button" value="Add item to order" /></Link>

                </form>

            </div>
        </body>
        );
    }
}

export default EggOptions;