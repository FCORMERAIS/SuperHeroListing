import * as DataFilter from './getDataForFilter.js';
import * as Filter from './mothodeFilter.js';

//let prefuousefilter = ""

console.log(await filterByPowerstat("Int"))

export async function filterByPowerstat(cat) {
    let data = await (await DataFilter.DataPowerstats()).filter(x => x != null)
    if (cat === "Int") {
        data.PowerSortByInt()
    } else if (cat === "Str") {
        data.PowerSortByStr()
    } else if (cat === "Spe") {
        data.PowerSortBySpe()
    } else if (cat === "Dur") {
        data.PowerSortByDur()
    } else if (cat === "Pow") {
        data.PowerSortByPow()
    } else if (cat === "Com") {
        data.PowerSortByCom()
    }
    let listId = []
    for (let i = 0; i < data.length; i++) {
        listId.push(data[i][0])
    }
    return listId
}

export async function filterByAppearance(cat) {
    let data = await (await DataFilter.DataAppearance()).filter(x => x != null)
    if (cat === "gender") {
        data.GenderSort()
    } else if (cat === "race") {
        data.RaceSort()
    } else if (cat === "height") {
        data.sortingHeight()
    } else if (cat === "weight") {
        data.sortingWeight()
    } else if (cat === "eyeColor") {
        data.EyeColorSort()
    } else if (cat === "hairColor") {
        data.HairColorSort()
    }
    let listId = []
    for (let i = 0; i < data.length; i++) {
        listId.push(data[i][0])
    }
    return listId
}

export async function filterByBiography(cat) {
    let data = await (await DataFilter.DataBiography()).filter(x => x != null)
    if (cat === "fullName") {
        data.FullNameSort()
    } else if (cat === "publisher") {
        data.PublisherSort()
    } else if (cat === "alignment") {
        data.AlignementSort()
    }
    let listId = []
    for (let i = 0; i < data.length; i++) {
        listId.push(data[i][0])
    }
    return listId
}