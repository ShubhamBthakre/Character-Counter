import './App.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

// Replace your code here

class App extends Component {
  state = {
    charactersList: [],
    inputCharacter: '',
  }

  renderCharactersListAndCountView = () => {
    const {charactersList} = this.state

    return (
      <div className="characters-list-and-count-container">
        <h1 className="heading characters-list-heading">
          Count the Characters like a Boss....
        </h1>
        {charactersList.length === 0 ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
            className="no-user-inputs-img"
          />
        ) : (
          <ul className="characters-list">
            {charactersList.map(eachCharacter => (
              <li className="character-item" key={eachCharacter.id}>
                <p>
                  {eachCharacter.character} : {eachCharacter.character.length}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  onChangeInputCharacter = event => {
    this.setState({inputCharacter: event.target.value})
  }

  onAddCharacter = event => {
    event.preventDefault()
    const {charactersList, inputCharacter} = this.state
    const charactersDetails = {
      id: uuidv4(),
      character: inputCharacter,
    }
    charactersList.push(charactersDetails)
    this.setState({charactersList, inputCharacter: ''})
  }

  renderCharactersInputView = () => {
    const {inputCharacter} = this.state
    return (
      <div className="character-input-container">
        <h1 className="heading character-input-heading">Character Counter</h1>
        <form className="input-container" onSubmit={this.onAddCharacter}>
          <input
            type="text"
            className="input"
            placeholder="Enter the Characters Here"
            value={inputCharacter}
            onChange={this.onChangeInputCharacter}
          />
          <button
            className="add-button"
            type="submit"
            onClick={this.onAddCharacter}
          >
            Add
          </button>
        </form>
      </div>
    )
  }

  render() {
    return (
      <div className="app-container">
        <div className="character-counter-app-container">
          {this.renderCharactersListAndCountView()}
          {this.renderCharactersInputView()}
        </div>
      </div>
    )
  }
}

export default App
