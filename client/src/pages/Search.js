import React from 'react';
import Form from '../components/Form';
import Results from '../components/Results';
import API from '../utils/API';

class Search extends React.Component {
	state = {
		title: '',
		books: [],
		target: '',
		noResults: false,
	};

	componentDidMount() {
		this.searchBook();
	}

	createBook = (bookD) => {
		return {
			_id: bookD.id,
			title: bookD.volumeInfo.title,
			authors: bookD.volumeInfo.authors,
			description: bookD.volumeInfo.description,
			image: bookD.volumeInfo.imageLinks.thumbnail,
			link: bookD.volumeInfo.infoLink,
		};
	};

	searchBook = (title) => {
		API.getBook(title)
			.then((res) => this.setState({books: res.data.items.map((bookD) => this.createBook(bookD))}))
			.catch((err) => console.log(err));
	};

	handleInputChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
			[name]: value,
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		this.searchBook(this.state.search);
	};

	render() {
		return (
			<div>
				<Form search={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
				<div className="container">
					<h2>Results</h2>
					<Results books={this.state.books} />
				</div>
			</div>
		);
	}
}

export default Search;
