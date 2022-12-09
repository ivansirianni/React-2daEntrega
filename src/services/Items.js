import { ITEMS_LIST_DETAILS, ITEMS_FRUIT_LIST_DETAILS } from "../utilities/items";

export function getAllProjects() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ITEMS_LIST_DETAILS);
    }, 2000);
  });
}

export function getProject(projectId) {
  return new Promise((resolve, reject) => {
    const targetProject = ITEMS_LIST_DETAILS.find(
      (project) => project.id === projectId
    );
    setTimeout(() => resolve(targetProject), 1500);
  });
}

export function getFruitProjects() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ITEMS_FRUIT_LIST_DETAILS);
    }, 2000);
  });
}

export function getFruit(projectId) {
  return new Promise((resolve, reject) => {
    const targetProject = ITEMS_FRUIT_LIST_DETAILS.find(
      (project) => project.id === projectId
    );
    setTimeout(() => resolve(targetProject), 1500);
  });
}
