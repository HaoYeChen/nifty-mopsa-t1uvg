import React, { Component } from "react";
import TaskboardList from "./TaskboardList";
import { connect } from "react-redux";
import TaskboardActionButton from "./TaskboardActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";

class App extends Component {
  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <div className="heading">TaskBoard</div>
          <div style={{ display: "flex" }}>
            {lists.map(list => (
              <TaskboardList
                listID={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
              />
            ))}

            {/* <TaskboardActionButton list /> */}
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
