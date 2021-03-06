import React from 'react';
import {Row, Col} from '../Grid';

const SavedResults = (props) => {
	return props.savedBooks.length === 0 ? (
		// <div className="card">
		// 	<div className="card-body player">
		<div className="article">
			<h3 className="display-4  text-center">No Results To Displayed</h3>
		</div>
	) : (
		// </div>
		// </div>
		<div className="card">
			<div className="card-body player">
				<div className="article">
					<h3 className="fonts">Saved Books</h3>
					{props.savedBooks.map((savedbook) => {
						return (
							<li className="saved-list list-group-item">
								<Row className="SearchResult" id={savedbook.title + 'Card'} key={savedbook._id}>
									{/* show image of the book */}
									<Col size="2" className="bookImage">
										<img src={savedbook.image} alt={savedbook.title} />
									</Col>
									<Col size="1" className="emptyCol" />
									{/* show information of the book */}
									<Col size="9" className="bookInfo">
										<Row>
											<h2 className="bookTitle">{savedbook.title}</h2>
										</Row>
										<Row>
											<h3 className="bookAuthor">{savedbook.authors}</h3>
										</Row>
										<Row>
											<p className="bookDescription">{savedbook.description}</p>
										</Row>
									</Col>
								</Row>
								<br></br>
								<Row className="buttonDiv ">
									<button className="deleteBook badge-pill btn-danger mt-3 ml-3" id={savedbook._id} onClick={() => props.handleDeleteButton(savedbook._id)}>
										Delete Book
									</button>
									<a href={savedbook.link} target="_blank" rel="noopener noreferrer">
										<button className="btn badge-pill btn-success mt-3 ml-3">View Book</button>
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
export default SavedResults;
