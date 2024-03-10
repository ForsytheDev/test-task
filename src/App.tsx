import React from 'react'

import { Home } from './pages/Home'

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="container">
        <main className="main">
          <Home />
        </main>
      </div>
    </div>
  )
}

export default App
