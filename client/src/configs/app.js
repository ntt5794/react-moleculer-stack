import logo from '../assets/brand/mascot.png'

export const appName = process.env.REACT_APP_APP_NAME || 'Runner'
export const appLogo = logo
export const appDomain = process.env.REACT_APP_APP_DOMAIN || 'http://localhost:3001'
export const privateDomainApi = process.env.REACT_APP_PRIVATE_DOMAIN_API || 'http://localhost:3000'
export const storageType = process.env.REACT_APP_STORAGE_TYPE || 'local';
export const mockUp = process.env.REACT_APP_MOCK || 'false';