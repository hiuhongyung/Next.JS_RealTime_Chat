import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';
import {auth} from "../firebase";
import moment from 'moment';

function Message({user,message}) {
    const [userLoggedIn] = useAuthState(auth);
    const TypeOfMessage = user === userLoggedIn.email ? Sender : Reciever;
    return (
        <Container>
            <TypeOfMessage>{message.message}
                <TimeStamp>
                {message.timestamp ? moment(message.timestamp).format('LT') : "..." }
                </TimeStamp>    
            </TypeOfMessage>
        </Container>
    )
}

export default Message

const Container = styled.div``;

const MessageElement = styled.p`
    width: fit-content;
    padding: 20px;
    border-radius: 10px;
    min-width: 60px;
    padding-bottom: 22px;
    position: relative;
    text-align: right;
`;

const Sender = styled(MessageElement)`
margin-left: auto;
background-color: #dcf8c6;
`

const Reciever = styled(MessageElement)`
   background-color: whitesmoke;
   text-align: left;
`

const TimeStamp = styled.div`
    font-size: 10px;
`;