import React from 'react';
import { useLocation } from 'react-router-dom';

const CategoryItems = () => {
    const {state:category}:any=useLocation();
    console.log(category)
//   if (!category?.category_id) {
//     return <div>No category selected</div>;
//   }

//   const selectedCategory = plates[0].categories.find((category: any) => category.category_id === categoryId);

  return (
    <div>
        <div style={{ display: "grid", justifyContent: 'center', gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(5, 1fr)", padding: "10%", gap: "30px", width: "75%", alignContent: "center" }}>
      {category?.items.map((item: any) => (
        <div key={item.item_id}>
                <div style={{ backgroundColor: "lightcoral", width: "100%", height: "250px", marginTop: "10px" }}>
                    <div style={{ marginTop: "5px", textAlign: "center", color: "black" }}>
                      {item.name}
                    </div>
                  </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default CategoryItems;
