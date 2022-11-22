import React from 'react'
import s from './CardList.module.scss'

import Card from './Card/card'
import { hasIntersect } from '../../common/helpers'

export default class CardList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      limit: parseInt(props.limit),
      filter: props.filter,
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount() {
    this.setState({
      url: this.props.url,
      limit: parseInt(this.props.limit),
      filter: this.props.filter,
      error: null,
      isLoaded: false,
      items: []
    })
    fetch(this.state.url)
      .then(res => res.json())
      .then(
        (result) => {
          if (this.state.limit !== 0) {
            result = result.slice(0, this.state.limit)
          }
          this.setState({
            isLoaded: true,
            items: result.filter(
              card => {
                 return hasIntersect(card.tags, this.state.filter)
               }
            )
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <>
          <div className={s.cardList}>
            {
              items.map((item, idx) => <Card key={idx} cardData={item}/>)
            }
          </div>
        </>
      )
    }
  }
}
