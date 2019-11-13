import React from "react";
import {Row, Column} from "../grid"
import {handleSubmitButton} from './'
const BookList = (props) => {
    return (
        props.books.length === 0
    ) ? 
    (
        <div className="card">
            <div className="card-body">
                <div className="result">
                    <h3>No Results</h3>
                </div>
            </div>
        </div>
    ) : 
    (
            <div className="card">
                        <div className="card-body player">
                            <div className="result">
                                <h3>Results:</h3>
                                    {props.books.map(book => {
                                        console.log(book);
                                        return (
                                            <li className="search-list list-group-item">
                                                <Row 
                                                    className="SearchResult row" 
                                                    id={book.title + "Card"} 
                                                    key={book._id}>
                                                        <Column size="2" 
                                                            className="bookImage">
                                                            <img src={book.image} alt={book.title}/>
                                                        </Column>
                                                        <Column size="1" className="spacer"
                                                        />
                                                        <Column size="9" className="info">
                                                            <Row>
                                                                <h3 className="title">{book.title}</h3>
                                                            </Row>
                                                            <Row>
                                                                <h4 className="author">{book.authoredBy}</h4>
                                                            </Row>
                                                            <Row>
                                                                <p className="description">{book.description}</p>
                                                            </Row>
                                                        </Column>
                                                </Row>
                                                <Row className="save">
                                                    <button className="saveBook btn btn-primary" 
                                                        id={book.id} 
                                                        onClick={
                                                            (event) => props.handleSavedButton(event)}>
                                                            Add to Library
                                                    </button>
                                                    <a href={book.link} target="_blank">
                                                        <button className="view btn btn-success">
                                                            View
                                                    </button>
                                                    </a>
                                                </Row>
                                            </li>
                                        );
                                    })
                                 }
                            </div>
                        </div>
                    </div>
    )
}
export default BookList;