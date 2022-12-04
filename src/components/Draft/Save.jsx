function SaveButton({EditorState}) {
    
  const handleSave = function() {
        let body = EditorState
        JSON.stringify(EditorState)
        console.log(body)
      }

    return ( 
        <button className='save-button' onClick={handleSave}>save</button>
     );
}

export default SaveButton;