const secondLargest = (arr) => {
  const unique = [...new Set(arr)];
  unique.sort((a,b) => b - a);
  return unique[1] ?? null;
};

console.log(secondLargest([10, 20, 4, 20, 5])); // 10
