import React from 'react'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'


const PythonREPL = ({children}): JSX.Element => {
  return (
    <>
      <Tabs
        defaultValue="code"
        values={[
          {label: 'Code', value: 'code'},
          {label: 'Output', value: 'output'},
        ]}
      >
        {children}
      </Tabs>
    </>
  )
}

const Code = ({
  children,
}): JSX.Element => {
  return (
    <>
      <TabItem value="code">
        {children}
      </TabItem>
    </>
  )
}

const Text = ({
  children,
}): JSX.Element => {
  return (
    <>
      <TabItem value="output">
        {children}
      </TabItem>
    </>
  )
}

export { PythonREPL, Code, Text }
