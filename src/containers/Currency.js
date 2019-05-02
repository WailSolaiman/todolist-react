import React from 'react';

class Currency extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currency: '€'
        }
    }

    changeCurrency = () => {
        const currency = this.state.currency === '€' ? '$' : '€'
        this.setState({ currency })
    } 

    render() { 
        return (
            <>
                <Output currency={ this.state.currency } />
                <Changer changeCurrency={ this.changeCurrency } />
            </>
        );
    }
}

const Output = props => {
    return (
        <p>Currency: {props.currency}</p>
    )
}

const changerStyle = {
    color: '#fff',
    backgroundColor: '#007bff',
    borderColor: '#007bff'
}

const Changer = props => {
    return (
        <button style={changerStyle} onClick={props.changeCurrency}>Change Currency</button>
    )
}

export default Currency;