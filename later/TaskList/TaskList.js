import React from "react";
import { AuthProvider } from "./accounts/AuthContext";
import SignupPage from "./accounts/SignupPage";
import { TaskListContainer } from "./StyledTaskList";

const TaskList = () => {
  return (
    <AuthProvider>
      <TaskListContainer>
        <SignupPage />
      </TaskListContainer>
    </AuthProvider>
  );
};

export default TaskList;
