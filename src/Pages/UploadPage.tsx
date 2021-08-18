import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Papa from "papaparse";
import ItemList from "../Components/ItemList";
import {setPayload} from "../Store/actions/itemActions";
import _ from 'lodash';
import {itemTypeGuard} from "../utilities";
import { ItemType } from "../Types";

interface Props {
  actions: any;
}
interface State {
  csvfile?: any;
  nric: string;
  error: boolean;
  fileSelected: boolean;
}

const ERROR_NRIC_TEXT:string = "Please enter your valid NRIC to upload files.";
const SELECT_PROMPT:string = "Select File";
const SELECTED_PROMPT: string = "File selected";


export class UploadPage extends Component<Props, State> {

  private filesInput: any;

  constructor(props: any) {
    super(props)
    this.state = {
      error: false,
      nric: "",
      fileSelected: false,
    }
  }

  updateData = (results: any) => {
    console.log(results);

    const normalisedResults = this.normaliseResults(results, this.state.nric)
    console.log(normalisedResults);

    this.props.actions.setPayload(normalisedResults)
  }

  handleFileChange = (e:any) => {
    this.setState({
      csvfile: e.target.files[0],
      fileSelected: true,
    });
  };

  handleTextChange = (e: any) => {
    this.setState({
      nric: e.target.value
    });
  };

  handleKeyDown = async (e: any) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };

  validateNric = (input:string) => {
    return input.match(/^[STFG]\d{7}[A-Z]$/)
  };

  private normaliseResults = (results:any, nric:string): Array<ItemType> => {
    results.reduce((acc: Array<ItemType>, item:any) => {
      if(!itemTypeGuard(item)){
        return acc
      }
      item["id"] = item["Order ID"]
      item["Nric"] = nric
      acc.push(item as ItemType);
      return acc
    }, [] as Array<ItemType>)

    return results
  };

  importCSV = () => {
    const { csvfile } = this.state;

    if (!csvfile || !this.validateNric(this.state.nric)){
      this.setState({error: true})
      return
    }

    Papa.parse(csvfile, {
      complete: (results) => {
        this.setState({ error: false })
        this.updateData(results.data)
      },
      header: true
    });
  };

  render() {
    return (
      <>
      <div className="form">
        <TextField id="nric" label="User NRIC" className="ic-input" onChange={this.handleTextChange} helperText={ERROR_NRIC_TEXT} error={this.state.error} />
        <div><Button
          variant="contained"
          component="label"
          className="upload-btn"
        >
          <span>{this.state.fileSelected ? SELECTED_PROMPT : SELECT_PROMPT}</span>
          <input
            type="file"
            hidden
            onChange={this.handleFileChange}
            ref={input => {
              this.filesInput = input;
            }}
          />
        </Button>
          <Button
            variant="contained" color="primary"
            onClick={this.importCSV}
          >
            Upload
          </Button>
        </div>
      </div>
       <div>
            <ItemList />
      </div>
      </>
    );
  }
}


const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(Object.assign({}, { setPayload }), dispatch)
});

export default connect(null, mapDispatchToProps)(UploadPage);
