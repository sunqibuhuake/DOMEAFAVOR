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
    saveItems: (item) => {
        const data = window.localStorage.getItem('xitems')
        let items = [];
        try {
            items = JSON.parse(data).items;
        } catch (e) {
            console.log('获取出错')
        }
        items.push(item);
        window.localStorage.setItem('xitems', JSON.stringify({items: items}))
        return items;

    }
}