import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const CodeIO = ({code, io}) => {
  return (
    <Tabs
      defaultValue="code"
      values={[
      {label: 'Code', value: 'code'},
      {label: 'Input / Output', value: 'io'},
    ]}
    >
      <TabItem value="code"><CodeBlock className="language-cpp">{code}</CodeBlock></TabItem>
      <TabItem value="io"><CodeBlock className="language-cpp">{io}</CodeBlock></TabItem>
    </Tabs>
  );
};

export default CodeIO;
