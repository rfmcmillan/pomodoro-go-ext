import axios from 'axios';
const LOAD_SESSIONS = 'LOAD_SESSIONS';
const loadSessionsActionCreator = (sessions) => {
  return {
    type: LOAD_SESSIONS,
    sessions,
  };
};

const loadSessions = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        'https://pomodoro-go-1.herokuapp.com/api/sessions'
      );
      const sessions = response.data;
      dispatch(loadSessionsActionCreator(sessions));
    } catch (error) {
      console.log(error);
    }
  };
};

const LOAD_SESSION = 'LOAD_SESSION';

const loadSessionActionCreator = (session) => {
  return {
    type: LOAD_SESSION,
    session,
  };
};

const loadSession = (sessionId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://pomodoro-go-1.herokuapp.com/api/sessions/${sessionId}`
    );
    dispatch(loadSessionActionCreator(res.data));
  } catch (error) {
    console.log(error);
  }
};

const sessionsReducer = (state = [], action) => {
  if (action.type === LOAD_SESSIONS) {
    state = action.sessions;
  }
  return state;
};

const CREATE_SESSION = 'CREATE_SESSION';

const createSessionActionCreator = (session) => {
  return {
    type: CREATE_SESSION,
    session,
  };
};
const createSession = (userId, goal) => async (dispatch) => {
  try {
    const response = await axios.post(
      'https://pomodoro-go-1.herokuapp.com/api/sessions',
      {
        userId,
        goal,
      }
    );
    const { data } = response;

    localStorage.setItem('currentSession', JSON.stringify(data));
    dispatch(createSessionActionCreator(data));
  } catch (error) {
    console.log(error);
  }
};

const UPDATE_SESSION = 'UPDATE_SESSION';

const updateSessionActionCreator = (session) => {
  return {
    type: UPDATE_SESSION,
    session,
  };
};
const updateSession = (sessionId, sessionInfo) => async (dispatch) => {
  try {
    const response = await axios.put(
      `https://pomodoro-go-1.herokuapp.com/api/sessions/${sessionId}`,
      sessionInfo
    );
    const { data } = response;
    window.localStorage.setItem('currentSession', JSON.stringify(data));
    dispatch(updateSessionActionCreator(data));
  } catch (error) {
    console.log(error);
  }
};
const END_SESSION = 'END_SESSION';
const REMOVE_SESSION = 'REMOVE_SESSION';
export const removeSession = () => {
  return { type: REMOVE_SESSION };
};
export const _endSession = (session) => {
  return {
    type: END_SESSION,
  };
};

export const endSession =
  (sessionId, successful = false) =>
  async (dispatch) => {
    try {
      let response = await axios.put(
        `https://pomodoro-go-1.herokuapp.com/api/sessions/${sessionId}/end`,
        { successful }
      );
      if (response.data.status === 'Ongoing') {
        response = await axios.put(
          `https://pomodoro-go-1.herokuapp.com/api/sessions/${sessionId}/end`,
          { successful }
        );
      }
      chrome.runtime.sendMessage('jgphbioennmnjogfbpchcgphelmfoiig', {
        message: 'timer-done',
      });

      const updatedSession = response.data;
      dispatch(_endSession());
      localStorage.setItem('currentSession', null);
    } catch (error) {
      console.log(error);
    }
  };

const ADD_TASK = 'ADD_TASK';

const addTaskCreator = (session) => {
  return {
    type: ADD_TASK,
    session,
  };
};

const addTask = (task, sessionId) => {
  return async (dispatch) => {
    const response = await axios.post(
      `https://pomodoro-go-1.herokuapp.com/api/sessions/${sessionId}/tasks`,
      {
        task,
      }
    );
    const updatedSession = response.data;
    dispatch(addTaskCreator(updatedSession));
  };
};

const DELETE_TASK = 'DELETE_TASK';

const deleteTaskCreator = (session) => {
  return {
    type: DELETE_TASK,
    session,
  };
};

const deleteTask = (id, sessionId) => {
  return async (dispatch) => {
    const res = await axios.delete(
      `https://pomodoro-go-1.herokuapp.com/api/sessions/${sessionId}/tasks/${id}`
    );
    dispatch(deleteTaskCreator(res.data));
  };
};

const UPDATE_TASK = 'UPDATE_TASK';

const updateTaskActionCreator = (session) => {
  return {
    type: UPDATE_TASK,
    session,
  };
};

const updateTask = (taskId, sessionId) => async (dispatch) => {
  try {
    const res = await axios.put(
      `https://pomodoro-go-1.herokuapp.com/api/sessions/${sessionId}/tasks/${taskId}`
    );
    dispatch(updateTaskActionCreator(res.data));
  } catch (error) {
    console.log(error);
  }
};

const currentSessionReducer = (state = {}, action) => {
  if (
    action.type === CREATE_SESSION ||
    action.type === UPDATE_SESSION ||
    action.type === ADD_TASK ||
    action.type === DELETE_TASK ||
    action.type === UPDATE_TASK ||
    action.type === LOAD_SESSION
  ) {
    state = action.session;
  } else if (
    action.type === REMOVE_SESSION ||
    action.type === 'LOG_OUT' ||
    action.type === END_SESSION
  ) {
    return {};
  }
  return state;
};

export {
  loadSession,
  loadSessions,
  sessionsReducer,
  currentSessionReducer,
  addTask,
  updateTask,
  deleteTask,
  createSession,
  updateSession,
};
