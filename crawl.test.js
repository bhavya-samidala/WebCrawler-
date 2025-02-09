const { normaliseURL } = require ('./crawl.js')
const { test,expect } = require ('@jest/globals')


test('normaliseURL strip protocol',() => {     //first i/p is name of the test 
    const input = 'https://blog.boot.dev/path'
    const actual = normaliseURL(input)
    const expected = 'blog.boot.dev/path'
    expect (actual).toEqual(expected)
})

test('normaliseURL strip trailing slash ',() => {     //first i/p is name of the test 
    const input = 'https://blog.boot.dev/path/'
    const actual = normaliseURL(input)
    const expected = 'blog.boot.dev/path'
    expect (actual).toEqual(expected)
})

test('normaliseURL capitals ',() => {     //first i/p is name of the test 
    const input = 'https://BLOG.boot.dev/path'
    const actual = normaliseURL(input)
    const expected = 'blog.boot.dev/path'
    expect (actual).toEqual(expected)
}) 

test('normaliseURL strip http ',() => {     //first i/p is name of the test 
    const input = 'http://BLOG.boot.dev/path'
    const actual = normaliseURL(input)
    const expected = 'blog.boot.dev/path'
    expect (actual).toEqual(expected)
}) 