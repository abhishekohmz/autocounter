import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Counter() {
    const [counter,setCounter]=useState(0);

    useEffect(()=>{
      const numbr=setInterval(()=>{
        setCounter(counter+1);

      },1500);
    return ()=>clearInterval(numbr);
    })
    function reset(){
      setCounter(0)
    }

  return (
    <div>
        <center>
        <Card style={{ width: '20rem',marginTop:'15%'}}>
      <Card.Body>
        <Card.Title>
          <h4>Automatic Counter</h4>
        </Card.Title>
        <Card.Text>
        Count: <b>{counter}</b> seconds
        </Card.Text>
        <button className='btn btn-danger' onClick={reset}>Reset</button>
      </Card.Body>
    </Card>
        <h1> </h1>
        

        </center>
    </div>
  )
}

export default Counter