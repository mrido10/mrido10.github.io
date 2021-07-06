import {Route, Switch, HashRouter} from 'react-router-dom'
import Home from './pages/home/home'
import About from './pages/about/about'
import NotFoundPage from './pages/notFound/notFound'

function App() {
  let route = [
    {link: '/', page: Home},
    {link: '/about', page: About},
    // {link: '/resume', page: Resume}
  ]

  return (
    <HashRouter>
      <Switch>
        {
          route.map(val => {
            return <Route path={val.link} exact component={val.page} />
          })
        }
        <Route component={NotFoundPage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
