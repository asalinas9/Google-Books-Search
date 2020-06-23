import React from 'react';

function Form(props) {
	return (
		<form>
			<div className="form-group">
				<label className="BookSearchLabel">
					<h3 className="searchBox">Enter a book to search</h3>
				</label>
				<br></br>
				<input className="col-12 form-control" value={props.search} type="text" name="searchBook" placeholder="Book Title " onChange={props.handleInputChange} />
			</div>
			<button type="submit" className="submitBtn btn btn-danger" onClick={props.handleFormSubmit}>
				Search
			</button>
		</form>
	);
}

export default Form;
