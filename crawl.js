//stub out the function 

function normaliseURL (urlString) {
    const urlObj = new URL(urlString)
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`
    if (hostPath.length>0 && hostPath.slice(-1)=='/'){
    
        return hostPath.slice(0,-1)
    }
    return hostPath
        
}

//making the fxn above  available to other js files that want to import it 
module.exports = {
    normaliseURL
}