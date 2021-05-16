import SectionMessage from '@atlaskit/section-message';
import React from 'react';



export default function HelloWorld() {
  const [excitementLevel, setExcitementLevel] = React.useState(0);
  return <SectionMessage
      title="hello"
      actions={[
        {
          key: '1',
          onClick: function test(){
            setExcitementLevel(excitementLevel + 1);
            API_test();
            console.log("text");
          },
          text: 'test',
        }
      ]}
    >
      <p>
        Congratulations! You have successfully created an Atlassian Connect app using the <a href={'https://bitbucket.org/atlassian/atlassian-connect-express'}>atlassian-connect-express</a> client library.
      </p>
    </SectionMessage>;
}
