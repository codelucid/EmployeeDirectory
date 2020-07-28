import React, { Component } from "react";
import "../styles/SearchBox.css";

// should this be a stateless function, instead of a stateful class?

// function SearchBox(props) {
//     return (
//         <form>
//             <label>
//                 <div className="col-sm-12">

//                     <input type="text" onChange={props.handleSearchChange} placeholder="Search Employees"></input>
//                 </div>
//             </label>

//         </form>
//     );
// }
// export default SearchBox;

class SearchBox extends Component {

    // Do I need to setup state here again? I was thinking it would be passed via props
    // I was also thinking I needed a handleSubmit prop; however, I am only searching
    // <form onSubmit={this.handleSubmit}>


    render() {
        return (

            <form>
                <label>
                    <div className="col-sm-12">

                        <input type="text"  onChange={this.handleSearchChange} placeholder="Search Employees"></input>
                    </div>
                </label>

            </form>

        );
    }
}
export default SearchBox;