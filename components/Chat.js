import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import getRecipientEmail from "../utils/getRecipientEmail";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "../firebase";
import {useCollection} from "react-firebase-hooks/firestore";

function Chat({ id, users }) {
  const [user] = useAuthState(auth);
  const [recipientSnapshot] = useCollection(db.collection('users').where('email', '==', getRecipientEmail(users,user)));
  const recipient = recipientSnapshot?.docs?.[0]?.data();

  const recipientEmail = getRecipientEmail(users, user);

  return (
    <Container>
      <UserAvatar />
      <p>{recipientEmail}</p>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word; //prevent super long email

  :hover {
    background-color: #edffec;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
