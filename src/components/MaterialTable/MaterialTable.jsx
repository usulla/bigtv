import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo(props) {

  const [state, setState] = React.useState({
    columns: [
      { title: 'IDEC', field: 'IDEC' },
      { title: 'Дата эфира', field: 'datetime' },
      { title: 'Название', field: 'HOUSE_ID' },
      { title: 'Серия', field: 'seriesNumber', type: 'numeric' },
      {
        title: 'Лицензионность',
        field: 'unlicensed',
        lookup: { 0: 'unlicensed', 1: 'licensed' },
      },
    ],
    data: [
        ...props.dataForTable[0]
    ],
  });

  return (
    <MaterialTable
      title="Редактирование сетки"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}
