export default function ProductCategoryRow({ category }) {
    return (
      <tr>
        <th colSpan="2" style={{ backgroundColor: '#dddddd' }}>
          {category}
        </th>
      </tr>
    );
  }
  