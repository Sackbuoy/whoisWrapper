import './App.css';
import React from 'react';
import WhoisAPI from './whois-api';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
       <SearchForm />
      </header>
    </div>
  );
}

class Results extends React.Component {
  render() {
    const data = this.props.data;
    let arr = [];
    Object.keys(this.props.data).forEach(function(key) {
      arr.push([key, data[key]]);
    });
    return <ul>{arr.map(item => <ResultsField key={item[0]} name={item[0]} value={item[1]} />)}</ul>;
  }
}

class ResultsField extends React.Component {
  render() {
    return <li><b>{this.props.name}</b>{": " + JSON.stringify(this.props.value).replace(/["]+/g, '')}</li>;
  }
}

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      responseData: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    WhoisAPI.getDomainInfo(this.state.value)
      .then(data => this.setState({responseData:data}))
    event.preventDefault();
  }

  render() {
    return (
      <div id="formbox">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="domain">
            WHOIS IP or Domain Lookup: <br/><br/>
          </label>
          <input type="text" name="domain" onChange={this.handleChange} value={this.state.value} placeholder="e.g. www.google.com..."/>
          <input type="submit" value="Submit"/>
        </form>
        {this.state.responseData ? 
          <div>
            <Results data={this.state.responseData}/>
          </div>
          :
          <div> 
            <br/>
            Your search results will appear here    
          </div>
        }
      </div>
    )
  }
}

export default App;
