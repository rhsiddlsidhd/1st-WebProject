import { useState, useRef, useEffect } from 'react';
import '../css/manage_image.css';
import Modal from 'react-modal';
import axios from 'axios';

const customModalStyles = {
  overlay: {
    backgroundColor: ' rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100vh',
    zIndex: '100',
    position: 'fixed',
    top: '0',
    left: '0',
  },
  content: {
    width: '360px',
    height: '180px',
    zIndex: '150',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'white',
    overflow: 'auto',
  },
};
const ManageImage = ({ prd }) => {
  const [product, setProduct] = useState(prd);
  const [mainImages, setMainImages] = useState(prd.main_images);
  const [detailImages, setDetailImages] = useState(prd.detail_images);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalText, setModalText] = useState('');

  const mainInputRef = useRef(null);
  const detailInputRef = useRef(null);

  console.log('ManageImage :', product);
  const handleMove = (target, direction, index) => (e) => {
    e.preventDefault();
    console.log(target, direction, index);
    const startIndex = index;
    let endIndex = -1;
    console.log('>>>', mainImages.length);

    const imageArray = target === 'main' ? mainImages : detailImages;

    if (direction === '+') {
      if (imageArray.length > startIndex + 1) {
        endIndex = startIndex + 1;
      }
    } else {
      if (startIndex - 1 >= 0) {
        endIndex = startIndex - 1;
      }
    }
    console.log(startIndex, endIndex);
    if (endIndex !== -1) {
      const startImg = imageArray[startIndex];
      const endImg = imageArray[endIndex];

      const arranged = [...imageArray];
      arranged[endIndex] = startImg;
      arranged[startIndex] = endImg;
      setMainImages(arranged);
    }
  };

  useEffect(() => {
    setMainImages(product.main_images);
    setDetailImages(product.detail_images);
  }, [product]);

  const handleDeleteImage = (target, img_id) => (e) => {
    e.preventDefault();
    const product_id = product._id;
    setModalText(`이미지를 삭제 중입니다...\n${img_id}`);
    setModalIsOpen(true);
    axios({
      method: 'DELETE',
      url: `/api/products/${product_id}/images/${target}`,
      data: JSON.stringify({ images: [img_id] }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        const prd = res.data;
        console.log('after delete product :', prd);
        setProduct(prd);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setModalIsOpen(false);
      });
  };

  const handleUpdateImages = (e) => {
    e.preventDefault();
    setModalText('이미지를 업로드 중입니다...');
    setModalIsOpen(true);
    setTimeout(() => {
      //해당 부분은 업로드 로직으로 대체될 코드
      setModalIsOpen(false);
    }, 1200);
  };

  const handleAddImages = (target) => (e) => {
    e.preventDefault();
    e.persist();
    if (target === 'main') {
      mainInputRef.current.click();
    } else {
      detailInputRef.current.click();
    }
  };

  const handleFilesChange = (target) => (e) => {
    const files = e.target.files;
    const product_id = product._id;
    if (files.length === 0) {
      return;
    }
    setModalText('이미지를 업로드 중입니다...');
    setModalIsOpen(true);
    console.log(target, 'files are', files);
    const formData = new FormData();
    for (let file of files) {
      formData.append('files', file);
    }
    axios({
      method: 'POST',
      url: `/api/products/${product_id}/images/${target}`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        const prd = res.data;
        console.log('result product :', prd);
        setProduct(prd);
        setMainImages(prd.main_images);
        setDetailImages(prd.detail_images);
      })
      .finally(() => {
        setModalIsOpen(false);
      });
    console.log(formData);
  };

  return (
    <div>
      <Modal isOpen={modalIsOpen} style={customModalStyles} ariaHideApp={true}>
        {modalText}
      </Modal>
      <div>
        메인이미지
        <input
          type='file'
          ref={mainInputRef}
          onChange={handleFilesChange('main')}
          accept='image/jpg,image/png,image/jpeg,image/gif'
          multiple
          hidden
        />
        <button onClick={handleAddImages('main')}>추가</button>
        <table>
          <tbody>
            {mainImages.map((img, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{img.url}</td>
                  {/* <img
                    src={img.url}
                    alt=''
                    srcset=''
                    class='image-manager__main_image'
                  /> */}
                  <td>
                    <button onClick={handleMove('main', '-', index)}>up</button>
                  </td>
                  <td>
                    <button onClick={handleMove('main', '+', index)}>
                      down
                    </button>
                  </td>
                  <td>
                    <button onClick={handleDeleteImage('main', img.image_id)}>
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        상세이미지
        <input
          type='file'
          ref={detailInputRef}
          onChange={handleFilesChange('detail')}
          accept='image/jpg,image/png,image/jpeg,image/gif'
          multiple
          hidden
        />
        <button onClick={handleAddImages('detail')}>추가</button>
        <table>
          <tbody>
            {detailImages.map((img, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{img.url}</td>
                  {/* <img
                    src={img.url}
                    alt=''
                    srcset=''
                    class='image-manager__main_image'
                  /> */}
                  <td>
                    <button onClick={handleMove('main', '-', index)}>up</button>
                  </td>
                  <td>
                    <button onClick={handleMove('main', '+', index)}>
                      down
                    </button>
                  </td>
                  <td>
                    <button onClick={handleDeleteImage('detail', img.image_id)}>
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button onClick={handleUpdateImages}>이미지 저장</button>
    </div>
  );
};
export default ManageImage;
