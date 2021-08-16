import React from 'react';

function TopContent(){
    function handleScroll(){
        window.scroll({
            top:document.body.offsetHeight,
            left:0,
            behavior:'smooth',
        });
    }
    return(
        <button type="button" onClick={handleScroll}>Start</button>

    );
}
export default TopContent;