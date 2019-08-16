import React from "react";
import Input from "./components/Input";
import "./App.css";
import Button from "./components/Button";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import List from "./components/List";
import bgimage from "../src/images/bg-01.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameArray: [],
      searchInput: [],
      tempArr: []
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  componentDidMount() {
    const { nameArray, tempArr } = this.state;

    const temArray = [
      "rajat",
      "nadir",
      "rashid",
      "lala",
      "rajat",
      "nadir",
      "rashid",
      "lala",
      "rajat",
      "nadir",
      "rashid",
      "lala"
    ];

    setTimeout(
      function() {
        this.setState({ nameArray: temArray, tempArr: temArray });
      }.bind(this),
      2000
    );
    console.log("nameARray is : " + nameArray);
  }

  onChangeHandle = e => {
    var { nameArray, searchInput, tempArr } = this.state;

    tempArr = [...nameArray];
    var FilterArray = [];

    if (e.target.value !== "") {
      FilterArray = tempArr.filter(item => {
        const lc = item.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      FilterArray = tempArr;
    }
    this.setState({
      tempArr: FilterArray
    });

    this.setState({ searchInput: e.target.value });
  };

  buttonClick() {
    const { searchInput, nameArray, tempArr } = this.state;
    console.log("searchInput: " + searchInput);
    this.setState({
      searchInput: [],
      tempArr: nameArray
    });
  }

  render() {
    const { nameArray, searchInput, tempArr } = this.state;

    return (
      <div>
        <img src={bgimage} className="bgimagee" />
        <div className="App ">
          <div>
            <div className="listitem">
              <div className="tab">
                <Input
                  elementType={"text"}
                  placeholder={"search..."}
                  inputClass={"control input"}
                  onChangeHandle={this.onChangeHandle}
                  value={searchInput}
                />
                <Button
                  name={"Basic Button"}
                  elementType={"button"}
                  colorClass={"#e7e7e7 buttoncs "}
                  buttonClick={this.buttonClick}
                >
                  cancel
                </Button>
              </div>

              <div>
                <List arrayElement={tempArr} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

{
  /* // { name: "rajat", age: "23" },
//       { name: "rashid", age: "24" },
//       { name: "shivam", age: "10" },
//       { name: "nadir", age: "30" } */
}

{
  /*  */
}
