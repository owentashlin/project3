import WritingApp from '../../components/Draft/Editor';
import TextPrompt from '../../components/Prompts/TextPrompt';
import './WritersCorner.css'

function WritersCornerPage() {
    return ( 
        <>
        <h1>The Writer's Corner</h1>
        <WritingApp />
        <TextPrompt />
        </>
     )
}

export default WritersCornerPage;