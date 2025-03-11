import Note from './Note'

const Notes = ({notes, showImportat, toggleImportance}) => {
    if(showImportat){
        return(
            <ul>
                {notes.filter(note => note.important).map(note => <Note id={note.id} important={note.important} toggleImportance={() => toggleImportance(note.id)} content={note.content}/>)}
            </ul>
        )
    }else{
        return(
            <ul>
                {notes.map( note => <Note key={note.id} id={note.id} important={note.important} toggleImportance={toggleImportance} content={note.content}/>)}
            </ul>
        )
    }
}

export default Notes