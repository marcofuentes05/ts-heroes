import {FC } from 'react'
import { observer } from "mobx-react"
import { makeAutoObservable } from "mobx"
import https from 'https'

import './styles.css'

const url = 'https://akabab.github.io/superhero-api/api/all.json';

const options = {
  hostname: url,
  method: 'GET'
}


interface Hero {
  id: number,
  name: string,
  slug: string,
  powerstats: {
    intelligence: number,
    strength: number,
    speed: number,
    durability: number,
    power: number,
    combat: number
  }
}

interface ListComponentInterface {
  list: Array<Hero>,
  isFetching: boolean,
}

export class MyList implements ListComponentInterface{
  list: Array<Hero> = []
  isFetching : boolean = false;
  constructor() {
    makeAutoObservable(this)
  }

  
  async getHeroes() {
    this.isFetching = true
    const response = await fetch(url)
    this.list = await response.json()
    this.isFetching = false
  }
  // componentDidMount() {
  //   this.getHeroes()
  // }

}

const algo: FC<{listComponent: ListComponentInterface}>  = ({ listComponent } ) => (
  <div>
    {listComponent.isFetching ? (
      <h1 className='loading'>
        Loading...
      </h1>
    ) : (
      <ul>
        {
          !listComponent.isFetching && listComponent.list && listComponent.list.map((item: Hero) => (
            <li>
              {`NOMBRE: ${item.name} INTELIGENCIA: ${item.powerstats.intelligence}`}
            </li>
          ))
        }
      </ul>
    )
    }
  </div>
)

export default observer(algo)