import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const initialContent = JSON.parse(document.getElementById('initial-content')?.textContent || 'null')
const app = <StrictMode><App initialContent={initialContent} /></StrictMode>
if (root.dataset.prerendered) hydrateRoot(root, app)
else createRoot(root).render(app)
