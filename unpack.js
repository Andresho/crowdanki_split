const deckName = "concepts";

const fs = require("fs").promises;
const data = require(`./dist/${deckName}/${deckName}.json`);
const { createReadStream, createWriteStream } = require("fs");

const treatErrors = fn => {
    const treated = async (...args) => {
        try {
            await fn(...args);
        } catch (error) {
            console.log(error);
        }
    }
    return treated;
}

const createCardFile = treatErrors(async n => {
    await fs.mkdir(`./cards/${n}`, { recursive: true });
    await fs.mkdir(`./cards/${n}/media`, { recursive: true });

    const path = `./cards/${n}/${n}.json`;
    const content = JSON.stringify(data.notes[n], null, "\t");

    await fs.writeFile(path, content);

    const mediaFiles = data.notes[n].fields
        .filter(field => field.slice(0, 4) === '<img')
        .map(field => field.split('"')[1]);


    for (let i = 0; i < mediaFiles.length; i++) {
        const filename = mediaFiles[i];
        createReadStream(`./dist/${deckName}/media/${filename}`)
            .pipe(createWriteStream(`./cards/${n}/media/${filename}`))
    }
})

for (let i = 0; i < data.notes.length; i++) {
    createCardFile(i)
}