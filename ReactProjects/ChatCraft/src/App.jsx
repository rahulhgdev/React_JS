import Platforms from './components/left/Platforms'
import UserSettings from './components/left/UserSettings'
import AdditionalSettings from './components/left/AdditionalSettings'
import Message from './components/left/Message'
import Export from './components/left/Export'

const App = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>

        <div className="flex h-[300px] border border-gray-300 rounded-lg shadow-xl">
          <div className="left-side flex-1 flex flex-col p-4">
            <h1 className="text-3xl font-bold">ChatCraft</h1>
            <p className="text-gray-600">Create realistic social media chat mockups</p>
            <Platforms />
            <UserSettings />
            <AdditionalSettings />
            <Message />
            <Export />
          </div>
          
        </div>
    </div>
  )
}

export default App