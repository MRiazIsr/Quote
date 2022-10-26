import React, { useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function App() {

  const [quote, setQuote] = useState([]);
  const [symbol = false, setSybol] = useState([]);

  const submitForm = async (event) => {
    event.preventDefault();

    try{
      const response = await callBackendAPI(event.target.symbol.value);

      setQuote(response);

      console.log(quote);

    } catch(e) {
      setQuote('');

    }
  }
  const callBackendAPI = async (symbol) => {
    
    const config = {
      method: 'get',
      url: '/coin-market-cap/latest/quotes/get?symbol=' + symbol,
    }  

    const response = await axios(config);
    console.log('test')
    if (response.status !== 200) {
      
    }
    return response;
  };

  return (
      
      
    
      <Form onSubmit={submitForm} className='center'>
          <Row className="col-md-7 align-items-center shadow p-3 bg-white rounded">
            <Form.Label className="align-items-center center-header">Crypto Quotes</Form.Label>
          
            <Col sm={3} className="my-1">
              <Form.Control
                type="text"
                name="symbol"
                defaultValue=""
                placeholder="Symbol"
            />
            </Col>
            <Col>
              <div>
                USD PRICE: {quote.data !== undefined ? quote.data.price : '' }
              </div>

            </Col>
            
            <Button type="submit" className="btn btn-primary" name="getQuote"> Get Quote </Button>
            

          </Row> 
      </Form>
  );
  
}


export default App;
