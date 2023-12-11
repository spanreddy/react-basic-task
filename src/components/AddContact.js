import React from "react";
const AddContact = () => {
  return (
    <div className="Container">
      <form className="form-field" onSubmit={this.add}>
        <div className="form-name">
          <label>Name</label>
          <div>
            <input
              type="text"
              className="border-dark"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={(e) => this.setstate({ name: e.target.value })}
            ></input>
          </div>
        </div>
        <div className="form-name">
          <label>Email</label>
          <div>
            <input
              type="text"
              className="border-black"
              name="Email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setstate({ email: e.target.value })}
            ></input>
          </div>
        </div>
      </form>
      <button type="button" className="primary">
        Submit
      </button>
    </div>
  );
};
export default AddContact;
