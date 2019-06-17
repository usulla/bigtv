import React, { Component } from "react";
import MaterialTable from "material-table";

class CustomMaterialTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRow: null,
      columns: [
        { title: "IDEC", field: "IDEC" },
        { title: "Дата", field: "airDate" },
        { title: "Время эфира", field: "airTime" },
        { title: "Название", field: "HOUSE_ID" },
        { title: "Серия", field: "seriesNumber", type: "numeric" },
        {
          title: "Лицензионность",
          field: "licensed",
          lookup: { true: "unlicensed", false: "licensed" }
        }
      ],
      data: [...this.props.dataForTable]
    };
  }

  render() {
    return (
      <MaterialTable
        title="Редактирование сетки"
        columns={this.state.columns}
        data={this.state.data}
        options={{
          rowStyle: rowData => ({
            backgroundColor:
              rowData.compare === false ? "rgba(233,30,99,0.4)" : "#FFF"
          }),
          pageSize: 9,
          pageSizeOptions: [9, 20, 30]
        }}
        localization={{
          body: {
            addTooltip: "Добавить",
            editTooltip: "Изменить",
            deleteTooltip: "Удалить"
          },
          header: {
            actions: "Действия"
          },
          toolbar: {
            searchPlaceholder: "Поиск",
            searchTooltip: "Поиск"
          },
          pagination: {
            labelRowsSelect: "строк",
            firstTooltip: "В начало",
            lastTooltip: "В конец",
            previousTooltip: "Предыдущая",
            nextTooltip: "Следующая"
          }
        }}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...this.state.data];
                data.push(newData);
                this.setState({ data, data });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...this.state.data];
                data[data.indexOf(oldData)] = newData;
                this.setState({ data, data });
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...this.state.data];
                data.splice(data.indexOf(oldData), 1);
                this.setState({ data, data });
              }, 600);
            })
        }}
      />
    );
  }
}

export default CustomMaterialTable;
