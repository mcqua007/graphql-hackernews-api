function tasks(parent, args, context, info) {
  return context.prisma.tasks()
}

function users(parent, args, context, info) {
  return context.prisma.users()
}

function task(parent, args, context, info) {
  return context.prisma.task({id: args.id});
}

module.exports = {
  tasks,
  users,
  task
}