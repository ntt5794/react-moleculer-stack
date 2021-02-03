function mockRequest (method, url) {
  const req = `${method.toUpperCase()} ${url}`
  switch (req) {
    case 'POST auth/token':
      return { ok: true, data: { accessToken: '', refreshToken: '' } }
    case 'GET auth/profile':
      return { ok: true, data: { username: 'example', displayName: 'N/A', uid: 123 } }
    case 'xx':
      return {}
    default:
      return { ok: false, msg: 'Something error!' }
  }
}

export default mockRequest
