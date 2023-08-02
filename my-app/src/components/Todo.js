import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);

  const onclickHandler = async () => {
    const response = await fetch("/api2/todos");
    const data = await response.json();
    setTodo(data);
  };

  return (
    <>
      <div className="display-wrapper">
        <div className="display-box">
          <div className="display-board">
            <h4>Todo</h4>
          </div>
          <div className="get-button">
            <button onClick={onclickHandler}>Get all Todo</button>
          </div>
        </div>
      </div>
      {todo.length > 0 && (
        <div className="table-wrapper">
          <div className="table-box">
            <h2>My Todo</h2>
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Todo</th>
                    <th>Category</th>
                    <th>isComplete</th>
                  </tr>
                </thead>
                <tbody>
                  {todo.map((el, index) => {
                    return (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "odd" : "even"}
                      >
                        <td>{index + 1}</td>
                        <td>{el.todo}</td>
                        <td>{el.category}</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Todo;
