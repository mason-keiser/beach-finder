import React from 'react';
import Homepage from './homepage';
import Map from './map';

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
    };
    this.setView = this.setView.bind(this);
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
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
        ? <Homepage/>
        : this.state.view.name === 'map'
            ? <Map/>
            : null
    return(
        <div>
            {changeView}
        </div>
    );
  }
}
