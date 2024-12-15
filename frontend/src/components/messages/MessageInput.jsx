import { MdSend } from "react-icons/md";
import useSendMessage from '../../hooks/useSendMessage';
import { useState } from 'react';

const MessageInput = () => {

    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!message.trim()) return;

        await sendMessage(message);
        setMessage('');
    }

    const { sendMessage, loading } = useSendMessage();

    return (
        <form  onSubmit={handleSubmit} className="px-4 my-3">
            <div className="relative w-full">
                    <input type="text"
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white pr-10"
                    placeholder="Send a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3">
                        {loading ? <div className="loading loading-spinner"></div> : <MdSend />}
                    </button>
            </div>
        </form>
    )
}

export default MessageInput
