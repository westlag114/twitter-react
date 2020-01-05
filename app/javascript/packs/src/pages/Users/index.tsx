import * as React from 'react';
import axios from 'axios';

interface SampleProps {}

interface SampleState {
  users: { id: number; name: string }[];
}

export default class Sample extends React.Component<SampleProps, SampleState> {
  constructor(props: SampleProps) {
    super(props);
    this.state = {
      users: []
    };
    this.getUser();
  }

  getUser() {
    axios
      .get('/api/v1/users')
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
    return (
      <div>
        {this.state.users.map(user => {
          return (
            <p className="Users__Text">
              {user.id}:{user.name}
            </p>
          );
        })}
      </div>
    );
  }
}
