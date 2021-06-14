import { useHistory } from 'react-router-dom'
import { useAuthState } from 'context'

import { PUBLIC_ROUTES } from 'config'

export const Dashboard = (): JSX.Element => {
  const history = useHistory()
  const authState = useAuthState()

  function handleLogOutClick() {
    authState.logOut()
  }

  function goToRoot() {
    history.push(PUBLIC_ROUTES.root.path)
  }

  function goToNonExistingPage() {
    history.push('/asdfasdf')
  }

  return (
    <div className="h-screen flex-col overflow-hidden bg-gray-100">
      <h1 className="text-3xl">Dashboard</h1>
      <h2 className="text-xl">Welcome {authState.user?.username}</h2>
      <div className="flex">
        <button className="bg-blue-500 p-3 mr-3" onClick={handleLogOutClick}>
          Log out
        </button>
        <button className="bg-blue-500 p-3 mr-3" onClick={goToRoot}>
          Go to login
        </button>
        <button className="bg-blue-500 p-3" onClick={goToNonExistingPage}>
          Non existing page
        </button>
      </div>
    </div>
  )
}
