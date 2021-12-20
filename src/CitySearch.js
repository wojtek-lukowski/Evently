import React, { Component } from 'react';
import { InfoAlert } from './Alert';
class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    // showSuggestions: false
  }

handleInputChanged = (event) => {
  const value = event.target.value;
  this.setState({ showSuggestions: true });
  const suggestions = this.props.locations.filter((location) => {
    return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
  });
  if (suggestions.length === 0) {
    this.setState({
      query: value,
      infoText: 'No city matches your search.',
    });
  } else {
    return this.setState({
      query: value,
      suggestions,
      // showSuggestions: false,
      infoText:''
    })
  }
}

handleItemClicked = (suggestion) => {
  this.setState({
    query: suggestion,
    // showSuggestions: false,
    infoText:''
  });
  this.props.updateEvents(suggestion);
}

  render() {
    // const infoText = this.state;
    return (
      <div className="CitySearch">
        {/* {infoText &&
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M34.5999 29.21L20.7099 3.65C20.4335 3.1406 20.0246 2.71527 19.5265 2.41889C19.0284 2.12251 18.4595 1.96606 17.8799 1.96606C17.3003 1.96606 16.7315 2.12251 16.2334 2.41889C15.7353 2.71527 15.3264 3.1406 15.0499 3.65L1.16994 29.21C0.895468 29.7015 0.754627 30.2563 0.761468 30.8192C0.768309 31.3821 0.922592 31.9333 1.20893 32.418C1.49527 32.9026 1.90366 33.3037 2.39338 33.5813C2.8831 33.8589 3.43703 34.0033 3.99994 34H31.7699C32.3271 33.9994 32.8746 33.8543 33.3589 33.5788C33.8432 33.3032 34.2477 32.9068 34.5329 32.4281C34.8181 31.9494 34.9742 31.405 34.9859 30.8479C34.9977 30.2908 34.8647 29.7403 34.5999 29.25V29.21ZM16.5999 10C16.5999 9.6287 16.7474 9.2726 17.01 9.01005C17.2725 8.7475 17.6286 8.6 17.9999 8.6C18.3712 8.6 18.7273 8.7475 18.9899 9.01005C19.2524 9.2726 19.3999 9.6287 19.3999 10V22C19.3999 22.3713 19.2524 22.7274 18.9899 22.9899C18.7273 23.2525 18.3712 23.4 17.9999 23.4C17.6286 23.4 17.2725 23.2525 17.01 22.9899C16.7474 22.7274 16.5999 22.3713 16.5999 22V10ZM17.9999 29.85C17.6439 29.85 17.2959 29.7444 16.9999 29.5466C16.7039 29.3489 16.4732 29.0677 16.337 28.7388C16.2007 28.4099 16.1651 28.048 16.2345 27.6988C16.304 27.3497 16.4754 27.0289 16.7272 26.7772C16.9789 26.5255 17.2996 26.354 17.6488 26.2846C17.9979 26.2151 18.3599 26.2508 18.6888 26.387C19.0177 26.5233 19.2988 26.754 19.4966 27.05C19.6944 27.346 19.7999 27.694 19.7999 28.05C19.7999 28.2864 19.7534 28.5204 19.6629 28.7388C19.5725 28.9572 19.4399 29.1556 19.2727 29.3228C19.1056 29.4899 18.9072 29.6225 18.6888 29.713C18.4704 29.8034 18.2363 29.85 17.9999 29.85V29.85Z" fill="#350568"/>
          </svg> } */}
        <InfoAlert text={this.state.infoText} />
        <input
        type="text"
        className="city"
        value={this.state.query}
        onFocus={() => this.setState({ showSuggestions: true })}
        onChange={this.handleInputChanged} />
        <ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }}>
          {this.state.suggestions.map((suggestion) => (
            <li key={suggestion} onClick={() => this.handleItemClicked(suggestion)}>{suggestion}</li>
          ))}
          <li 
          key='all' 
          onClick={() => this.handleItemClicked('all')}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;