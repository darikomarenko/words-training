import React from 'react';
import WordCard from '../WordCard/WordCard';
import './wordslist.css';

const WordsList = ({data}) => {
    return (
        <div className="table">
            <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>English</th>
                <th>Transcription</th>
                <th>Russian</th>
                <th>Level</th>
                <th>Action</th>
            </tr>
            </thead>
            <tr className="input">
                <th>***</th>
                <th><input type=""></input></th>
                <th><input type=""></input></th>
                <th><input type=""></input></th>
                <th><input type=""></input></th>
                <th><button className='addword-button'>Добавить слово</button></th>
            </tr>
        {data.map((wordslist, index) => (
        <WordCard key={index} {...wordslist}/>
        ))}
        </table>
        </div>
    );
};

export default WordsList;