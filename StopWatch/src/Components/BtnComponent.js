import React from 'react';

function BtnComponent({start, stop, reset, resume}) {
  return (
      <div>
            <button className="button-62"
                      onClick={start}>Start</button> 
            
            <button className="button-62"
                          onClick={stop}>Stop</button>

            <button className="button-62"
                          onClick={reset}>Reset</button>
               
            <button className="button-62"
                          onClick={resume}>Wait</button>
      </div>
  );
}

export default BtnComponent;
