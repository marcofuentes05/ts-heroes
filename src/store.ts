import {createContext, useContext} from 'react';
import { makeAutoObservable } from "mobx";
import {Hero} from "./types/superhero";
import getHeroes from './utils/https';
import {ListComponentInterface} from "./types/listComponent";
const url = 'https://akabab.github.io/superhero-api/api/all.json';

export default class SuperHeroStore implements ListComponentInterface {
  list: Hero[] = [];
  isIndexing: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  *index() {
    this.isIndexing = true;
    this.list = yield getHeroes(url);
    this.isIndexing = false;
    return false;
  }
}

export const storeContext = createContext({
  superheroStore: new SuperHeroStore(),
});

export const useStore = () => {
  const store = useContext(storeContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}