/*
projects = {
                projectName:[name, description, date, priority], [name, description, date, priority];
                projectName:[name, description, date, priority];
              }
*/
import { formatDistance, subDays } from "date-fns";
formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true });

export class Task {
  constructor(name, description, date, priority, project) {
    this.id = Date.now();
    this._name = name;
    this._description = description;
    this._date = date;
    this._priority = priority;
    this._project = project;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get date() {
    return this._date;
  }

  get priority() {
    return this._priority;
  }

  get project() {
    return this._project;
  }
}
