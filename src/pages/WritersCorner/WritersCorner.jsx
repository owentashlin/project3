import WritingApp from '../../components/Draft/Editor'
import TextPrompt from '../../components/Prompts/TextPrompt'
import PictPrompt from '../../components/Prompts/PicPrompt'
import './WritersCorner.css'

function WritersCornerPage() {
    return ( 
        <>
        <h1>The Writer's Corner</h1>
        <PictPrompt />
        <TextPrompt />
        {/* <WritingApp /> */}
        </>
     )
}

export default WritersCornerPage;