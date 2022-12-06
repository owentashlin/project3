function SaveButton({EditorState}) {
    
  const handleSave = function(EditorState) {    
    let body = JSON.stringify(EditorState)
        console.log(body)
      }
    return ( 
        <button className='save-button' onClick={handleSave}>save</button>
     )
}

export default SaveButton;