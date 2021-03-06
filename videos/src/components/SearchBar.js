import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};
    // onInputChange is an event call back in the class so use arrow function to avoid errors
    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault(); // prevent's the default application to refresh

        this.props.onFormSubmit(this.state.term)
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit = {this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange = {this.onInputChange} // onChange is special event handler so have to use it for event change
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;