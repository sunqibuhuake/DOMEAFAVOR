import default_data from './default.js'
const renderContent = (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    return obj;
  };

  const renderCity = (city, row, index) => {
    console.log(city)
    return city;
  };
const table_config =  {
    columns: [
        {
            title: '城市',
            //colSpan: 2,
            dataIndex: 'city',
            key:'table-city',
            render: renderContent
        }
    ]
}

default_data.level.forEach((level) => {
    const key = level.type + level.name
    table_config.columns.push({
        title: key,
        //colSpan: 2,
        key: 'table-' + level.id,
        dataIndex: level.id,
        render: renderContent
    })
})


export default table_config
