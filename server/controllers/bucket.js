
module.exports = {
  addToBucket: async (req, res) => {
    const { id } = req.session.user
    const { bucketInput } = req.body
    const db = req.app.get('db')

    const newList = await db.bucket.add_to_bucket({ id, bucketInput })
    res.status(201).send(newList)
  },
  getBucket: async (req, res) => {
    const { id } = req.session.user
    const db = req.app.get('db')

    const newList = await db.bucket.get_bucket({ id })
    res.status(201).send(newList)
  }
}
