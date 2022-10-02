import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'Полочки',
                    name: 'Полочки'
                },
                {
                    key: 'Светильники',
                    name: 'Светильники'
                },
                {
                    key: 'Диваны',
                    name: 'Диваны'
                },
                {
                    key: 'Тумбы',
                    name: 'Тумбы'
                },
                {
                    key: 'Шкафы',
                    name: 'Шкафы'
                },
                {
                    key: 'Зеркала',
                    name: 'Зеркала'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'> 
        {this.state.categories.map (el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
                {el.name}
                </div>
        ))}
      </div>
    )
  }
}

export default Categories