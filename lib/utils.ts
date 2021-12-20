export async function fetchMyApi(apiEndpoint, options = {}) {
  const res = await fetch(process.env.NEXTAUTH_URL + '/api' + apiEndpoint, options)
  return await res.json()
}
