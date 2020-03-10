
import React, {Component} from "react";
import ReactDOM from "react-dom";


class BookInfo extends Component {
    state = {
        bookData: null,
        isbn: this.props.isbn
    }

    changeIsbn = (isbn) => {
        // this.setState({
        //     isbn
        // });
        this.loadBookInfo(isbn);
    }

    componentDidMount() {
        this.loadBookInfo(this.state.isbn);
    }

    loadBookInfo(isbn) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                } else {
                    throw new Error("Error during fetching data");
                }
            })
            .then(data => {
                if (data.items && data.items[0] && data.items[0].volumeInfo) {
                    this.setState({
                        bookData: data.items[0].volumeInfo
                    })
                }else{
                    this.setState({
                        bookData: null
                    })
                }
            })
            .catch(err => console.log(err))


    }

    render() {

        return (
            <>
                <SearchBookForm onSearch={this.changeIsbn}/>
                {this.state.bookData && <h1>{this.state.bookData.title}</h1>}
            </>
        )
    }
}

class SearchBookForm extends Component {
    state = {
        isbn: ""
    }
    handleChangeIsbn = (e) => {
        this.setState({
            isbn: e.target.value
        })
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        if(typeof this.props.onSearch === 'function'){
            this.props.onSearch(this.state.isbn);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmitForm}>
                <input name="isbn"
                       type="text"
                       placeholder="ISBN"
                       value={this.state.isbn}
                       onChange={this.handleChangeIsbn}
                />
                <button>Search</button>
            </form>
        )
    }
}


function Task05() {
    return <BookInfo isbn="0747532699"/>
}

export default Task05;