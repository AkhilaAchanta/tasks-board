import React from 'react';
import './App.css';
import Board from 'react-trello';
import NewCardForm from './components/card/new-card-form/NewCardForm.js';
import CustomAddCardLink from './components/card/custom-add-card-link/CustomAddCardLink.js';
import CustomCard from './components/card/custom-card/CustomCard.js';
import CustomLaneHeader from './components/lane/lane-header/CustomLaneHeader.js';
import LaneFooter from './components/lane/lane-footer/LaneFooter.js';
import NewBoardModal from './components/board/new-board-modal/NewBoardModal.js';
import AddIcon from '@material-ui/icons/Add';
import CompleteCardDetails from './components/card/complete-card-details/CompleteCardDetails.js';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { 
    showNewBoard: false,
    showCardDetails: false,
    boardName: 'Sample Board',
    data : { // Board Data
      lanes: [
       {
         id: 'lane1',
        title: 'TO DO',
         cards: []
       },
       {
         id: 'lane2',
        title: 'IN PROGRESS',
        cards: []
       },
       {
        id: 'lane3',
        title: 'COMPLETED',
        cards: []
       }
      ]
    }
};


 editableFlag = true;

 selectedCard = { card: null, laneId: null};

 // Custom components that will override default components in react-trello
 components = {
        NewCardForm: NewCardForm, 
        LaneHeader: CustomLaneHeader,
        AddCardLink: CustomAddCardLink, 
        Card: CustomCard,
        LaneFooter: LaneFooter,
  };

  setEventBus = (eventBus) => {
  this.setState({eventBus})
  };

  setShowNewBoard = () => {
   this.setState({showNewBoard: true});
  }

  hideNewBoard = () => {
    this.setState({showNewBoard: false });
  };

  createNewBoard = (name) => {
    this.setState({ 
      showNewBoard: false,
      boardName: name.value,
      data : {
      lanes: [
        {
      id: 'lane1',
      title: 'TO DO',
      cards: []
      },
      {
      id: 'lane2',
      title: 'IN PROGRESS',
      cards: []
      },
      {
      id: 'lane3',
      title: 'COMPLETED',
      cards: []
      }
     ]}
   });
  }

   // Adding the newly added card to the corresponding lane
   onNewCardAdd = (card, laneId) => {
    let lane = this.state.data.lanes.find((l) => l.id === laneId);
    if (lane) {
     lane.cards.push(card);
    }
  };

  // Moving a card from one lane to another lane
  onCardMovedToDifferentLane = (fromLaneId, toLaneId, cardId, index) => {
     let currentLane = this.state.data.lanes.find((l) => l.id === fromLaneId);
     let targetLane = this.state.data.lanes.find((l) => l.id === toLaneId);
     let card = currentLane.cards.find((c) => c.id === cardId);
     currentLane.cards = currentLane.cards.filter((c) => c.id !== cardId);
     let beforeIndexArray  = targetLane.cards.slice(0, index);
     beforeIndexArray.push(card);
     let afterIndexArray = targetLane.cards.slice(index);
     targetLane.cards = beforeIndexArray.concat(afterIndexArray);
  }

  // To show card details in a pop up
  openCardDialog = (cardId, metaData, laneId) => {
    this.setState({showCardDetails : true});
    let lane = JSON.parse(JSON.stringify(this.state.data.lanes.find((l) => l.id === laneId)));
    if (lane) {
      this.selectedCard.card = lane.cards.find((c) => c.id === cardId);
      this.selectedCard.laneId = laneId;
    }
  }

  // to update card details
  updateCardDetails = (card, laneId) => {
    let data = JSON.parse(JSON.stringify(this.state.data));
    let laneIndex = data.lanes.findIndex((l) => l.id === laneId);
    if (laneIndex >= 0) {
      let currentcard =  data.lanes[laneIndex].cards.findIndex((c) => c.id === card.id);
      data.lanes[laneIndex].cards[currentcard] = card;
    }
    this.setState({showCardDetails : false, data: data });
  }

  hideCardDetails = () => {
    this.setState({showCardDetails : false});
  }

  render () {
    return (
     <div className= "app">
        <div className = "App-header">
         <i className = "board-title">Tasks Manager</i>
        </div>
        <div className = "board-details">
          <h1 className = "board-title">{this.state.boardName}</h1>
          <div className = "add-icon-button" onClick = {this.setShowNewBoard}>
            <AddIcon style={{ fontSize: 30 }}/>
          </div>
        </div>
        <CompleteCardDetails card = {this.selectedCard} open = {this.state.showCardDetails} onHide = {this.hideCardDetails} onCreate = {this.updateCardDetails} />
        <NewBoardModal open = {this.state.showNewBoard} onHide = {this.hideNewBoard} onCreate = {this.createNewBoard} />
        <div className = "task-board">
          <Board collapsibleLanes style = {{background:'none'}} 
            components={this.components}   
            data={this.state.data} eventBusHandle={this.setEventBus} editable = {this.editableFlag} 
            onCardAdd = {this.onNewCardAdd}
            onCardMoveAcrossLanes = {this.onCardMovedToDifferentLane}
            onCardClick={this.openCardDialog} />
        </div>
    </div>
   )
  }
}

export default App;
