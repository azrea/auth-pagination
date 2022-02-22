function paginate(data) {
  const itemsPerPage = 30;
  const numberOfPages = Math.ceil(data.length / itemsPerPage);

  const neWords = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });

  return neWords;
}

export default paginate;
