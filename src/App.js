import List from "./List";
import data from "./data";
import { useState } from "react";

function App() {
  const [pepole, setPepole] = useState(data);

  const reloadAllItem = () => {
    setPepole(data)
  };

  const removeItem = (id) =>{
    setPepole(oldValue => {
      return oldValue.filter(value => value.id !==id)
    })
  };

  return (
    <section>
      <div className="container">
       <h2 style = {{color:'var(--bg-blue)'}}>Prossimi Incontri</h2>
       <div className="pepole-list">
        <List data={pepole} removeItem={removeItem}/>
       </div>
        <div className="btn-group">
          <button className="btn btn-reset" onClick={reloadAllItem}>Reload</button>
          <button className="btn btn-delete" onClick={()=>setPepole([])}>Delete</button>
        </div>
      </div>
    </section>
  );
   
}

export default App;