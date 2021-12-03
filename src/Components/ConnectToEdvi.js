import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';


export default function ConnectToEdvi() {
 
const [ authorizationCode, setAuthorizationCode ] = useState('')

  useEffect(() => {
    window.addEventListener('message', function (e) {
      console.log('Catched Event', e.data);
      setAuthorizationCode(e.data.code)
    });
  }, []);

  const url =
    'https://073a-122-180-181-53.ngrok.io/auth/login?client_id=bb10eaa823f02f68ad1788fbfd514023&redirect_uri=https://073a-122-180-181-53.ngrok.io/&scopes=batch:read,batch:write';

  return (
    <div>
      
      
    {authorizationCode !== '' ? (

      <>
      <h2> Hello, you are successfully connected to edvi</h2>
      <h2> Your Authorization Code is {authorizationCode}</h2>
      
      </>

    ) : (
      <Button
        variant="outlined"
        onClick={() => {
          window.open(url);
        }}
        disabled={authorizationCode !== ''}
      >
        Connect To Edvi
      </Button>
    )} 
      
      {/* </Link> */}
    </div>
  );
}


