import {FC, useEffect} from 'react'
import {flowResult} from 'mobx';
import { observer } from "mobx-react"
import { Hero } from "../../types/superhero";
import {ListComponentInterface} from '../../types/listComponent'
import {useStore} from '../../store';

import logo from '../../logo.svg';

import './styles.css'

const Algo: FC = () => {
  const {superheroStore} = useStore();

  useEffect(() => {
    superheroStore.index();
  }, [])
  return(
  <div>
    {superheroStore.isIndexing ? (
      <img src={logo} alt='' className='loading' />
    ) : (
      <ul>
        {
          !superheroStore.isIndexing && superheroStore.list && superheroStore.list.map((item: Hero) => (
            <li>
              {`NOMBRE: ${item.name} INTELIGENCIA: ${item.powerstats.intelligence}`}
            </li>
          ))
        }
      </ul>
    )
    }
  </div>
)}

export default observer(Algo)