import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import '../.././components.css';

class NewBoardModal extends React.Component {
  
    constructor(props) {
    	super(props);
    	this.state = {open:props.open};
    }
    
     boardName = '';
      
    static getDerivedStateFromProps(nextProps, prevState)  {
        if (prevState.open != nextProps.open) {
            return {
                 open: nextProps.open
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
       this.props.onCreate(this.boardName);
     };

     setBoardName = (ref) => this.boardName = ref;

    render() {
     return (
       <div>
          <Dialog  open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Create New Board</DialogTitle>
            <DialogContent>
              <div  style={{marginBottom: 20}}>
              <input style = {{height:40, width:250}} id="name" placeholder=" Enter Board Name" type="text" ref={this.setBoardName} className = "card-input"/>
              </div>
              <button className = "card-button card-add-button" onClick={this.createBoard} color="primary">
               Create
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

export default NewBoardModal;