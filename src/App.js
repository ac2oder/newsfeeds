import React from 'react';
import PropTypes from 'prop-types';
import Sources from './Sources';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            selectedValue: '',
            sources: []

        };
    }

    handleSelectValue(event) {
        console.log(this);
        this.setState({
            selectedValue: event.target.value
        });
    }

    render() {
        const options = this.state.sources.map(function(source, i) {

            return (
                    <option value={source.name} key={i}>
                            {source.name}
                    </option>
            );
        });

        return (
            <div>
                {
                    //если длинна больше 0 мы ресуем компонент, если нет ничего(null)
                    this.state.sources.length > 0 ?
                    <Sources data={options} onSelectValue={this.handleSelectValue.bind(this)} /> : null
                }
            </div>
        );
    }

    componentDidMount() {
        fetch('https://newsapi.org/v2/sources', {
            method: 'GET',
            headers: {
                'X-Api-Key': '394c77fa5f184750944eca00008c1199',
            },
            mode: 'cors',
            cache: 'default',
        }).then(
            (response) => {
            response.json().then((data) => {
                console.log(data);
                this.setState({
                    sources: data.sources
                })
            });
        });
    }
}