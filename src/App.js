import './App.css';
import Form from './componanat/Form';
import Table from './componanat/Table';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Table />} />
          <Route index element={<Table />} />
          <Route path='form' element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  {/* <Form></Form> */}
  {/* <Table></Table> */}
    </>
  );
}

export default App;
