import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Home from './pages/home/home'
import Profile from './pages/profile/profile'
import Resume from './pages/resume/resume'
import NotFoundPage from './pages/notFound/notFound'

function App() {
  let route = [
    {link: '/', page: Home},
    {link: '/profile', page: Profile},
    {link: '/resume', page: Resume}
  ]

  return (
    <BrowserRouter>
      <Switch>
        {
          route.map(val => {
            return <Route path={val.link} exact component={val.page} />
          })
        }
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
