function SaveButton({EditorState}) {
    
  const handleSave = function() {    
    let body = JSON.stringify(EditorState)
        console.log("save", body)
      }
    return ( 
        <button className='save-button' onClick={handleSave}>save</button>
     )
}

export default SaveButton;