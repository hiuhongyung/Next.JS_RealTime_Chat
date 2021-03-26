import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { useRouter } from "next/router";
import { auth } from "../firebase";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/Attachfile";

function ChatScreen() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  return (
    <Container>
      <Header>
        <Avatar />
        <HeaderInformation>
          <h3>Recipient Email</h3>
          <p>Last seen...</p>
        </HeaderInformation>
        <HeaderIcons>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
        </HeaderIcons>
      </Header>
    </Container>
  );
}

export default ChatScreen;

const Container = styled.div``;

const Header = styled.div`
    position: sticky;
    background: white;
    z-index: 100;
    top: 0;
    display: flex;
    flex-direction: row;
    padding: 11px;
    border-bottom: 1px solid whitesmoke;
    align-items: center;
`;

const HeaderInformation = styled.div`
margin-left: 15px;
flex: 1;
align-items: center;

> h3 {
    margin-bottom: 3px;
}

> p{
    font-size: 14px;
    color: gray;
}
`;

const HeaderIcons = styled.div``;
