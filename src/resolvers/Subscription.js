function newTaskSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.task({ mutation_in: ['CREATED'] }).node()
}

const newTask = {
  subscribe: newTaskSubscribe,
  resolve: payload => {
    return payload
  },
}

function newTodoSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.todo({ mutation_in: ['CREATED'] }).node()
}

const newTodo = {
  subscribe: newTodoSubscribe,
  resolve: payload => {
    return payload
  },
}

module.exports = {
  newTask,
  newTodo,
}
