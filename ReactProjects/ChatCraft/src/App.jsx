import Platforms from './components/left/Platforms'
import UserSettings from './components/left/UserSettings'
import AdditionalSettings from './components/left/AdditionalSettings'
import Message from './components/left/Message'
import Export from './components/left/Export'

const App = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>

        <div className="flex h-auto border border-gray-300 rounded-lg shadow-xl max-w-sm">
          <div className="left-side flex-1 flex flex-col p-4">
            <h1 className="text-3xl font-bold mb-2.5">ChatCraft</h1>
            <p className="text-gray-600">Create realistic social media chat mockups</p>
            <Platforms />
            <UserSettings />
            <Message />
            <AdditionalSettings />
            <Export />
          </div>
          
        </div>
    </div>
  )
}

export default App