import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import { UserButton } from '@clerk/clerk-react'
function Header() {
    const {user, isSignedIn, isLoaded} = useUser()
    
    if (!isLoaded) {
        return (
            <div className='p-3 px-5 flex justify-between shadow-md'>
                <img src='/logo.svg' width={100} height={100} />
                <div>Loading...</div>
            </div>
        )
    }
    
    return (
        <div className='p-3 px-5 flex justify-between shadow-md'>
            <img src='/logo.svg' width={100} height={100} />
        
            {isSignedIn ? 
                <div className='flex items-center gap-2'>
                    <Link to='/dashboard'>
                        <Button variant='outline'>dashboard</Button>
                    </Link>
                    <UserButton />
                </div>
            : 
                <Link to='/auth/sign-in'>
                    <Button>Get Started</Button>
                </Link>
            }

    </div>

  )
}

export default Header