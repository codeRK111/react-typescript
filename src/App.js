import React, { useState } from "react";

function App() {
  const [number, changeNumber] = useState(0);
  const onClick = e => {
    let _number = number + 1;
    changeNumber(_number);
  }
  return (
    <div>
      <input type="number" value={number} />
      <button onClick={ onClick }>Increase</button>
    </div>
  );
}

export default App;
