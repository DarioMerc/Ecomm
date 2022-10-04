import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Container} from 'react-bootstrap';

function App() {
  return (
    <>
    <Header/>
    <main className="py-3">
      <Container>
      <h1>Hello</h1>
      </Container>
    </main>
    <Footer/>
    </>
  );
}

export default App;
