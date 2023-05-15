const fs = require('fs');

// Takes the path to an HTML file and returns the contents of the file with every "injected" tag replaced by the injected HTML.
function injectHTML(pathToFile) {
    const re = /(?<=<injected component=").*(?=")/g
    let markup = fs.readFileSync('./site/sprout-central.html', 'utf-8').split('\n');
    
    for (let i = 0; i < markup.length; i++) {
        line = markup[i];
        match = re.exec(line);
        
        if (match != null) {
            injectedContent = fs.readFileSync(`./site/components/${match}.html`, 'utf-8').split('\n');
            markup.splice(i, 1, ...injectedContent);
        }
    }

    return markup.join('\n');
}

module.exports['injectHTML'] = injectHTML;
