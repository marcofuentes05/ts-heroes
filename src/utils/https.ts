import {Hero} from '../types/superhero';

async function getJSON(url: string): Promise<Array<Hero>> {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export default (val) => getJSON(val);
