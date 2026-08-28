import './ReplyComposer.scss'
import { useState } from 'react'






function ReplyComposer() {
    const [reply, setReply] = useState('')

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
    }

    return (
        <form className="reply-composer" onSubmit={handleSubmit}>
            <textarea className="reply-composer__textarea" value={reply} onChange={(event) => setReply(event.target.value)}></textarea>
            <button type='submit'>Send reply</button>
        </form>
    )
}


export default ReplyComposer
