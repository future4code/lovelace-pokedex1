import React from 'react'
import Router from './Route/Router'
import styled from 'styled-components'
import "./App.css";
import GlobalState from './global/GlobalState';

const Container = styled.div``

export default function App() {

  return (

    <GlobalState>
      <Router />
    </GlobalState>

  )

}
