
const url = (root, user, endpoint) => {
    return `${root}/api/${user}/${endpoint}`
}

const common = {
    url
}

export default common