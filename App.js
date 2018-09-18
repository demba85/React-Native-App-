import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from './components/header';
import TaskList from './components/task-list';
import ButtonAddTask from './components/button-add-task';
import MenuTask from './components/menu-task';
import lodash from 'lodash';
import { TASK } from './model';
import AddTaskPrompt from './components/add-task-prompt';


const taskList = [
  {
    id: 0,
    content: 'Allez voir Sébastien',
    status: 'En cours'
  },
  {
    id: 1,
    content: 'Se brosser les dents',
    status: 'En cours'
  },
  {
    id: 2,
    content: 'Faire du ménage',
    status: 'Terminé'
  },
  {
    id: 3,
    content: 'Allez voir Sébastien',
    status: 'En cours'
  },
  {
    id: 4,
    content: 'Se brosser les dents',
    status: 'En cours'
  },
  {
    id: 5,
    content: 'Faire du ménage',
    status: 'Terminé'
  },
  {
    id: 6,
    content: 'Allez voir Sébastien',
    status: 'En cours'
  },
  {
    id: 7,
    content: 'Se brosser les dents',
    status: 'En cours'
  },
  {
    id: 8,
    content: 'Faire du ménage',
    status: 'Terminé'
  },
  {
    id: 9,
    content: 'Allez voir Sébastien',
    status: 'En cours'
  },
  {
    id: 10,
    content: 'Se brosser les dents',
    status: 'En cours'
  },
  {
    id: 11,
    content: 'Faire du ménage',
    status: 'Terminé'
  },
  {
    id: 12,
    content: 'Allez voir Sébastien',
    status: 'En cours'
  },
  {
    id: 13,
    content: 'Se brosser les dents',
    status: 'En cours'
  },
  {
    id: 14,
    content: 'Faire du ménage',
    status: 'Terminé'
  }
];

export default class App extends React.Component {

  constructor(props) {
    super(props);
      this.state = { taskList, isMenuTaskVisible: false, currentTask: {} };
    }

    // displayMenuTask = taskContent => {
    //   console.log('onPress', taskContent);
    // }

    toggleMenuTaskVisibility = task => {
      let currentTask = task;
      if (this.state.isMenuTaskVisible) {
        currentTask = {};
      }
      this.setState({ 
        isMenuTaskVisible: !this.state.isMenuTaskVisible,
         currentTask
      });
    };

    deleteCurrentTask = () => {
      const index = lodash.findIndex(this.state.task, {
        id: this.state.currentTask.id
      });
      const list = this.state.taskList;
      list.splice(index, 1);
      this.setState({ taskList: list, currentTask: {} });
      this.toggleMenuTaskVisibility();
    };
    toggleTaskStatus = () => {
      const updatedStatus = this.state.currentTask;
      updatedStatus.status = this.state.doneStatus.status === TASK.doneStatus ? TASK.todoStatus : TASK.doneStatus;
      const index = lodash.findIndex(this.state.task, {
        id: this.state.currentTask.id
      });
      const updatedTaskList = this.state.taskList;
      updatedTaskList[index] = updatedTask;
      this.setState({taskList:updatedTaskList,isMenuTaskVisible:false,currentTask:{}});
    };

    hideAddPrompt = () => {

    }

    onAddTask = (value) => {

    }
  
  render() {
    return (
     <View style={{ flex: 1 }}>
        <Header content="Liste de tâches" />
        <ScrollView>
          <TaskList
          onPressCallBack={this.toggleMenuTaskVisibility} 
          taskList={this.state.taskList}/>
        </ScrollView>
        <MenuTask 
        isVisible={this.state.isMenuTaskVisible} 
        onDisapearCallBack={this.toggleMenuTaskVisibility}
        onDeleteCallBack= {this.deleteCurrentTask}
        onChangeStatusCallBack= {this.toggleTaskStatus}
        />
        <AddTaskPrompt
         isVisible
          onCancelCallBack={this.hideAddPrompt}
          onSubmitCallBack={this.onAddTask}
           />
        <ButtonAddTask />
     </View>
   
    );
  }
}

