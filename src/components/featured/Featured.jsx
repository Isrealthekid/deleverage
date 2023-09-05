import React,{useState} from 'react'
import './featured.css'
import Projects from './Projects'

const Featured = () => {
  const[items,setItems] = useState(Projects)
  const filterItem = (categoryItem) => {
    const updatedItems = Projects.filter((curElem) => {
      return curElem.category === categoryItem;
    })
    setItems(updatedItems)
  }

  return (
    <div className='denl__featured section__padding' id='featured'>
      <div className="denl__featured-content">
      <h4 className="denl__featured-subheading">
      Lorem ipsum dolor sit amet. in orange
      </h4>

      <h2 className="denl__featured-heading">
        Featured Projects
      </h2>

        <div className="projects__filter">
          <span className="projects__item" onClick={() => setItems(Projects)}>All</span>
          <span className="projects__item" onClick={() => filterItem("Construction")}>Construction</span>
          <span className="projects__item" onClick={() => filterItem("Architecture")}>Architecture</span>
          <span className="projects__item" onClick={() => filterItem("Interior Design")}>Interior Design</span>
        </div>
      <div className="denl__featured-projects__container">
        {items.map((elem) => {
          const{id, image, title,category} = elem;
          return(
            <div className='projects__card' key={id}>
              <div className="projects__thumbnail">
                <img src={image} alt="" className='projects__img' />
                <div className='projects__mask'></div>
              </div>
              <span className='projects__category'>{category}</span>
              <h3 className='projects__title'>{title}</h3>

            </div>
          )
        })}
      </div>

      </div>
    </div>
  )
}

export default Featured