import React from "react";

export default class NewLogin extends React.Component {
  state = {
    user: {
      email: "",
      password: ""
    },
    error: {}
  };

  onChange = (key, value) => {
    let { user, error } = this.state;
    user = {
      ...user,
      [key]: value
    };
    error = {
      ...error,
      [key]: ""
    };

    this.setState({ user, error });
  };

  onSubmit = e => {
    e.preventDefault();
    const { user } = this.state;
    let { error, isValid } = this.isValid(user);
    this.setState({ error });
    if (!isValid) {
      console.log("login successful", user);
    }

    // this.setState({}, () => {});
  };

  isValid = user => {
    let error = {};
    let valid = false;

    if (user && !user.email) {
      valid = true;
      error.email = "Email is required!";
    }

    if (user && !user.password) {
      valid = true;
      error.password = "Password is required!";
    }

    return { error, isValid: valid };
  };

  render() {
    const { user, error = {} } = this.state;
    return (
      <Form
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        user={user}
        error={error}
      />
    );
  }
}

const Form = props => {
  const { onSubmit, onChange, user, error } = props;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          name="Email"
          id="email"
          onChange={onChange}
          value={user.email}
          error={error.email}
        />
        <Input
          type="password"
          name="Password"
          id="password"
          onChange={onChange}
          value={user.password}
          error={error.password}
        />
        <br />
        <button onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
};

const Input = props => {
  const { onChange, value, error, name, type, id } = props;
  return (
    <div>
      <label>{name}</label>
      <input
        type={type}
        onChange={e => onChange(id, e.target.value)}
        value={value}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
