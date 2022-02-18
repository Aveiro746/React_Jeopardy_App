import {Component} from 'react'


class Score extends Component {
    state= {
        score: 0
    }

    handleIncrease= ()=> {
        this.setState({score: this.state.score + this.props.questionObject.value})
    }

    handleDecrease= ()=> {
        this.setState({score: this.state.score - this.props.questionObject.value})
    }

    render() {
        return(
            <div>
                <h1>{this.state.score}</h1>
                <button onClick={this.handleIncrease}>Increase</button>
                <button onClick={this.handleDecrease}>Decrease</button>
            </div>
        )
    }
}


export default Score;