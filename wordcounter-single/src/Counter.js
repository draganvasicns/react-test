import React from 'react';

function Counter({
  count
}) {
  return (<p className = "mb2" >
    Word  count:
    <output id="count">
      {count}
    </output>
  </p> );
}

export default Counter;
