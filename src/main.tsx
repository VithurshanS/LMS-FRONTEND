import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from 'react-oidc-context';

const oidcConfig = {
  authority: 'http://localhost:8080/realms/ironone',
  client_id: 'lms-iam',
  client_secret: 'PBUhwq4Cy287na98LZ3JZIHhQR2Ui6VI',
  redirect_uri: window.location.origin,
  response_type: 'code',
  scope: 'openid profile email',
  onSigninCallback: () => {
    window.history.replaceState({}, document.title, window.location.pathname);
  }
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthProvider {...oidcConfig}>
        <App />
      </AuthProvider>
  </StrictMode>,
)
