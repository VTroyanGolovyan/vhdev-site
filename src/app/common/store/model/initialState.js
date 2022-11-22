let initToken = ''
let initName = ''
if (localStorage.getItem('token') && localStorage.getItem('name')) {
  initToken = localStorage.getItem('token')
  initName = localStorage.getItem('name')
}

export const initialState = () => ({
    data: {
      token: initToken,
      name: initName
    }
})
