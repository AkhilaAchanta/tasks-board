import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import '../.././components.css';
import DialogContent from '@material-ui/core/DialogContent';

class CompleteCardDetails extends React.Component {
    card = {
      title: '',
      description: '',
      id: null
    };
    laneId = '';
    constructor(props) {
    	super(props);
    	this.state = {open:props.open};
    }

    setTitleRef = (event) => {
      this.card.title = event.target.value;
    }
    setDescRef = (event) => {
      this.card.description = event.target.value;
    }
    componentWillReceiveProps(nextProps) {
        if (this.state.open != nextProps.open) {
            this.setState({
                 open: nextProps.open,

             });
            this.card = nextProps.card ?  nextProps.card.card : {title: '',
             description: '',
             id: null};
            this.laneId = nextProps.card ? nextProps.card.laneId : '';
        }
     }

  handleClickOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.props.onHide();
  };

  createBoard = () => {
     this.props.onCreate(this.card, this.laneId);
  }

  setBoardName = (ref) => this.boardName = ref;

 render() {
  return (
    <div>
      <Dialog fullWidth={50} open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle 
      id="form-dialog-title">Update Card Details</DialogTitle>
        <DialogContent>
          <div  style={{marginBottom: 20}}>
            <div style={{marginBottom: 5}}>
              <input type="text" defaultValue={this.card.title} onChange={this.setTitleRef} placeholder="Title" className = "card-input"/>
            </div>
            <div style={{marginBottom: 5}}>
              <textarea defaultValue={this.card.description} onChange={this.setDescRef} placeholder="Description" className = "card-input"></textarea>
            </div>
          </div>
          <button className = "card-button card-add-button" onClick={this.createBoard} color="primary">
            Save
          </button>
           <button className= "card-button" onClick={this.handleClose}>
            Cancel
          </button>
          </DialogContent>
      </Dialog>
    </div>
  );
}

}

export default CompleteCardDetails;