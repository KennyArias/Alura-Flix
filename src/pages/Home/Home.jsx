import styled from 'styled-components'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Categories from '../../components/Categories'
import Footer from '../../components/Footer'
import GlobalStyles from '../../components/GlobalStyles'
import { useContext } from 'react'
import { CategoryContext } from '../../Context/Context'


export const Background = styled.main`
    background: #262626;
    width: 100%;
    min-height: 100vh;
`

const Home = () => {
  
  const { categories } = useContext(CategoryContext);
  
  return (
    <Background>
      <GlobalStyles />
      
        <Header />
        <Banner />
        {categories.map( (category => <Categories
          data= {category}
          key={category.title} />))
        }
        <Footer />
      
    </Background>
  );
}

export default Home;
