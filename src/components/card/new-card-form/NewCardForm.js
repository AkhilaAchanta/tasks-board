import React from 'react';
import '../.././components.css';


class NewCardForm extends React.Component {
  handleAdd = () => this.props.onAdd({title: this.titleRef.value, description: this.descRef.value})
  setTitleRef = (ref) => this.titleRef = ref
  setDescRef = (ref) => this.descRef = ref
  render() {
    const {onCancel} = this.props
    return (
      <div className="custom-card">
        <div style={{padding: 5, margin: 5}}>
          <div>
            <div style={{marginBottom: 5}}>
              <input type="text" ref={this.setTitleRef} placeholder="Title" className = "card-input"/>
            </div>
            <div style={{marginBottom: 5}}>
              <textarea ref={this.setDescRef} placeholder="Description" className = "card-input"></textarea>
            </div>
          </div>
          <button className = "card-add-button card-button" onClick={this.handleAdd}>Add</button>
          <button className = "card-button" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    )
  }
}

export default NewCardForm;