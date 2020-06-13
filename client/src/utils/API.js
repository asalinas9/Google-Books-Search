import axios from 'axios';

export default {
	//Get all Books
	getBook: function (title) {
		return axios.get(`https://www.googleapis.com/books/v1/volumes/?q=${title}`);
	},
	//Deletes the book with the given id
	deleteBook: function (id) {
		return axios.delete('/api/books' + id).then((result) => result.data);
	},
	//saves/stores book into the Database
	saveBook: function (bookD) {
		return axios.post('/api/books', bookD).then((result) => result.data);
	},
	//Get Saved Books from the Database
	savedBooks: function () {
		return axios.get('/api/books').then((result) => result.data);
	},
};
