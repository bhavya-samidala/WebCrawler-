const { normaliseURL, getURLsFromHTML } = require ('./crawl.js')
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

test('getURLsFromHTML absolute ',() => {     //first i/p is name of the test 
    const inputHTMLBody = `
    <html>
        <body>
            <a href= "https://blog.boot.dev/path/">
            Boot.dev.Blog
            </a>
        </body>
    </html>`

    const inputBaseURL = "https://blog.boot.dev/path/"
    const actual = getURLsFromHTML(inputHTMLBody,inputBaseURL)
    const expected = ["https://blog.boot.dev/path/"]
    expect (actual).toEqual(expected)
}) 

test('getURLsFromHTML relative ',() => {     //relative urls contain only the path 
    const inputHTMLBody = `
    <html>
        <body>
            <a href= "/path/">
            Boot.dev.Blog
            </a>
        </body>
    </html>`

    const inputBaseURL = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHTMLBody,inputBaseURL)
    const expected = ["https://blog.boot.dev/path/"]
    expect (actual).toEqual(expected)
}) 

test('getURLsFromHTML both ',() => {     //relative urls contain only the path 
    const inputHTMLBody = `
    <html>
        <body>
            <a href= "https://blog.boot.dev/path1/">
                Boot.dev.Blog Path One 
            </a>
            <a href= "/path2/">
                Boot.dev.Blog Path Two
            </a>
        </body>
    </html>`

    const inputBaseURL = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHTMLBody,inputBaseURL)
    const expected = ["https://blog.boot.dev/path1/", "https://blog.boot.dev/path2/"]
    expect (actual).toEqual(expected)
}) 

//if we're given a bad url, dont include it in the extracted urls 
test('getURLsFromHTML invalid',() => {     //relative urls contain only the path 
    const inputHTMLBody = `
    <html>
        <body>
            <a href= "invalid">
                Invalid URL 
            </a>
        </body>
    </html>`

    const inputBaseURL = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHTMLBody,inputBaseURL)
    const expected = []
    expect (actual).toEqual(expected)
}) 