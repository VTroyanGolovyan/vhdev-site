import React from 'react'
import s from './CardList.module.scss'

import Card from './Card/card'

export default class CardList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      limit: parseInt(props.limit),
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(this.state.url)
      .then(res => res.json())
      .then(
        (result) => {
          if (this.state.limit !== 0) {
            result = result.slice(0, this.state.limit)
          }
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
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
