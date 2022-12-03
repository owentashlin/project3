import React from 'react'
import {Editor, EditorState, RichUtils} from 'draft-js';
import './Editor.css'

class WritingApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
    }
  }

  onChange = (editorState) => {
    this.setState({
      editorState
    })
  }

  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
    if (newState) {
      this.onChange(newState)
      return 'handled'
    } 
    return 'not-handled'
  }

  onUnderlineClick = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
		)
	}

	onBoldClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"))
	}

	onItalicClick = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
		)
	}
  
  // handleSave = function() {
  //   let body = EditorState
  //   JSON.stringify(EditorState)
  //   console.log(body)
  // }

  render() {
    return (
    <div className='editorContainer'> 
        <button onClick={this.onUnderlineClick}><u>U</u></button>
        &nbsp;
				<button onClick={this.onBoldClick}>
					<b>B</b>
				</button>
        &nbsp;
				<button onClick={this.onItalicClick}>
					<em>I</em>
				</button>
      <div className='editors'>
        <Editor editorState={this.state.editorState} handleKeyCommand={this.handleKeyCommand} onChange={this.onChange} />
      </div>
      {/* <button className='save-button' onClick={handleSave}>save</button> */}
    </div> 
    )
  }
}

 export default WritingApp