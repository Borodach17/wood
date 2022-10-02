import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Зеркало',
          img: 'зеркало1.jpg',
          des: 'Lorem ipsun dolor sit amet, consectetur adipisicing.',
          category: 'Зеркала',
          price: '38.99'
        },
        {
          id: 2,
          title: 'Зеркало',
          img: 'зеркало2.jpg',
          des: 'Lorem ipsun dolor sit amet, consectetur adipisicing.',
          category: 'Зеркала',
          price: '46.56'
        },
        {
          id: 3,
          title: 'Полочки',
          img: 'полочки.jpg',
          des: 'Lorem ipsun dolor sit amet, consectetur adipisicing.',
          category: 'Полочки',
          price: '28.99'
        },
        {
          id: 4,
          title: 'Светильник',
          img: 'светильник.jpg',
          des: 'Lorem ipsun dolor sit amet, consectetur adipisicing.',
          category: 'Светильники',
          price: '46.99'
        },
        {
          id: 5,
          title: 'Стол и стул',
          img: 'Столстул.jpg',
          des: 'Lorem ipsun dolor sit amet, consectetur adipisicing.',
          category: 'Диваны',
          price: '110.00'
        },
        {
          id: 6,
          title: 'Тумба',
          img: 'тумба.jpg',
          des: 'Lorem ipsun dolor sit amet, consectetur adipisicing.',
          category: 'Тумбы',
          price: '40.99'
        },
        {
          id: 7,
          title: 'Шкаф',
          img: 'шкаф.jpg',
          des: 'Lorem ipsun dolor sit amet, consectetur adipisicing.',
          category: 'Шкафы',
          price: '80.99'
        }
      ],
      ShowFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.ShowFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({ShowFullItem: !this.state.ShowFullItem })
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)

    this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;