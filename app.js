d3.select('div')
    .selectAll('p')
    .data([1,2,3]) // data is bound to the paragraph
    .enter() // this gives all the missing elements
    .append('p') // add missing elements ('p') to the parent ('div'). An element is added for each data point
    // .text('Hello')
    .text(data => data)