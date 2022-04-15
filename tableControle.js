export function CutByNbt(tab) {
    nbtDisplay = document.getElementById("nbtDisplay").value
    if (nbtDisplay == "all results") return [tab]
    else {
        let PageTable = []
        nbtDisplay = parseInt(nbtDisplay)
        nbtByPage = 0
        for (let index = 0; index < tab.length; index++) {
            if (nbtByPage == nbtDisplay) {
                nbtByPage = 0
                PageTable.push([])
            }
            PageTable[PageTable.length - 1].push(tab[index])
            nbtByPage++
        }
        return PageTable
    }
}