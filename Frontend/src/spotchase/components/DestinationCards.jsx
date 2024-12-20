"use client"
import Image from 'next/image';
import React from 'react';
import { axios } from "axios";

const DestinationCards = ({ imageUrl, destination, tripDescription, mostLiked, leastLiked, budget, splurgeStatus, choiceHandler}) => {
   
  const sendData = (jsondesc) => {
    fetch("https://bgnhack24dub-643.nw.r.appspot.com/user_itin",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: jsondesc
         })
          .then((response) => response.json())
          .then((data) => {
              var newData = ConvertKeysToLowerCase(data);
              let firstChoice = data[0];
              choiceHandler(newData, false);
            });
    };

    const clickHandler = () => {
        choiceHandler(null, true);
        sendData(JSON.stringify({
            description: tripDescription,
            location: destination,
            budget: budget,
            likes: mostLiked
        }));
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-md"  style={{cursor: 'pointer'}} onClick={clickHandler}>
            <div className="relative h-48">
                <Image 
                    className="object-cover w-full h-full"
                    src={imageUrl} 
                    alt={`Trip to ${destination}`} 
                    layout="fill"
                />
            </div>
            <div className="p-4" >
                <h2 className="text-xl font-bold mb-2">Trip to {destination}</h2>
                <p className="text-gray-600 mb-4">{tripDescription}</p>
                <div className="space-y-1">
                    <p><span className="font-semibold">Most Liked:</span> {mostLiked}</p>
                    <p><span className="font-semibold">Least Liked:</span> {leastLiked}</p>
                    <p><span className="font-semibold">Budget:</span> ${budget} (Willing to splurge: {splurgeStatus})</p>
                </div>
            </div>
        </div>
    );
};

export default DestinationCards;


function ConvertKeysToLowerCase(obj) {
    if (Object.prototype.toString.apply(obj) !== '[object Array]' && Object.prototype.toString.apply(obj) !== '[object Object]') {
        return obj;
    }
    let output = {};
    for (let i in obj) {
        if (Object.prototype.toString.apply(obj[i]) === '[object Object]') {
           output[i.toLowerCase()] = ConvertKeysToLowerCase(obj[i]);
        } else if(Object.prototype.toString.apply(obj[i]) === '[object Array]'){
            output[i.toLowerCase()]=[];
            for (let j = 0; j < obj[i].length; j++) {
                output[i.toLowerCase()].push(ConvertKeysToLowerCase(obj[i][j]));
            }
        } else {
            output[i.toLowerCase()] = obj[i];
        }
    }
    return output;
};