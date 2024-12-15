import Conversation from './Conversation';
import useGetConversations from '../../../hooks/useGetConversations';

const Conversations = () => {

  const { loading, conversations } = useGetConversations();
  
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, index) => {
        return (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIdx={conversations.length - 1 === index}
          />
        );
      })}

        {loading? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Conversations
