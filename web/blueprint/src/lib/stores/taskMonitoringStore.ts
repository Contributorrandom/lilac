import type {TaskInfo, TaskManifest} from '$lilac';
import {writable} from 'svelte/store';

const store = writable({
  taskCallbacks: new Map<string, Array<(task: TaskInfo) => void>>()
});

/**
 * Watch a task for completion or error.
 */
export function watchTask(taskid: string, onDone: (task: TaskInfo) => void) {
  store.update(state => {
    const currentCallbacks = state.taskCallbacks.get(taskid) || [];
    state.taskCallbacks.set(taskid, [...currentCallbacks, onDone]);
    return state;
  });
}

/**
 * Update the monitored tasks with a new task manifest.
 */
export function onTasksUpdate(taskManifest: TaskManifest) {
  store.update(state => {
    for (const taskid of state.taskCallbacks.keys()) {
      const task = taskManifest.tasks[taskid];
      if (task?.status == 'error' || task.status === 'completed') {
        const taskCallbacks = state.taskCallbacks.get(taskid) || [];
        while (taskCallbacks.length) {
          taskCallbacks.pop()?.(task);
        }
        state.taskCallbacks.delete(taskid);
      }
    }
    return state;
  });
}
