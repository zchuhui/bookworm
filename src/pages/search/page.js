import Search from './components/Search'
import List from './components/List'
import Footer from '../../layouts/Footer'

export default () => {
  return (
    <div>
      <Search />
      <List />
      <Footer isFixed={false} />
    </div>
  )
}
