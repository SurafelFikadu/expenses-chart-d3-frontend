const Data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const w = 500;
const h = 250;

const svg = d3
  .select(".main")
  .selectAll("div")
  .data(Data)
  .enter()
  .append("div")
  .attr("class", (d, i) => "bar bar-"+i)
  .style("height", (d) => d.amount * 3 + "px")

svg
  .select("text")
  .data(Data)
  .enter()
  .append("text")
  .text(i =>  `${i.day}`)
  .attr("class", (d, i) => "day day-" + i)

svg
  .select("text")
  .data(Data)
  .enter()
  .append("text")
  .text(i => `$${i.amount}`)
  .attr("class", (d, i) => "amount amount-" + i)

// const svg = d3
//     .select(".main")
//     .append("svg")
//     .attr("width", w)
//     .attr("height", h)

//   svg
//     .selectAll("rect")
//     .data(Data)
//     .enter()
//     .append("rect")
//     .attr("class", (d, i) => "bars bars-"+i)
//     .attr("x", (d, i) => i * 70 )
//     .attr("y", (d, i) => h - d.amount * 3 - 20)
//     .attr("width", 55)
//     .attr("height", (d, i) => d.amount * 3)
//     .attr("fill", (d) => d.amount > 50 ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)")

//     svg
//     .selectAll("text")
//     .data(Data)
//     .enter()
//     .append("text")
//     .text(i =>  i.day)
//     .attr("x", (d, i) => i * 70 )
//     .attr("y", (d, i) => h -4)
//     .attr("class", "day")
//     .attr("fill", "hsl(186, 34%, 60%)")
//     .style("font-size", "18")
//     .style("margin-left", "5px")

    
//   svg
//     .selectAll("div")
//     .data(Data)
//     .enter()
//     .append("text")
//     .text(i => "$" +i.amount)
//     .attr("x", (d, i) => i * 70 )
//     .attr("y", (d, i) => h - d.amount * 3 - 25)
//     .attr("class", (d, i) => "amount amount-"+i)
//     .attr("fill", "#fff")
//     .style("font-size", "18")
  
