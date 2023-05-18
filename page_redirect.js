const url = decodeURI(document.location.toString())
const urlRedirectLink = url.slice(url.indexOf('=') + 1);

const userAgentLower = navigator.userAgent.toLowerCase()
const isQQ = userAgentLower.indexOf("qq") !== -1;
const isWeixin = userAgentLower.indexOf("micromessenger") !== -1;


function redirect_page(link) {
    location.href = link
}


if (!(isQQ || isWeixin)) {
    redirect_page(urlRedirectLink)
}