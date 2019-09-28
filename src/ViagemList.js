import React, { Component } from "react"; 
import ZingGrid from "zinggrid";

class ViagemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          json: undefined
        };
      }

      render() {
        return (
          <div>
            <zing-grid
              ref={grid => {
                this.grid = grid;
              }}
              data={this.state.json}
              caption="Minhas Viagens"
              editor
              loading
              layout="row"
              viewport-stop
            />
          </div>
        );
      }



componentDidMount() {
    const _this = this;
    fetch("./Viagens.json")
      .then(res => res.json())
      .then(
        result => {
          setTimeout(() => {
            this.setState({
              json: JSON.stringify(result.shows)
            });
          }, 2000);
        },
        error => {
          console.log(error);
        }
      );
  }
}

export default ViagemList