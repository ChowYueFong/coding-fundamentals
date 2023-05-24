function generation(number, sex) {
  const generationChart = [
    { generation: -3, male: "great grandfather", female: "great grandmother" },
    { generation: -2, male: "grandfather", female: "grandmother" },
    { generation: -1, male: "father", female: "mother" },
    { generation: 0, male: "me!", female: "me!" },
    { generation: 1, male: "son", female: "daughter" },
    { generation: 2, male: "grandson", female: "granddaughter" },
    { generation: 3, male: "great grandson", female: "great granddaughter" },
  ];
  let genFind = generationChart.find(
    (current) => current.generation === number
  );
  return sex === "m" ? genFind.male : genFind.female;
}
console.log(generation(2, "f"));
console.log(generation(-3, "m"));
console.log(generation(1, "f"));
