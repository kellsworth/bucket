
module.exports = {
  addToBucket: async (req, res) => {
    const { id } = req.session.user
    const { bucketInput } = req.body
    const db = req.app.get('db')

    const newList = await db.bucket.add_to_bucket({ id, bucketInput })
    res.status(201).send(newList)
    // need to change above response //
  },
  getBucket: async (req, res) => {
    const { id } = req.session.user
    const db = req.app.get('db')

    const newBucketList = await db.bucket.get_bucket({ id })
    const newMomentsList = await db.bucket.get_moments({ id })
    res.status(201).send({ newBucketList, newMomentsList })
  },
  toggleCompleted: async (req, res) => {
    const { id } = req.session.user
    const { itemId } = req.params
    const { completed } = req.body
    const db = req.app.get('db')

    const newList = await db.bucket.toggle_completed({ id, itemId, completed: !completed })
    res.status(200).send(newList)
  },
 
    deleteBucket: async (req, res) => {
      const { id } = req.session.user
      console.log(id)
      const { itemId } = req.params
      const db = req.app.get('db')

      const newList = await db.bucket.delete_bucket(itemId, id)
      res.status(200).send(newList)
      
    }
} 

