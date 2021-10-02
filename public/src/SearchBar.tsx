import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div id="search-bar">
        <input placeholder="SEARCH TICKER" id = "search-input" /><span>
        <svg width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="10" r="9.5" stroke="#414162"/>
<line x1="9.38698" y1="17.3166" x2="0.386979" y2="28.3166" stroke="#414162"/>
</svg></span>

      </div>
    );
  }
}
