import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortTable } from '../actions';

export class TaskControlSort extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sort: {
                by: 'name',
                value: 1
            }
        }
    };

    onClick = (by, value) => {
        this.setState({
            sort: {
                by,
                value: parseInt(value)
            }
        });
        this.props.onSortTable({by, value});
    }

    render() {
        const { by, value } = this.state.sort;
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mt-15">
                <div className="dropdown">
                    <button
                        type="button"
                        className="btn btn-primary dropdown-toggle"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        Sắp Xếp<span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() => this.onClick('name', 1)}>
                            <ul role="button" className={(by === 'name' && value === 1) ? "sort_selected" : ""}>
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A-Z
                                </span>
                            </ul>
                        </li>
                        <li onClick={() => this.onClick('name', -1)}>
                            <ul role="button" className={(by === 'name' && value === -1) ? "sort_selected" : ""}>
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Tên Z-A
                                </span>
                            </ul>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={() => this.onClick('status', -1)}>
                            <ul role="button" className={(by === 'status' && value === -1) ? "sort_selected" : ""}>
                                Trạng Thái Kích Hoạt
                            </ul>
                        </li>
                        <li onClick={() => this.onClick('status', 1)}>
                            <ul role="button" className={(by === 'status' && value === 1) ? "sort_selected" : ""}>
                                Trạng Thái Ẩn
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    onSortTable: sortTable,
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskControlSort)