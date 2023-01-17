import {setState, useState} from 'react'
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js';
//import debounce from 'lodash.debounce';
//import SaveButton from './Save';
import './Draft.css'
import { useEffect } from 'react';
//import { set } from 'lodash';
//import { useEffect } from 'react';
//import axios from 'axios';

function WritingApp() {
    const [editorState, setEditorState] = useState(
      () => EditorState.createEmpty())

    const editor = useRef(null)

    function focusEditor() {
      editor.current.focus()
    }

    useEffect(() => {
      focusEditor()
    }, [])

    const StyleButton = (props) => {
      let onClickButton = (event) => {
        event.preventDefault()
        props.onToggle(props.style)
      }
      return <button onMouseDown = {onClickButton}></button>
    }

    const Block_Types = [
      {label: 'H1', style: 'header-one'},
      {label: 'H2', style: 'header-two'},
      {label: 'H3', style: 'header-three'},
      {label: 'H4', style: 'header-four'},
      {label: 'H5', style: 'header-five'},
      {label: 'H6', style: 'header-six'},
      {label: 'Blockquote', style: 'blockquote'},
      {label: 'UL', style: 'unordered-list-item'},
      {label: 'OL', style: 'ordered-list-item'},
      {label: 'Code Block', style: 'code-block'}
    ]

    const BlockStyleControls = (props) => {
      return (
        <div>
          {Block_Types.map((type) =>(
            <StyleButton
              key={type.label}
              label={type.label}
              onToggle={props.onToggle}
              style={type.style}
              />
          ))}
        </div>
      )
    }

    const Inline_Styles = [
      {label: 'Bold', style:'BOLD'},
      {label: 'Italic', style:'ITALIC'},
      {label: 'Underline', style:'UNDERLINE'},
      {label: 'Monospace', style:'CODE'}
    ]

    const InlineStyleControls = (props) => {
      return (
        <div>
          {Inline_Styles.map((type) =>(
            <StyleButton
              key={type.label}
              label={type.label}
              onToggle={props.onToggle}
              style={type.style}
              />
          ))}
        </div>
      )
    }

    const onInlineClick = (event) => {
      let nextState = RichUtils.toggleInlineStyle(editorState, event)
      setEditorState(nextState)
    }

    return (
      <div className='editorContainer' onClick={focusEditor}>
        <div className='editors'>
          <BlockStyleControls onToggle={onBlockBlick}/>
          <InlineStyleControls onToggle={onInlineClick}/>
        </div>
        <div className='editors'>
          <Editor
            ref={editor}
            editorState={editorState}
            onChange={(editorState) => setEditorState(editorState)}
            />
        </div>
      </div>
    )
  }
  //   return <Editor editorState={editorState} onChange={setEditorState} />
  // }
  
  // ReactDOM.render(<WritingApp />, document.getElementById('container'))


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

export default WritingApp