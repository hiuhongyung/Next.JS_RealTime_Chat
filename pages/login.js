import styled from "styled-components";
import Head from "next/head";
import {Button} from "@material-ui/core";
import {auth, provider} from "../firebase";

function Login() {
  const signin = () => {
    auth.signInWithPopup(provider).catch(alert); //provider is the google authentication
  };
  return (
    <div>
      <Container>
          <Head>
          <title>Login</title>
          </Head>

          <LoginContainer>
            <Logo src="https://upload.wikimedia.org/wikipedia/en/thumb/8/87/CUHK.svg/1200px-CUHK.svg.png"/> {/* Next.JS is also better for the SEO*/}
            <Button variant="outlined" onClick={signin}>Sign in with Google</Button>
          </LoginContainer>
        
      </Container>
    </div>
  );
}

export default Login;

const Container = styled.div`
display: grid;
place-items: center;
height: 100vh;
background-color: whitesmoke;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px;
    align-items: center;
    background-color: white;
    border: 10px;
    box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.6);
`;

const Logo = styled.img`
height: 300px;
width: 400px;
margin-bottom: 50px;
`;