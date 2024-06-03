import handlebars from 'vite-plugin-handlebars';
import data from './data.json';

export default {
  base : '/Personal-Webpage/',  
    plugins: [handlebars({
        context : data   
    })],
};
