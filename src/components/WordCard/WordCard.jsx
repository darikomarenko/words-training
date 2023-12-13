import React from 'react';
import './wordcard.css';

const WordCard = ({id, english, transcription, russian, tags}) => {
    return (
            <tbody>
                <tr>
                    <td>{id}</td>
                    <td>{english}</td>
                    <td>{transcription}</td>
                    <td>{russian}</td>
                    <td>{tags}</td>
                    <td><button className='change-button'>Изменить</button><button className='delete-button'>Удалить</button></td>
                </tr>
            </tbody>
    );
};

export default WordCard;