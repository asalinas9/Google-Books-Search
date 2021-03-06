import React from 'react';
import Form from '../components/Form';
import SearchResult from '../components/SearchResult';
import {Container, Row, Col} from '../components/Grid';
import API from '../utils/API';
// import Header from '../components/Header';

class Search extends React.Component {
	state = {
		search: '',
		books: [],
		error: '',
	};

	handleInputChange = (event) => {
		this.setState({search: event.target.value});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		// once it clicks it connects to the google book api with the search value
		API.getAPIBooks(this.state.search)
			.then((res) => {
				if (res.data.items === 'error') {
					throw new Error(res.data.items);
				} else {
					// store response in a array
					let results = res.data.items;
					//map through the array
					results = results.map((result) => {
						//store each book information in a new object
						result = {
							key: result.id,
							id: result.id,
							title: result.volumeInfo.title,
							author: result.volumeInfo.authors,
							description: result.volumeInfo.description,
							image: result.volumeInfo.imageLinks.thumbnail,
							link: result.volumeInfo.infoLink,
						};
						return result;
					});
					// reset the state of the empty books array to the new arrays of objects with properties geting back from the response
					this.setState({books: results, error: ''});
				}
			})
			.catch((err) => this.setState({error: err.items}));
	};

	handleSavedButton = (event) => {
		// console.log(event)
		event.preventDefault();
		console.log(this.state.books);
		let savedBooks = this.state.books.filter((book) => book.id === event.target.id);
		savedBooks = savedBooks[0];
		API.saveBook(savedBooks)
			.then(this.setState())
			.catch((err) => console.log(err));
	};
	render() {
		return (
			<Container fluid>
				<Container>
					<Row>
						<Col size="12">
							<Form handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} />
						</Col>
					</Row>
				</Container>
				<br></br>
				<Container>
					<SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton} />
				</Container>
			</Container>
		);
	}
}

export default Search;
