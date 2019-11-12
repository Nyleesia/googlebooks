import React from "react";
import "./style.css";

const SearchForm = (props) => {
    return (
        <form>
            <div className="form-group">
                <label className="search">
                    <h3>Search</h3>
                </label>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="searchBook"
                    placeholder="Enter the name of the book you are trying to find."
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Go!
            </button>
        </form>
    )
}



export default SearchForm