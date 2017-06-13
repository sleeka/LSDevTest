
const data = [
 {
   type: "User",
   name: "Sam Smith"
 },
 {
   type: "User",
   name: "Rick Smith"
 },
 {
   type: "User",
   name: "Adam Jones"
 },
 {
   type: "User",
   name: "Amy Johnson"
 },
 {
   type: "User",
   name: "Sara Smith"
 },
 {
   type: "User",
   name: "April Johns"
 },
 {
   type: "User",
   name: "Samantha Adams"
 },
 {
   type: "User",
   name: "George Jetson"
 },
 {
   type: "User",
   name: "Frank Jordan"
 },
 {
   type: "User",
   name: "Charlie Adams"
 },
 {
   type: "Group",
   name: "Mrs. Smith's 1st Grade"
 },
 {
   type: "Group",
   name: "Mr. Jordan's 2nd Grade"
 },
 {
   type: "Group",
   name: "Mr. Adam's 7th Grade"
 },
 {
   type: "Group",
   name: "Mrs. John's 3rd Grade"
 },
 {
   type: "Group",
   name: "Mr. Smith's 9th Grade"
 }
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');
  return data
    .map(section => {
      return {
        type: section.type,
        name: data.filter(info => regex.test(info.name))
      };
    })
    .filter(section => section.name.length > 0);
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

function renderSectionTitle(section) {
  return (
    <strong>{section.type}</strong>
  );
}

function getSectionSuggestions(section) {
  return section.name;
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };    
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };
  
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type 'c'",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest 
        multiSection={true}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        renderSectionTitle={renderSectionTitle}
        getSectionSuggestions={getSectionSuggestions}
        inputProps={inputProps} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
