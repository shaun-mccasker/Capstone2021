import SectionMessage from '@atlaskit/section-message';
import React from 'react';

function API_test(){
  const fetch = require('node-fetch');

fetch('https://your-domain.atlassian.com/rest/api/3/project/search', {
  method: 'GET',
  headers: {
    'Authorization': `Basic ${Buffer.from(
      'email@example.com:<api_token>'
    ).toString('base64')}`,
    'Accept': 'application/json'
  }
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));
}

export default function HelloWorld() {
  const [excitementLevel, setExcitementLevel] = React.useState(0);
  return <SectionMessage
      title={`Hello, world${excitementLevel ? new Array(excitementLevel).fill('!').join('') : '.'}`}
      actions={[
        {
          key: '1',
          href: 'https://atlassian.design/components/',
          text: 'Browse more components to add to your app',
        },
        {
          key: '2',
          onClick: function test(){
            setExcitementLevel(excitementLevel + 1);
            API_test();
            console.log("text")
          },
          text: 'Get excited!',
        }
      ]}
    >
      <p>
        Congratulations! You have successfully created an Atlassian Connect app using the <a href={'https://bitbucket.org/atlassian/atlassian-connect-express'}>atlassian-connect-express</a> client library.
      </p>
    </SectionMessage>;
}
