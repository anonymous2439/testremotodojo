
const env = window.location.hostname
const keys = () => {
  let dev = 'localhost'
  let prod = 'www.remotodojo.com'
  let staging = 'develop.d3vi6ou6h4yqde.amplifyapp.com'

  return env === dev ? {

    siteKey: '6LctwZAdAAAAAGwD2WLOHe3zFO4HeripElbL9SNv',
    secretKey: '6LctwZAdAAAAACxNDYkrkf3ZVnAlW7x3xN8r6fML'

  } : env === prod ? {

    siteKey: '6LeFSc0cAAAAAJ_LjL5zWxIreOc3ondcF4E0eJiC',
    secretKey: '6LeFSc0cAAAAAC2Y2zWjudIEAwu9wqSLB4Z4s7Tu'

  } : env === staging ? {

    siteKey: '6Lc-w5AdAAAAADVd4R6114cOk6rh4ezqqmdyfRRU',
    secretKey: '6Lc-w5AdAAAAAF7L4XfFEJ8NDL7MykqzyDjKKpr5'

  } : { siteKey: '', secretKey: '' }
}

export const siteKey: string = keys().siteKey
export const secretKey: string = keys().secretKey