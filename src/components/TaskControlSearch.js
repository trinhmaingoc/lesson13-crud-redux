import React, { Component } from 'react'

export class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             keyword: '',
        }
    };

    onChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value,
        });
    };

    onSearch = () => {
        this.props.onSearch(this.state.keyword);
    }
    
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mt-15">
                <div className="input-group">
                    <input
                        name="keyword"
                        type="text"
                        className="form-control"
                        placeholder="Nhập từ khóa ..."
                        onChange={this.onChange}
                    />
                    <span className="input-group-btn">
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={this.onSearch}
                        >
                            <span className="fa fa-search mr-5"></span>Tìm
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}

export default Search
