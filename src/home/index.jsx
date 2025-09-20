import React from 'react'
import { UserButton } from '@clerk/clerk-react'
import Header from '../components/ui/custom/Header'

function Home() {
  return (
    <div>
      <Header />
      <div style={{ padding: '20px' }}>
        <h1>Welcome to AI Resume Builder</h1>
        <p>Create professional resumes with AI assistance</p>
        <p>Landing screen</p>
      </div>
    </div>
  )
}

export default Home