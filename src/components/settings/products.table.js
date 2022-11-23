import React, { useState } from 'react'
import { Image, Form, Button } from 'react-bootstrap';
import { BsPencil, BsCheckLg, BsTrash2Fill } from 'react-icons/bs';
function ProductTable(props) {
  const product = props.product
  const [editProduct, setEditProduct] = useState(false);
  const [editedProduct, setEditedProduct] = useState({});

  const handleEditProductClick = (e) => {
    setEditedProduct(product);
    setEditProduct(true);
  }

  const handleEditProductChange = (e) => {
    setEditedProduct({
      ...editedProduct,
      [e.target.name]: e.target.value
    });

    console.log(editedProduct);
  }

  const handleEditProductSubmit = (e) => {
    props.editProductSubmit(editedProduct);
    setEditProduct(false);
  }

  return (
    <tr key={product.productID}>
      <td>{product.prodImage === '' ?
        <Image fluid roundedCircle styles={{ height: '40px', width: '40px' }} src={product.productPicture} alt="Product" /> :
        <Image fluid roundedCircle src="https://via.placeholder.com/40" alt="Product" />
      }</td>
      {editProduct ?
        <td><Form.Control type="text" name="prodName" value={editedProduct.prodName} onChange={handleEditProductChange} /></td>
        :
        <td>{product.prodName}</td>
      }

      {editProduct ?
        <td><Form.Control type="text" name="prodPrice" value={editedProduct.prodPrice} onChange={handleEditProductChange} /></td>
        :
        <td>{product.prodPrice}</td>
      }

      {editProduct ?
        <td><Form.Control type="text" name="prodCategory" value={editedProduct.prodCategory} onChange={handleEditProductChange} /></td>
        :
        <td>{product.prodCategory}</td>
      }
      {editProduct ?
        <td><Form.Control type="text" name="prodDescription" value={editedProduct.prodDescription} onChange={handleEditProductChange} /></td>
        :
        <td>{product.prodDescription}</td>
      }
      {editProduct ?
        <td><Form.Control type="text" name="prodQuantity" value={editedProduct.prodQuantity} onChange={handleEditProductChange} /></td>
        :
        <td>{product.prodQuantity}</td>
      }

      {editProduct ?
        <td><Button variant="success" onClick={handleEditProductSubmit}><BsCheckLg /></Button></td>
        :
        <td><Button variant="primary" onClick={handleEditProductClick}><BsPencil /></Button></td>
      }

      <td><Button variant="danger" onClick={() => props.deleteProduct(product.productID)}><BsTrash2Fill /></Button></td>
    </tr>
  )
}

export default ProductTable