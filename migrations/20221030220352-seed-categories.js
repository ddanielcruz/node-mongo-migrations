module.exports = {
  async up(db) {
    await db.collection('categories').insertMany([{ label: 'Books' }, { label: 'Electronics' }])
  },

  async down(db, client) {
    await db.collection('categories').deleteMany({})
  }
}
