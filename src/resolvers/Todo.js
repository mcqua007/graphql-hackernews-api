
function createdBy(parent, args, context) {
  return context.prisma.todo({ id: parent.id }).createdBy()
}
module.exports = {
  createdBy,
}