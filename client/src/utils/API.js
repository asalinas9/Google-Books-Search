import axios from 'axios';

export default {
	getAPIBooks: function (query) {
		return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
	},

	getBooks: function () {
		return axios.get('/api/books');
	},

	// Gets books with the given id
	getBook: function (id) {
		return axios.get('/api/books/' + id);
	},
	// Saves a book to the database
	saveBook: function (savedBooks) {
		return axios.post('/api/books', savedBooks);
	},
	// Deletes the book with the given id
	deleteBook: function (id) {
		return axios.delete('/api/books/' + id);
	},
};
