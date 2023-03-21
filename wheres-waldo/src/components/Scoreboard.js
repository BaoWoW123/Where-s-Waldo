import React from "react";
const Scoreboard = (props) => {    

  return (
    <div className="scoreboardWrapper">
      <div style={{ fontSize: "5rem" }}>Scoreboard </div>
      <table className="scoreboard">
        <tbody>

        <tr>
          <th>Placement</th>
          <th>Username</th>
          <th>Score (seconds)</th>
          <th>Date</th>
        </tr>
        {props.scores.map((el, i) => {
          return (
              <tr className="playerInfo" key={i}>
                <td>{i+1}</td>
                <td>{el.username}</td>
                <td>{el.score}</td>
                <td>{el.date}</td>
              </tr>
            ) 
          })}
          </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;
