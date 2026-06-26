// Destructuring example everywhere

export function formatTask({ id, title, completed }) {
  return `${id}. ${title} - ${completed ? "Done" : "Pending"}`;
}

// Array destructuring
export function splitTasks(tasks) {
  const [first, second, ...rest] = tasks;
  return { first, second, rest };
}