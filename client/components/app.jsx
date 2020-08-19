import React from 'react';
import Homepage from './homepage';
import Map from './map';
import Weather from './weather';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'home',
        params: {}
      },
      beaches: []
    };
    this.setView = this.setView.bind(this);
    this.viewBeachInfo = this.viewBeachInfo.bind(this);
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
      this.viewBeachInfo()
  }

  viewBeachInfo() {
    fetch('/api/beaches')
      .then(res => res.json())
      .then(data => {
        this.setState({
          beaches: data
        })
        console.log(this.state.beaches)
      })
  }

  setView(names, params) {
    this.setState({
      view: {
        name: names,
        params: params
      }
    })
  }

  render() {
    const changeView = this.state.view.name === 'home'
        ? <Homepage setView={this.setView}/>
        : this.state.view.name === 'map'
            ? <Map setView={this.setView}/>
            : this.state.view.name === 'weather'
              ? <Weather setView={this.setView} markerInfo={this.state.view}/>
              : null
    return(
        <div>
            {changeView}
        </div>
    );
  }
}
