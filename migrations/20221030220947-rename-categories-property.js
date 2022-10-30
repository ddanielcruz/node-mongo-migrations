module.exports = {
  async up(db) {
    await db.collection('categories').updateMany({}, { $rename: { label: 'name' } })
  },

  async down(db) {
    await db.collection('categories').updateMany({}, { $rename: { name: 'label' } })
  }
}
