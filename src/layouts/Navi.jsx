import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(true) /* Başlangıçta aut değil. */

  const history = useHistory()
  

  function handleSignOut(params) {
    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSignIn(params) {
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>

          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">

            <CartSummary></CartSummary>
            {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1" /> : <SignedOut signIn={handleSignIn} />}

          </Menu.Menu>

        </Container>
      </Menu>
    </div>
  );
}
