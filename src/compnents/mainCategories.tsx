import React from 'react';
import { useEffect, useState } from 'react';

interface AnotherComponentProps {
  selectedDivId: string | null;
}

const PlatePassMenu: React.FC<AnotherComponentProps> = ({ selectedDivId }) => {
  // const [plates, setPlates] = useState<any[]>([]);

  // useEffect(() => {
  //   getPlates();
  // }, []);

  // const getPlates = async () => {
  //   try {
  //     const res = await fetch('https://urban-staging.novadine.com/api/v2/stores/000/menus?service_type_id=2&skip_pick_lists=true');
  //     const data = await res.json();
  //     console.log(data);
  //     setPlates(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const filteredItems = plates.filter((plate) => plate.menu_id === selectedDivId);

  return (
    <div>
      {/* {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <div key={item.menu_id}>
            <h2>{item.name}</h2>
            {item.categories.map((category: any) => (
              <div key={category.category_id}>
                <h3>{category.name}</h3>
                {category.items.map((menuItem: any) => (
                  <div key={menuItem.item_id}>
                    <p>{menuItem.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))
      ) : (
        <div style={{color:"black"}}>No items found.</div>
      )} */}
      {/* <h1 style={{color:"black"}}>Selected Item Name: {selectedDivId}</h1> */}



    </div>
  );
};

export default PlatePassMenu;
