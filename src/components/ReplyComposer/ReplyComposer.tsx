import './ReplyComposer.scss'
import { useState } from 'react'


function ReplyComposer() {
    const [reply, setReply] = useState('')

    return (
        <form className="reply-composer">
            <textarea className="reply-composer__textarea" value={reply} onChange={(event) => setReply(event.target.value)}></textarea>
        </form>
    )
}


export default ReplyComposer
