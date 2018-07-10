import default_data from '../data/default'
export default {
    getItems: () => {
        const data = window.localStorage.getItem('xitems')
        let items = [];
        try {
            items = JSON.parse(data).items;
        } catch (e) {
            console.log('获取出错')
        }
        return items;
    },
    saveItems: (new_items) => {
        const data = window.localStorage.getItem('xitems')
        let items = [];
        try {
            items = JSON.parse(data).items;
        } catch (e) {
            console.log('获取出错')
        }
        const final_items = items.concat(new_items)
        window.localStorage.setItem('xitems', JSON.stringify({items: final_items}))
        return final_items;

    },
    getWeekIndex(date) {
        const today = date;
        let firstDay = new Date(today.getFullYear(),0, 1);
        const dayOfWeek = firstDay.getDay(); 
        let spendDay= 1;
        if (dayOfWeek !=0) {
          spendDay=7-dayOfWeek+1;
        }
        firstDay = new Date(today.getFullYear(),0, 1+spendDay);
        const d =Math.ceil((today.valueOf()- firstDay.valueOf())/ 86400000);
        const result =Math.ceil(d/7);
        return result+1;
    },
    code2city:(code) => {
        const obj = {};
        default_data.city.forEach(city => {
            obj[city.id] = city.name
        })
        if (obj[code]) {
            return obj[code]
        } else {
            return '城市？？'
        }

    }
}

