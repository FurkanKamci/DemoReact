import React from 'react'
import { Dropdown,Image, Menu } from 'semantic-ui-react'

                        /*{signOut,XX,XX} veya props->props.signOut */
export default function SignedIn({signOut}) {  
  return (

    <div>
        <Menu.Item>

            <Image avatar spaced="right" src="http://i.stack.imgur.com/Dj7eP.jpg"></Image>

            <Dropdown pointing="top" text="Furkan">

                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"></Dropdown.Item>
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"></Dropdown.Item>
                </Dropdown.Menu>

            </Dropdown>

        </Menu.Item>
    </div>
  )
}
