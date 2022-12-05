import React from 'react'
import {Editor, EditorState, RichUtils} from 'draft-js';
import SaveButton from './Save';
import './Draft.css'


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
        <SaveButton />
    </div> 
    )
  }
}

 export default WritingApp