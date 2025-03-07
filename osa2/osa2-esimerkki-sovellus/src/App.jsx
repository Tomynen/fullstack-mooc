import "./App.css"

const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>

      <h1>Notes with Map, long form tässä saa console logia tai jotain muuta käsittelyä mukaan, if else sisässä</h1>
      <ul>
        {notes.map(note => {
          console.log("tidi note: ",note)
          if(note.important){
            console.log("Important note")
            return(<li className="important" key={note.id}>{note.content}</li>) 
          }
          else{
            return(
              <li key={note.id}>{note.content}</li>
            )
          }
        })}
      </ul>

      <h1>Notes with map, lyhempi versio conditional render</h1>
      <ul>
        {notes.map(note => <li className={note.important ? "important" : ""} key={note.id}>{note.content}</li>)}
      </ul>

      <h1>Notes with map, shortform tässä vaa ite toimitus</h1>
      <ul>
        {notes.map(note => <li key={note.id}>{note.content}</li>)}
      </ul>
    </div>
  )
}

export default App