export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function resolver(response: Response) {
  return new Promise(async (resolve, reject) => {
    if (!response.ok) return reject(response)
    return resolve(response)
  })
}
