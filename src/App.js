import './App.css';
import BlogCard from './BlogCard';
import {isArrayEmpty} from './Utils';

function App() {

  const blogArr = [
    {
      title: "Blog Title 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat esse mollitia neque nemo labore repellendus illo incidunt magnam tenetur? Magnam."
    },
    {
      title: "Blog Title 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat esse mollitia neque nemo labore repellendus illo incidunt magnam tenetur? Magnam."
    },
    {
      title: "Blog Title 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat esse mollitia neque nemo labore repellendus illo incidunt magnam tenetur? Magnam."
    }
  ];

  const blogCard = isArrayEmpty(blogArr) ? [] : blogArr.map((item, index) => {
    console.log(item);

    return (
      <BlogCard key={index} className="cardStyle" title={item.title} description={item.description}/>
      // <div className="cardStyle" key={index}>
      //   <h3>{item.title}</h3>
      //   <p>{item.description}</p>
      // </div>
    )

  })

  return (
    <div className="App">
      {blogCard}
    </div>
  );
}

export default App;
