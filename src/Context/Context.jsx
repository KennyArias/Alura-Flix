const { createContext } = require("react");


export const CategoryContext = createContext();

const categories = [
  {
    title: "Front End",
    color: "#6BD1FF"
  },
  {
    title: "Back End",
    color: "#00C86F"
  },
  {
    title: "Innovación y Gestión",
    color: "#FFBA05"
  }
];

const titles = categories.map((category)=> category.title);

const CategoryContextProvider = ({children}) =>{


    return(
        <CategoryContext.Provider value={{
          categories,
          titles
        }}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryContextProvider;