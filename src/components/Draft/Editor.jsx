// import {setState, useState} from 'react'
// import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js';
// import debounce from 'lodash.debounce';
// import SaveButton from './Save';
// import './Draft.css'
// import { set } from 'lodash';
// import { useEffect } from 'react';
// import axios from 'axios';


// function WritingApp {
//     const [editorState, setEditorState] = useState({})
//     const content = window.localStorage.getItem('content')

//     useEffect(() => {
//       const getContent = async () => {
//         const res = await (content)
        
//       }
//     }) 
//     if (content) {
//       setEditorState = EditorState.createWithContent(convertFromRaw(JSON.parse(content)))
//     } else {
//       setEditorState = ''
//     }
//     console.log('content', EditorState)
//   }

//   onChange = (editorState) => {
//     const contentState = editorState.getCurrentContent()
//     this.saveContent(contentState)
//     this.setState({
//       editorState
//     })
//   }

//   componentDidMount() {
//     fetch('/content').then(val => val.json())
//     .then(rawContent => {
//       if (rawContent) {
//         this.setState({ editorState: EditorState.createWithContent(convertFromRaw(rawContent)) })
//       } else {
//         this.setState({ editorState: EditorState.createEmpty() })
//       }
//     })
//   }
  

//   handleKeyCommand = (command) => {
//     const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
//     if (newState) {
//       this.onChange(newState)
//       return 'handled'
//     } 
//     return 'not-handled'
//   }

//   onUnderlineClick = () => {
// 		this.onChange(
// 			RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
// 		)
// 	}

// 	onBoldClick = () => {
// 		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"))
// 	}

// 	onItalicClick = () => {
// 		this.onChange(
// 			RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
// 		)
// 	}

//   saveContent = debounce((content) => {
//     window.localStorage.setItem('content', JSON.stringify(convertToRaw(content)))
//   }, 1000)
  
//   render() {
//     if (!this.state.editorState) {
//       return (
//         <h3 className="loading">Loading...</h3>
//       )
//     }
//     return (
//     <div className='editorContainer'> 
//         <button onClick={this.onUnderlineClick}><u>U</u></button>
//         &nbsp;
// 				<button onClick={this.onBoldClick}>
// 					<b>B</b>
// 				</button>
//         &nbsp;
// 				<button onClick={this.onItalicClick}>
// 					<em>I</em>
// 				</button>
//       <div className='editors'>
//         <Editor editorState={this.state.editorState} handleKeyCommand={this.handleKeyCommand} onChange={this.onChange} />
//       </div>
//         <SaveButton />
//     </div> 
//     )
//   }
// }

//  export default WritingApp