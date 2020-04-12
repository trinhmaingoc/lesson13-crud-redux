import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveTask, closeForm } from '../actions';

export class TaskForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      id: '',
      name: '',
      status: false
    }
  }

  componentDidMount() {
    console.log(this.props.editTask);
    
    if (this.props.editTask) {
      this.setState({
        id: this.props.editTask.id,
        name: this.props.editTask.name,
        status: this.props.editTask.status
      })
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.editTask !== this.props.editTask) {
      if (this.props.editTask) {
        this.setState({
          id: this.props.editTask.id,
          name: this.props.editTask.name,
          status: this.props.editTask.status,
        })
      } else {
        this.onClear();
      }
    }
  }

  onChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  onSave = (event) => {
    event.preventDefault();
    this.props.onSaveTask(this.state);
    this.onClear();
    this.props.onCloseForm();
  }

  onClear = () => {
    this.setState({
      id: '',
      name: '',
      status: false,
    })
  }

  render() {
    const { isDisplayForm, editTask } = this.props;
    if (!isDisplayForm) return '';
    return (
      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
        {/* Form */}
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">
              {editTask.id ? "Cập nhật công việc" : "Thêm Công Việc"}
              <span
                className="fa fa-times-circle text-right"
                onClick={this.props.onCloseForm}
              ></span>
            </h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSave} >
              <div className="form-group">
                <label>Tên: </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={editTask.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Trạng Thái: </label>
                <select
                  name="status"
                  className="form-control"
                  value={editTask.status}
                  onChange={this.onChange}
                >
                  <option value={false}>Ẩn</option>
                  <option value={true}>Kích Hoạt</option>
                </select>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-warning">
                  <span className="fa fa-plus mr-5" ></span>Lưu Lại
                </button> &nbsp;
                <button
                  type="reset"
                  className="btn btn-danger"
                  onClick={this.onClear}
                >
                  <span className="fa fa-close mr-5" ></span>Hủy Bỏ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isDisplayForm: state.isDisplayForm,
  editTask: state.editTask,
})

const mapDispatchToProps = {
  onSaveTask: saveTask,
  onCloseForm: closeForm,
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)