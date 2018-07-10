import default_data from './default.js'
const renderContent = (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 4) {
      obj.props.colSpan = 0;
    }
    return obj;
  };
const table_config =  {
    columns: []
}

default_data.level.forEach((level) => {
    const key = level.type + level.name
    table_config.columns.push({
        title: key,
        colSpan: 2,
        dataIndex: key,
        render: renderContent
    })
})


export default table_config
