import React from 'react';
import PropTypes from 'prop-types';

export default class Sources extends React.Component {

    render() {
        return (
            <div>
                {
                    <select onChange={this.props.onSelectValue}>
                        {this.props.data}
                    </select>
                }
            </div>
        );
    }

}

//propTypes описание типов данных, которые должны прийти
Sources.propTypes = {
    //data это проп-атрибут компонента Source(как classname у div)
    data: PropTypes.array,
    //создаем переменную/ключ для перекидывания значения из sources в app (.func.isRequired - функция.обязательный элемент)
    onSelectValue: PropTypes.func.isRequired
};

//установка дефолтных значений для propTypes
Sources.defaultProps = {
    data: []
}