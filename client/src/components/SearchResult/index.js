import React from 'react';
// import './style.css';
import {Row, Col} from '../Grid';

const SearchResult = (props) => {
	return props.books.length === 0 ? (
		// <div className="card mb-3">
		// 	<div className="card-body player">
		<div className="article">
			<h4 className="display-4  text-center">No Results Displayed Yet</h4>
		</div>
	) : (
		// 	</div>
		// </div>
		<div className="card">
			<div className="card-body player mb-3">
				<div className="article">
					<h3 className="searchBox">Search Results</h3>
					{props.books.map((book) => {
						return (
							<li className="search-list list-group-item">
								<Row className="SearchResult row" id={book.title + 'Card'} key={book._id}>
									{/* col-3 show image of the book */}
									<Col size="2" className="bookImage">
										<img src={book.image} alt={book.title} />
									</Col>
									<Col size="1" className="emptyCol" />
									{/* col-9 show information of the book */}
									<Col size="10" className="bookInfo col-md-10">
										<Row>
											<h3 className="bookTitle">{book.title}</h3>
										</Row>
										<Row>
											<h4 className="bookAuthor">{book.author}</h4>
										</Row>
										<Row>
											<p className="bookDescription">{book.description}</p>
										</Row>
									</Col>
								</Row>
								<br></br>
								<Row className="buttonDiv ">
									<button className="btn badge-pill btn-success mt-3 ml-3" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
										Save Book
									</button>
									<a href={book.link} target="_blank" rel="noopener noreferrer">
										<button className="btn badge-pill btn-info mt-3">View Book</button>
									</a>
								</Row>
							</li>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default SearchResult;
