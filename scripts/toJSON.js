// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import fs from 'fs';

const { DB } = process.env;

const run = async () => {
    const { data } = await axios.get(`${DB}?_raw=1`);
    fs.writeFileSync('src/data.json', JSON.stringify(data, null, 2));
};

run();
