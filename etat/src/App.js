import React, { Component } from 'react'
import "./App.css";

class App extends React.Component {
  state = {
    fullName: "Laatiri Afef",
    profession: "Landscape architecture",
    bio: "A Landscape architecture",
    image: "https://th.bing.com/th/id/R.3739b07b2538fcced0fef265d631e289?rik=9fECQxPk6hY06Q&pid=ImgRaw&r=0",
    show: true,
    count: 0,
  };

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    },500);
  }
  render() {
    return (
      <div className="pos app">
      <div className="box">
        {this.state.show && (
          <div className="inf">
            <div className="pos profImg">
              <img src={this.state.image} alt="" />
            </div>
            <section className="pos">
              <h1>{this.state.fullName}</h1>
              <h3>{this.state.profession}</h3>
              <p>{this.state.bio}</p>
              <div className="count">
                Count: {this.state.count}{" "}
                sec
              </div>
            </section>
          </div>
        )}
        <button type="button" className="btn" onClick={this.handleClick}>Show Me </button>
      </div>
    </div>
  );
}
}
export default App;  
   
