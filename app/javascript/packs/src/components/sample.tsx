import * as React from 'react';
import axios from 'axios';

// axios.get("/users/index").then(res => )
// const Sample: React.FC = () => (
//   <div>messages block</div>
// );

// export default Sample

interface SampleProps {}

interface SampleState {
  users: any;
}

export default class Sample extends React.Component<SampleProps, SampleState> {
  constructor(props: SampleProps) {
    super(props);
    this.getUser();
  }

  getUser() {
    axios
      .get('users/index')
      .then(res =>
        this.setState({
          users: res.data
        })
      )
      .catch(err => {
        console.log('err:', err);
      });
  }
  render() {
    return <div>{this.state.users}</div>;
  }
}
