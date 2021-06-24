import {newArticle} from './store/articles'
import {makeStockHistory, updateStock} from './store/stocks'

const loop = async () => {
    let teamIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

    while (teamIds.length) {

        let home = teamIds.splice(Math.floor(Math.random() * teamIds.length), 1)

        let away = teamIds.splice(Math.floor(Math.random() * teamIds.length), 1)

        home.push(Math.round(Math.random() * (125 - 75) + 75))
        away.push(Math.round(Math.random() * (125 - 75) + 75))
        let diff;

        if (home[1] > away[1]) {
            await newArticle(home[0], away[0], home[1], away[1])
            diff = home[1] - away[1]
            home.push(true)
        } else {
            await newArticle(away[0], home[0], away[1], home[1])
            diff = away[1] - home[1]
            home.push(true)
        }

        await makeStockHistory(home[1])
        await makeStockHistory(away[1])

        await updateStock(home[1], diff, home[2])
        await updateStock(away[1], diff, away[2])

    }

}

export default loop
