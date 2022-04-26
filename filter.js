import { GenerateTable } from './generateTable.js';
import * as DataFilter from './getDataForFilter.js';
import * as pagination from './pagination.js';


let prefuousefilter = ""

export async function filterByPowerstat(cat) {
    let data = await (await DataFilter.DataPowerstats()).filter(x => x != null)
    let isReverse = (prefuousefilter === cat)
    if (!isReverse) prefuousefilter = cat
    else prefuousefilter = ""

    if (cat === "Int") {
        data.PowerSortByInt(isReverse)
    } else if (cat === "Str") {
        data.PowerSortByStr(isReverse)
    } else if (cat === "Spe") {
        data.PowerSortBySpe(isReverse)
    } else if (cat === "Dur") {
        data.PowerSortByDur(isReverse)
    } else if (cat === "Pow") {
        data.PowerSortByPow(isReverse)
    } else if (cat === "Com") {
        data.PowerSortByCom(isReverse)
    }
    let listId = []
    for (let i = 0; i < data.length; i++) {
        listId.push(data[i][0])
    }
    GenerateTable(await pagination.DataId(listId))
}

export async function filterByAppearance(cat) {
    let data = await (await DataFilter.DataAppearance()).filter(x => x != null)
    let isReverse = (prefuousefilter === cat)
    if (!isReverse) prefuousefilter = cat
    else prefuousefilter = ""

    if (cat === "gender") {
        data.GenderSort(isReverse)
    } else if (cat === "race") {
        data.RaceSort(isReverse)
    } else if (cat === "height") {
        data.sortingHeight(isReverse)
    } else if (cat === "weight") {
        data.sortingWeight(isReverse)
    }
    let listId = []
    for (let i = 0; i < data.length; i++) {
        listId.push(data[i][0])
    }
    GenerateTable(await pagination.DataId(listId))
}

export async function filterByBiography(cat) {
    let data = await (await DataFilter.DataBiography()).filter(x => x != null)
    let isReverse = (prefuousefilter === cat)
    if (!isReverse) prefuousefilter = cat
    else prefuousefilter = ""

    if (cat === "fullName") {
        data.FullNameSort(isReverse)
    } else if (cat === "publisher") {
        data.PublisherSort(isReverse)
    } else if (cat === "alignment") {
        data.AlignementSort(isReverse)
    }
    let listId = []
    for (let i = 0; i < data.length; i++) {
        listId.push(data[i][0])
    }
    GenerateTable(await pagination.DataId(listId))
}