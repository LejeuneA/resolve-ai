import './ReplyComposer.scss'
import { useState } from 'react'
import type { SubmitEvent } from 'react'
import type { ReplyComposerProps } from './ReplyComposer.types'






function ReplyComposer({ onSubmitReply }: ReplyComposerProps) {
    const [reply, setReply] = useState('')

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault()

        if (reply.trim().length === 0) {
            return
        }
    }

    return (
        <form className="reply-composer" onSubmit={handleSubmit}>
            <textarea className="reply-composer__textarea" value={reply} onChange={(event) => setReply(event.target.value)}></textarea>
            <div className="reply-composer__footer">
                <button type='submit'>Send reply</button>
            </div>
        </form>
    )
}


export default ReplyComposer
