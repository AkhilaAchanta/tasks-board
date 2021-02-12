import logo from './logo.svg';
import './App.css';
import Board from 'react-trello';
import NewCardForm from './components/card/new-card-form/NewCardForm.js';
import CustomAddCardLink from './components/card/custom-add-card-link/CustomAddCardLink.js';
import CustomCard from './components/card/custom-card/CustomCard.js';
import CustomLaneHeader from './components/lane/lane-header/CustomLaneHeader.js';
import LaneFooter from './components/lane/lane-footer/LaneFooter.js';


function App() {
  const data = {
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
    },
  ]
};
let eventBus = undefined;
const setEventBus = (handle) => {
  eventBus = handle
};
let editableFlag = true;

let components = {
        NewCardForm: NewCardForm, 
        LaneHeader: CustomLaneHeader,
        AddCardLink: CustomAddCardLink, 
        Card: CustomCard,
        LaneFooter: LaneFooter,
  };

  return (
    <div className= "app">
    <div className = "App-header">
    </div>
    <div className = "task-board">
     <Board collapsibleLanes style = {{background:'none'}} 
       components={components}   
      data={data} eventBusHandle={setEventBus} editable = {editableFlag}/>
    </div>
    </div>
  );
}

export default App;
