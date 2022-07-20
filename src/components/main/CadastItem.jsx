import React from 'react';

const CadastItem = (props) => {
    return (
        <div>
            <div>{props.item.addressNotes}</div>
        </div>
    );
};

export default CadastItem;