import React from 'react';

function Form(props) {
	return (
		<div className="container">
			<form>
				<div className="form-group">
					<label htmlFor="search">
						<h3>Enter a book to search:</h3>
					</label>
					<input onChange={props.handleInputChange} value={props.search} name="search" type="text" className="form-control" placeholder="Book Title" id="search" />
					<button onClick={props.handleFormSubmit} className="btn btn-danger mt-3 mb-5">
						Search
					</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
