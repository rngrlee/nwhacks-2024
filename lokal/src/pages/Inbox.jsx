import React, { useEffect, useState } from 'react';
import Messages from '../messages.json';

function Inbox() {
    return (
        <div>
            <h1>Inbox</h1>
            {
                Messages.map( record => {
                    return(
                        <div className="box">
                            <h4>{ record.sender }</h4>
                            <p>{ record.content }</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Inbox;
