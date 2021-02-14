import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import '../.././components.css';
import DialogContent from '@material-ui/core/DialogContent';

class CompleteCardDetails extends React.Component {
    state =  {
      open: false,
      card: {
        id: null,
        title: '',
        description: ''
      },
      laneId: ''
    };
    constructor(props) {
    	super(props);
    	this.state = {open: props.open,
                    card: props.card && props.card.card ?  props.card.card : {title: '',
                    description: '',
                    id: null},
                    laneId: props.card ? props.card.laneId : ''};
    }

    setTitleRef = (event) => {
      let cardUpd = this.state.card;
      cardUpd.title = event.target.value;
      this.setState({card : cardUpd});
    }

    setDescRef = (event) => {
      let cardUpd = this.state.card;
      cardUpd.description = event.target.value;
      this.setState({card : cardUpd});
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.open != nextProps.open) {
            return {
              open: nextProps.open,
              card: nextProps.card && nextProps.card.card ?  nextProps.card.card : {title: '',
                description: '',
                id: null},
              laneId: nextProps.card && nextProps.card ? nextProps.card.laneId : ''
            };
           
        }
        return null;
     }

  handleClickOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.props.onHide();
  };

  createBoard = () => {
     this.props.onCreate(this.state.card, this.state.laneId);
  }

  setBoardName = (ref) => this.boardName = ref;

 render() {
  return (
    <div>
      <Dialog  open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle 
      id="form-dialog-title">Update Card Details</DialogTitle>
        <DialogContent>
          <div  style={{marginBottom: 20}}>
            <div style={{marginBottom: 5}}>
              <input type="text" defaultValue={this.state.card.title} onChange={this.setTitleRef} placeholder="Title" className = "card-input"/>
            </div>
            <div style={{marginBottom: 5}}>
              <textarea style = {{height:100, width:300}} defaultValue={this.state.card.description} onChange={this.setDescRef} placeholder="Description" className = "card-input"></textarea>
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