import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MoodList from './MoodList';
import EditorForm from './EditorForm';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actualDate: "",
      userData: [{
        id: "2019-10-25",
        mood: "bad",
        message: ""
      }, {
        id: "2019-10-29",
        mood: "good",
        message: "Otro día programando :D"
      }, {
        id: "2019-10-30",
        mood: "good",
        message: "Gato!"
      },
      {
        id: "2019-10-31",
        mood: "good",
        message: "It's Hallowen!"
      },
      {
        id: "2019-11-01",
        mood: "bad",
        message: ""
      }]
    }

    this.handleSaveData = this.handleSaveData.bind(this);
    this.getActualDate = this.getActualDate.bind(this);
    this.renderFormDay = this.renderFormDay.bind(this);
    this.renderMoodList = this.renderMoodList.bind(this);
  }

  getActualDate() {
    const date = new Date();
    const getDay = date.getDate();
    const getMonth = date.getMonth() + 1;
    const getYear = date.getFullYear();
    const currentDay = getYear + "-" + getMonth + "-" + getDay;
    console.log(currentDay)
    const savedData = JSON.parse(localStorage.getItem("LSuserData"));
    savedData ? this.setState({
      actualDate: currentDay,
      userData: savedData
    }) :
      this.setState({
        actualDate: currentDay,
      })
  }

  componentDidMount() {
    this.getActualDate();

  }

  handleSaveData(newDayConfiguredByUser) {
    debugger;
    const { userData } = this.state;
    const newUserData = userData.concat(newDayConfiguredByUser);
    console.log(newUserData)
    this.setState({
      userData: newUserData
    }, () => localStorage.setItem("LSuserData", JSON.stringify(this.state.userData)))

  }

  renderMoodList() {
    return (<MoodList userData={this.state.userData} actualDate={this.state.actualDate} />)
  }

  renderFormDay() {
    return (<EditorForm actualDate={this.state.actualDate} userData={this.state.userData} handleSaveData={this.handleSaveData} />)
  }

  render() {
    return (
      <div className="App">
        {(this.state.actualDate) ?
          <Switch>
            <Route exact path="/" render={this.renderMoodList} />
            <Route exact path="/today" render={this.renderFormDay} />
          </Switch> : "Cargando"
        }
      </div>
    );
  }
}

export default App;
