import React from 'react'
import PropTypes from 'prop-types';
import ListElement from './ListElement';

const UnorderedList = ({ arrayOfUnorderedElements }) => {
    const getColor = arrayOfUnorderedElements => (
        arrayOfUnorderedElements.map( color => <ListElement key={color} color={color}/>)
    )
    return (
        <div>
            <ul>
                {getColor(arrayOfUnorderedElements)}
            </ul>
        </div>
    )
}

UnorderedList.propTypes = {
    props: PropTypes.array.isRequired,
}
export default UnorderedList;
