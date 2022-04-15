export function pagin(data,page,nb) {
    let res = []
    data.slice(page*nb,(page+1)*nb).forEach(element => {
        res.push(element)
    })
    console.log(element)
    return res
}