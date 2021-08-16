import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'
function TopContent(){
    function handleScroll(){
        window.scroll({
            top:document.body.offsetHeight,
            left:0,
            behavior:'smooth',
        });
    }
    return(
        <div className="content">
            <h3>나만의 포토폴리오를 쉽게 만들어보세요 !</h3>
            <Button variant="secondary" size="lg" active onClick={handleScroll}>Start</Button>
        </div>

    );
}
export default TopContent;