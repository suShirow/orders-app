import React, { Component } from "react";
import { ItemType, columns } from "../../Types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getDefaults } from "../../Store/actions/itemActions";
import { DataGrid } from '@material-ui/data-grid';

interface Props {
  data: ItemType[];
  actions: any;
}

interface State {
  page: number;
}

const ALL_ORDERS_LABEL = "All Orders";
const NO_ORDERS_LABEL = "No Orders found";

export class ItemList extends Component<Props, State> {
  constructor(props:any) {
    super(props);
    this.state = {
      page: 0
    };
  }
  public componentDidMount() {
    this.props.actions.getDefaults();
  }

  handleChangePage = (event: unknown, newPage: number) => {
    this.setState({page: newPage })
  };

  render() {
    const { data } = this.props;

    console.log(columns);
    console.log(data);

    const header = ALL_ORDERS_LABEL;

    return (
      <>
        <h3>{header}</h3>

        {this.props.data.length === 0 && (
          <h3>
            {NO_ORDERS_LABEL}
          </h3>
        )}

        {this.props.data.length > 0 && (
          <div style={{height: '720px'}}>
          <div style={{ display: 'flex', height: '100%' }}>
  <div style={{ flexGrow: 1 }}>
                    <DataGrid
                      rows={data}
                      columns={columns}
                      pageSize={10}
                      disableSelectionOnClick
                    />
              </div>
        </div>
      </div>

        )}
      </>
    );
  }
}

const mapStateToProps = (state:any) => ({
  data: state.items.payload,
});
const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(Object.assign({}, { getDefaults }), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
