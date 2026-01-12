import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import TranditionalWay from './components/TranditionalWay';
import TanstackWay from './components/TanstackWay';
import TanstackPostsDetails from './components/TanstackPostsDetails';
import TanstackPagination from './components/TanstackPagination';
import InfiniteScrollOnClick from './components/InfiniteScrollOnClick';
import InfiniteScroll from './components/InfiniteScroll';
import TanstackMutation from './components/TanstackMutation';

function App() {

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Traditional Way Posts</Link>
            </li>
            <li>
              <Link to="/rq-posts">Tanstack Way Posts</Link>
            </li>
            <li>
              <Link to="/paginated-fruits">Tanstack Pagination</Link>
            </li>
            <li>
              <Link to="/inifine-scroll-onclick">Infine scroll on click</Link>
            </li>
            <li>
              <Link to="/inifine-scroll">Infine scroll</Link>
            </li>
            <li>
              <Link to="/mutation">Mutation</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<TranditionalWay />} />
          <Route path='/rq-posts' element={<TanstackWay />} />
          <Route path='/rq-posts/:postId' element={<TanstackPostsDetails />} />
          <Route path='/paginated-fruits' element={<TanstackPagination />} />
          <Route path='/inifine-scroll-onclick' element={<InfiniteScrollOnClick />}/>
          <Route path='/inifine-scroll' element={<InfiniteScroll />}/>
          <Route path='/mutation' element={<TanstackMutation />}/>
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App;