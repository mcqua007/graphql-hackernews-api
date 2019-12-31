function createdBy(parent, args, context) {
  return context.prisma.task({ id: parent.id }).createdBy()
}
function todos(parent, args, context) {
  return context.prisma.task({ id: parent.id }).todos()
}

module.exports = {
  createdBy,
  todos,
}