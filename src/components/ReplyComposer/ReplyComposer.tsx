import './ReplyComposer.scss'
import { useState } from 'react'


function ReplyComposer() {
    const [reply, setReply] = useState('')

    return (
        <textarea className="reply-composer__textarea" value={reply} onChange={(event) => setReply(event.target.value)}></textarea>
    )
}


export default ReplyComposer
