import React, { useState } from "react";


function App() : JSX.Element {
  const [number, changeNumber] = useState<number>(0);
  const onClick = ():void => {
    let _number : number = number + 1;
    changeNumber(_number);
  }
  return (
    <div>
      <input type="number" value={number} />
      <button onClick={ onClick }>Increase on dev</button>
    </div>
  );
}

export default App;
