document.addEventListener('DOMContentLoaded', function() {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        if (links[i].hostname.endsWith('ria.red')) {
            links[i].rel = 'noreferrer';
        }
    }
});