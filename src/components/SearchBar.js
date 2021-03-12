import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    componentDidMount() {
        // Javascript code for animation purpose
        var input = document.querySelector('.input');
        document.querySelector('.expand-btn').onclick = function () {
            input.classList.toggle('active');
            document.querySelector('.form').classList.add('active');
            input.style.display = 'block';
            document.querySelector('.expand-btn').style.display = 'none';
        };
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        document.querySelector('.search-div').classList.add('active');
        document.querySelector('#main-div').classList.add('active');

        this.props.onSubmit(this.state.term); // Child to Parent communication
    };

    render() {
        return (
            <div id='main-div'>
                <div className='logo-div'>
                    <h1 className='logo'>Image Search</h1>
                </div>
                <div className='search-div'>
                    <form onSubmit={this.onFormSubmit} className='form'>
                        <input
                            autoComplete='off'
                            className='input'
                            type='text'
                            name='input'
                            value={this.state.term}
                            onChange={(e) =>
                                this.setState({ term: e.target.value })
                            }
                            placeholder='Search with us'
                        />
                    </form>
                    <div className='expand-btn'>
                        <i className='angle right icon big'></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;
