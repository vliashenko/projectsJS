import { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Product from "./components/Product";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: [
        {
          id:1,
          title: 'Стілець сірий',
          img: 'https://i5.walmartimages.com/asr/e71514f2-e250-4027-94c5-f8159cfa0477_1.e29588b8edc7f302db76f92b7fee4abe.jpeg',
          desc: 'Темно-коричневий каркас з масиву деревини вкрито морилкою та лаком, щоб підкреслити природну текстуру деревини.',
          category: 'Стілець',
          price: '49.99',
          attributes: {color: ['#ffffff', '#939393']}
        },
        {
          id:2,
          title: 'Стіл',
          img: 'https://ii1.pepperfry.com/media/catalog/product/f/o/800x880/foldable-table-in-natural-colour-by-clasicraft-foldable-table-in-natural-colour-by-clasicraft-ahmtub.jpg',
          desc: 'Лаконічний та простий дизайн підходить до будь-якого стилю. Можна поєднати з іншими письмовими столами або тумбами MICKE МІККЕ серії.',
          category: 'Стіл',
          price: '149.99',
          attributes: {color: ['#ffffff', '#AE9E55', '#250F47', '#473C0F']}
        },
        {
          id:3,
          title: 'Диван',
          img: 'https://pyxis.nymag.com/v1/imgs/41a/37d/6bb7d0ba96a11b066a48080ee63378f3db-Sofa-Sofa-Desktop-Masthead-02.2x.rsocial.w600.jpg',
          desc: 'GLOSTAD ГЛОСТАД диван легко придбати, доставити додому та скласти. Насолоджуйтеся відпочинком із родиною та друзями на повну.',
          category: 'Диван',
          price: '329.99',
          attributes: {color: ['#ffffff', '#1B8CA9', '#623D21']}
        },
        {
          id:4,
          title: 'Лампа',
          img: 'https://www.ikea.com/gb/en/images/products/myrhult-lamp-shade-white__0789157_pe763849_s5.jpg?f=s',
          desc: 'Для виразного дизайну легко знайти місце. Він прикрасить будь-який темний куток вашої оселі.',
          category: 'Лампа',
          price: '19.99',
          attributes: {color: ['#1E1D1C', '#C28C51', '#623D21']}
        },
        {
          id:5,
          title: 'Стілець білий',
          img: 'https://www.ikea.com/gb/en/images/products/ingolf-chair-white-hallarp-beige__0926877_pe789566_s5.jpg?f=xxs',
          desc: 'Підійде до багатьох стилів, а якщо вам потрібен додатковий комфорт, просто додайте подушку на стілець.',
          category: 'Chairs',
          price: '49.99',
          attributes: {color: ['#ffffff', '#939393']}
        },
        {
          id:6,
          title: 'Стіл білий',
          img: 'https://www.decornation.in/wp-content/uploads/2020/01/designer-home-writing-desk.jpg',
          desc: 'Стіл добре поєднується з іншими меблями. Паперовий наповнювач у формі стільників додає столу міцності та легкості, тому його легко пересувати за потреби.',
          category: 'Стіл',
          price: '79.99',
          attributes: {color: ['#ffffff', '#939393']}
        }
      ],
      clicked: [],
      categories: ['Весь каталог','Стілець','Стіл','Диван','Лампа'],
      filteredArr: []
    }
  }

  onClickHandler = (id) => {
    this.setState(({items}) => {
      const newArr = items.filter(el => el.id === id)
      return {
        clicked : newArr
      }
    })
  }

  filterHandler = (category) => {
   
    this.setState(({items})=> {
      if(category !== "Весь каталог") {
        const newArr = items.filter(el => el.category === category)
        return {
          filteredArr: newArr
        }
      } else {
        return {
          filteredArr: []
        }
      }

    })
  }

  render() {
    return (
      <div className="wrapper"> 
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/product" exact element={<Product item={this.state.clicked}/>}/>
            <Route path="/" exact element={<Items filterHandler={this.filterHandler} filteredArr={this.state.filteredArr} categories={this.state.categories}  items={this.state.items} onClickHandler={this.onClickHandler}/>}/>
            <Route 
              path="*"
              element={<Navigate to="/" replace />}
              />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
