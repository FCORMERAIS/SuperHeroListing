async function GetDataSpetial(type, id) {
    try {
        var hero = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/' + type + '/' + id.toString() + '.json')
        return [id, await hero.json()]
    } catch {
        return null
    }
}

export async function DataPowerstats() {
    let PromiseList = []
    let nb = 800
    for (let i = 0; i < nb; i++) {
        PromiseList.push(GetDataSpetial("powerstats", i + 1))
    }
    return await Promise.all(PromiseList).then(function(values) {
        return values
    })
}

export async function DataAppearance() {
    let nb = 800
    let PromiseList = []
    for (let i = 0; i < nb; i++) {
        PromiseList.push(GetDataSpetial("appearance", i + 1))
    }
    return await Promise.all(PromiseList).then(function(values) {
        return values
    })
}

export async function DataBiography() {
    let nb = 563
    let PromiseList = []
    for (let i = 0; i < nb; i++) {
        PromiseList.push(GetDataSpetial("biography", i + 1))
    }
    return await Promise.all(PromiseList).then(function(values) {
        return values
    })
}