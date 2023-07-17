export default function Stats({items}){

  if(!items.length){
    return (
      <p className='stats'>
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  const numItems=items.length;
  const packedItems=items.filter(item=>item.packed).length;
  const percentagePackedItems=Math.round(packedItems/numItems * 100);
  return (
    <footer className="stats">
      <em>{percentagePackedItems===100
           ? `You've got everything ! let's go ✈️` 
           : `👜 You have ${numItems} items on your list, and you have already packed ${packedItems} (${percentagePackedItems}%)`}
      </em>
    </footer>
  )
}