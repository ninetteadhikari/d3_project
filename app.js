const DUMMY_DATA = [
    {id: 'd1', value: 10, region:'USA'},
    {id: 'd2', value: 11, region:'India'},
    {id: 'd3', value: 12, region:'China'},
    {id: 'd4', value: 6, region:'Germany'},
]

const container = d3.select('div')
    // .selectAll('p')
    // .data(DUMMY_DATA) // data is bound to the paragraph
    // .enter() // this gives all the missing elements
    // .append('p') // add missing elements ('p') to the parent ('div'). An element is added for each data point
    // // .text('Hello')
    // .text(data => data.region)
    .classed('container', true)
    .style('border', '1px solid red')

const bars = container
    .selectAll('.bar')
    .data(DUMMY_DATA)
    .enter()
    .append('div')
    .classed('bar', true)
    .style('width','50px')
    .style('height', '150px')