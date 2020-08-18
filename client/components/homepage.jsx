import React from 'react';

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    

    render() {
        return (
            <div className='background'>
                <header>Beach Weather</header>
                    <div className='logo'>
                        <img src="/images/skull-surfer.jpg" alt=""/>
                    </div>
                <div className='locationInput' onClick={() => this.props.setView('map', {})}>Find General Location</div>
                <div className='hint'>(Hint... Click on marker to display weather)</div>
            </div>
        )
    }
}