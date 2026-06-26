// Generator for pagination simulation
export function* taskPaginator(tasks, pageSize = 10) {
  let index = 0;

  while (index < tasks.length) {
    yield tasks.slice(index, index + pageSize);
    index += pageSize;
  }
}