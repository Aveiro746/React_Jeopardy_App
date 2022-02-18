
import './App.css';
import { Component } from 'react/cjs/react.production.min';
import Question from './components/Question';
import Category from './components/Category';
import Points from './components/Points';
import Score from './components/Score'

class App extends Component {

  state = {
    questionObject: null

  }

async componenDidMount(){
  try{
    const res = await fetch('http://jservice.io/api/random');
    const data = await res.json();
    this.setState({questionObject: data[0] })
    console.log(this.state.questionObject.question)
    } catch (err) {
      console.log(err)
    }
}

  handleClick = async () => {
    try{
    const res = await fetch('http://jservice.io/api/random');
    const data = await res.json();
    this.setState({questionObject: data[0] })
    console.log(this.state.questionObject.question)
    } catch (err) {
      console.log(err)
    }
  };


  render() {

  return (
    <div className="">
          <h1>Jeopardy App</h1>

          <button onClick={this.handleClick}>Random Trivia Question</button>

          <div>
            {this.state.questionObject && <Question questionObject= {this.state.questionObject} />}
            {this.state.questionObject && <Category questionObject= {this.state.questionObject} />}
            {this.state.questionObject && <Points questionObject= {this.state.questionObject} />}
            {this.state.questionObject && <Score questionObject= {this.state.questionObject} />}

          </div>
         

    </div>
  );
}
}


export default App;
