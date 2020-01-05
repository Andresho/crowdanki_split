const fs = require("fs").promises;
const data = require("./dist/concepts/concepts.json");

// const transfer_if_there_is_file = field => {
//     console.log('field: ', field);
//     console.log('sliced: ', field.slice(0, 4));
//     console.log(field.slice(0, 4) === '<img');

//     if (field.slice(0, 4) === '<img') {
//         console.log(field.split('"')[1]);
//         await fs.mkdir(`./cards/${i}`, { recursive: true });
//         //fs.createReadStream('test.log').pipe(fs.createWriteStream('newLog.log'));

//     }
// }

// console.log(transfer_if_there_is_file(data.notes[1].fields[1]))

// const createCardFile = (n, data) => {
//     const path = `./cards/${n}/${n}.json`;
//     const content = JSON.stringify(data[n], null, "\t");
//     const callback = err => {
//         if (err) throw err;
//         for (let i = 0; i < data[n].fields.length; i++) {

//         }

//     };

//     fs.writeFile(path, content, callback);
// }



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


const createCardFile = treatErrors(async (i) => {
    await fs.mkdir(`./cards/${i}`, { recursive: true });
    await fs.mkdir(`./cards/${i}/media`, { recursive: true });

    const path = `./cards/${i}/${i}.json`;
    const content = JSON.stringify(data.notes[i], null, "\t");

    await fs.writeFile(path, content);

    //console.log('field: ', field);
    //     console.log('sliced: ', field.slice(0, 4));
    //     console.log(field.slice(0, 4) === '<img');
})

for (let i = 0; i < data.notes.length; i++) {
    createCardFile(i)
}



// const main = async () => {
//     console.log('\n\n\nbefore write\n\n\n');
//     for (let i = 0; i < dirNames.length; i++) {
//         const path = `./src/web/pages/${dirNames[i]}.js`;
//         const content = `export { default } from '../containers/${dirNames[i]}';\n`;

//         const file = await fs.writeFileSync(path, content);
//     }

//     // console.log('\n\n\nafterWrite\n\n\n\n');
// };