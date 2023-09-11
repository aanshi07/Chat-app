import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
import PropTypes from 'prop-types';

const ChatsPage = (props) => {
    const ChatProps = useMultiChatLogic(
    '67c03459-056d-4372-8a34-1a68bdb9ba32', 
    props.user.username, 
    props.user.secret
    );
    return ( 
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...ChatProps} />
        <MultiChatWindow {...ChatProps} style={{height: '100%'}} />
    </div>
    )
}

ChatsPage.propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      secret: PropTypes.string.isRequired,
    }).isRequired,
  };
  

export default ChatsPage;