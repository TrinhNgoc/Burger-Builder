import Aux from '../../hoc/Auxillary'
import Burger from '../../components/Burger/Burger';

const { Component } = require("react");

class BurgerBuilder extends Component {
  render () {
    return (
      <Aux>
        <Burger />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;