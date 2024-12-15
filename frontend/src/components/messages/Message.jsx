import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime.js';
import useConversation from '../../zustand/useConversation';

const Message = ({message}) => {

  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const formatedTime = extractTime(message.createdAt)
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePicture = fromMe ? authUser.profilePicture : selectedConversation?.profilePicture;
  const bubbleColor = fromMe ? 'bg-blue-500' : '';
  const shakeEffect = message.shakeEffect ? 'shake' : '';
  
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounder-full">
            <img src={profilePicture} alt="User avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white pb-2 ${bubbleColor} ${shakeEffect}`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formatedTime}</div>
    </div>
  )
}

export default Message
