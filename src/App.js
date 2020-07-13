import React, { Component } from 'react'
import Header from './Header';
import Filters from './Filters';
import Allfood from './Allfood';
import Basket from './Basket';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';


export default class App extends Component {
   state = {
      menu : [
         {
                     name:"پپرونی",
                     image:"/images/1.jpg",
                     price:48000,
                     categoury:"pizza"
                  },
                  {
                     name:"ژامبون",
                     image:"/images/2.jpg",
                     price:50000,
                     categoury:"pizza"
                  },
                  {
                     name:"چهار مزه",
                     image:"/images/3.jpg",
                     price:60000,
                     categoury:"pizza"
                  },
                  {
                     name:"مخصوص",
                     image:"/images/4.jpg",
                     price:60000,
                     categoury:"pizza"
                  },
                  {
                     name:"سبزیجات",
                     image:"/images/5.jpg",
                     price:46000,
                     categoury:"pizza"
                  },
                  {
                     name:"مکزیکانو",
                     image:"/images/6.jpg",
                     price:52000,
                     categoury:"pizza"
                  },
                  {
                     name:"استیک",
                     image:"/images/7.jpg",
                     price:54000,
                     categoury:"pizza"
                  },
                  {
                  name:"مرغ",
                  image:"/images/8.jpg",
                  price:50000,
                  categoury:"pizza"
                  },
                  {
                  name:"مارگاریتا",
                  image:"/images/9.jpg",
                  price:34000,
                  categoury:"pizza"
                  },
                  {
                  name:"برگر",
                  image:"/images/b-1.jpg",
                  price:48000,
                  categoury:"burger"
                  },
                  {
                  name:"چیزبرگر",
                  image:"/images/b-3.jpg",
                  price:50000,
                  categoury:"burger"
                  },
                  {
                  name:"دبل برگر",
                  image:"/images/b-2.jpg",
                  price:60000,
                  categoury:"burger"
                  },
                  {
                  name:"سیب زمینی",
                  image:"/images/sib.jpg",
                  price:8000,
                  categoury:"desert"
                  },
                  {
                  name:"سیب زمینی با پنیز",
                  image:"/images/french-fries.jpg",
                  price:12000,
                  categoury:"desert"
                  },
                  {
                  name:"دلستر",
                  image:"/images/delester.jpg",
                  price:5000,
                  categoury:"drink"
                  },
                  {
                  name:"کوکاکولا",
                  image:"/images/coca.jpg",
                  price:4500,
                  categoury:"drink"
                  },
                  {
                  name:"فانتا",
                  image:"/images/fanta.jpg",
                  price:4500,
                  categoury:"drink"
                  },
                  {
                  name:"اسپرایت",
                  image:"/images/7up.jpg",
                  price:4500,
                  categoury:"drink"
                  },






      ]
   }
//   state = {
//        menu: JSON.parse({
//          "name":"پپرونی",
//          "image":"/assets/images/pizza/peperoni.png",
//          "price":48000,
//          "categoury":"pizza"
//       },
//       {
//          "name":"ژامبون",
//          "image":"/assets/images/pizza/zhambon.png",
//          "price":50000,
//          "categoury":"pizza"
//       },
//       {
//          "name":"چهار مزه",
//          "image":"/assets/images/pizza/chaharmazeh.png",
//          "price":60000,
//          "categoury":"pizza"
//       },
//       {
//          "name":"مخصوص",
//          "image":"/assets/images/pizza/makhsos.png",
//          "price":60000,
//          "categoury":"pizza"
//       },
//       {
//          "name":"سبزیجات",
//          "image":"/assets/images/pizza/morgh.png",
//          "price":46000,
//          "categoury":"pizza"
//       },
//       {
//          "name":"مکزیکانو",
//          "image":"/assets/images/pizza/mekzikano.png",
//          "price":52000,
//          "categoury":"pizza"
//       },
//       {
//          "name":"استیک",
//          "image":"/assets/images/pizza/estaike.png",
//          "price":54000,
//          "categoury":"pizza"
//       },
//       {
//          "name":"مرغ",
//          "image":"/assets/images/pizza/morgh.png",
//          "price":50000,
//          "categoury":"pizza"
//       },
//       {
//          "name":"مارگاریتا",
//          "image":"/assets/images/pizza/margarita.png",
//          "price":34000,
//          "categoury":"pizza"
//       },
//       {
//          "name":"برگر",
//          "image":"/assets/images/food_icon05.jpg",
//          "price":48000,
//          "categoury":"burger"
//       },
//       {
//          "name":"چیزبرگر",
//          "image":"/assets/images/food_icon05.jpg",
//          "price":50000,
//          "categoury":"burger"
//       },
//       {
//          "name":"دبل برگر",
//          "image":"/assets/images/food_icon05.jpg",
//          "price":60000,
//          "categoury":"burger"
//       },
//       {
//          "name":"دلستر",
//          "image":"/assets/images/drink/delester.png",
//          "price":5000,
//          "categoury":"drink"
//       },
//       {
//          "name":"کوکاکولا",
//          "image":"/assets/images/drink/noshab-coke.png",
//          "price":4500,
//          "categoury":"drink"
//       },
//       {
//          "name":"فانتا",
//          "image":"/assets/images/drink/noshabe-fanta.png",
//          "price":4500,
//          "categoury":"drink"
//       },
//       {
//          "name":"اسپرایت",
//          "image":"/assets/images/drink/noshabe-sprite.png",
//          "price":4500,
//          "categoury":"drink"
//       },
//       {
//          "name":"سیب زمینی",
//          "image":"/assets/images/food_icon01.jpg",
//          "price":8000,
//          "categoury":"desert"
//       },
//       {
//          "name":"سیب زمینی با پنیز",
//          "image":"/assets/images/food_icon01.jpg",
//          "price":12000,
//          "categoury":"desert"
//       })   
//   }

  render() {
    return (
      <div className="body-main">
        <Header />
        <Filters />
        <div className="mainandbasket">
          <Allfood menu = {this.state.menu}/>
          <Basket />
        </div>
      </div>
    )
  }
}

