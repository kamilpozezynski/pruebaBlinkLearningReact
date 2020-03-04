import React from 'react'
import PropTypes from 'prop-types';

const ListElement = ({ color }) => {
    return (
        <li>{color}</li>
    )
}

ListElement.propTypes = {
    color: PropTypes.string.isRequired,
}
export default ListElement;
