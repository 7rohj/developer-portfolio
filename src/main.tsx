import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><BrowserRouter><Layout><Routes><Route path="/" element={<Home/>}/><Route path="/projects/:slug" element={<ProjectDetail/>}/><Route path="*" element={<Home/>}/></Routes></Layout></BrowserRouter></React.StrictMode>
)
