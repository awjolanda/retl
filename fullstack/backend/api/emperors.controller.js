import EmperorsDAO from "../dao/emperorsDAO.js"

export default class EmperorsController {
    static async apiGetEmperor(req, res, next) {
        try {
            let id = req.params.id || {}
            let emperors = await EmperorsDAO.getEmperor(id)
            if (!emperors) {
                res.status(404).json({ error: "Not found" })
                return
            }
            res.json(emperors)
        } catch (e) {
            console.log(`api, ${e}`)
            res.status(500).json({ error: e })
        }
    }

    static async apiGetAllEmperor(req, res, next) {
        try {
            let emperors = await EmperorsDAO.getAllEmperor()
            if (!emperors) {
                res.status(404).json({ error: "Not found" })
                return
            }
            res.json(emperors)
        } catch (e) {
            console.log(`api, ${e}`)
            res.status(500).json({ error: e })
        }
    }
}