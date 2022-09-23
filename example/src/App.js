import React from 'react'

import { useMyHook } from 'html-to-image'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
